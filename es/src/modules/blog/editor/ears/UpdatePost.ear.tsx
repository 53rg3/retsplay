import {BlogPost} from "../../commons/models/BlogPost";
import {Act} from "../../../../app/ActionTypes";
import {FSAction} from "../../../../lib/ear/FSAction";
import {Observable} from "rxjs/Observable";
import {EAR} from "../../../../lib/ear/EAR";
import {Method, ResponseType} from "../../../../lib/ajax/HttpMeta";
import {Api} from "../../../../app/Api";
import {HttpRequest} from "../../../../lib/ajax/HttpRequest";
import {Schema} from "../../../../app/StateTree";
import {HttpResponse} from "../../../../lib/ajax/HttpResponse";
import {Reducer} from "../../../../lib/ear/Reducer";

export class UpdatePostEar extends Reducer<HttpResponse<BlogPost>> {

    public readonly request = new EAR(this, c => c
        .setDispatchAction(Act.blogUpdatePost.SEND)
        .addReducer(Act.blogUpdatePost.SEND, HttpResponse.loading)
        .addReducer(Act.blogUpdatePost.SUCCESS, HttpResponse.success)
        .addReducer(Act.blogUpdatePost.ERROR, HttpResponse.error)
    );

    private constructor() {
        super(HttpResponse.initial(), Schema.blogUpdatePost);

        this.request.setEpic(EAR.createEpic(action => action
            .ofType(Act.blogUpdatePost.SEND)
            .mergeMap((action: any) => {
                const request = new HttpRequest(c => c
                    .method(Method.POST)
                    .body(action.payload)
                    .url(Api.blog.UPDATE_POST.replace(":id", action.payload.id))
                    .responseType(ResponseType.JSON));
                return (Observable.ajax(request)
                    .map(response => FSAction.create(Act.blogUpdatePost.SUCCESS, response))
                    .catch(error => FSAction.asObservable(Act.blogUpdatePost.ERROR, error)))
            })));
    }

    private static _INST: UpdatePostEar;
    static get INST(): UpdatePostEar {
        if (!this._INST) {
            this._INST = new UpdatePostEar();
        }
        return this._INST;
    }
}
