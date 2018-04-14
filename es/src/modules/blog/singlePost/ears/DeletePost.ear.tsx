import {BlogPost} from "../../commons/models/BlogPost";
import {Act} from "../../../../app/ActionTypes";
import {FSAction} from "../../../../lib/ear/FSAction";
import {Observable} from "rxjs/Observable";
import {EAR} from "../../../../lib/ear/EAR";
import {Method, ResponseType} from "../../../../lib/ajax/HttpMeta";
import {Api} from "../../../../app/Api";
import {HttpRequest} from "../../../../lib/ajax/HttpRequest";
import {Schema} from "../../../../app/Schema";
import {HttpResponse} from "../../../../lib/ajax/HttpResponse";
import {Reducer} from "../../../../lib/ear/Reducer";

export class DeletePostEar extends Reducer<HttpResponse<BlogPost>> {

    public readonly request = new EAR(this, c => c
        .setDispatchAction(Act.blog.deletePost.SEND)
        .addReducer(Act.blog.deletePost.SEND, HttpResponse.loading)
        .addReducer(Act.blog.deletePost.SUCCESS, HttpResponse.success)
        .addReducer(Act.blog.deletePost.ERROR, HttpResponse.error)
    );

    private constructor() {
        super(HttpResponse.initial(), Schema.blog.deletePost);

        this.request.setEpic(EAR.createEpic(action => action
            .ofType(Act.blog.deletePost.SEND)
            .mergeMap((action: any) => {
                    const request = new HttpRequest(c => c
                        .method(Method.DELETE)
                        .url(Api.blog.DELETE_POST.replace(":id", action.payload))
                        .responseType(ResponseType.JSON));
                    return Observable.ajax(request)
                        .map(response => FSAction.create(Act.blog.deletePost.SUCCESS, response))
                        .catch(error => FSAction.asObservable(Act.blog.deletePost.ERROR, error))
                }
            )));
    }

    private static _INST: DeletePostEar;
    static get INST(): DeletePostEar {
        if (!this._INST) {
            this._INST = new DeletePostEar();
        }
        return this._INST;
    }
}
