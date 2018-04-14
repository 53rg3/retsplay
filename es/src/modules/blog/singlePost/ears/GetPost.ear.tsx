import {Reducer} from "../../../../lib/ear/Reducer";
import {HttpResponse} from "../../../../lib/ajax/HttpResponse";
import {BlogPost} from "../../commons/models/BlogPost";
import {EAR} from "../../../../lib/ear/EAR";
import {Act} from "../../../../app/ActionTypes";
import {Schema} from "../../../../app/Schema";
import {HttpRequest} from "../../../../lib/ajax/HttpRequest";
import {Method, ResponseType} from "../../../../lib/ajax/HttpMeta";
import {Api} from "../../../../app/Api";
import {Observable} from "rxjs/Observable";
import {FSAction} from "../../../../lib/ear/FSAction";


export class GetPostEar extends Reducer<HttpResponse<BlogPost>> {

    public readonly request = new EAR(this, c => c
        .setDispatchAction(Act.blog.getPost.SEND)
        .addReducer(Act.blog.getPost.SEND, HttpResponse.loading)
        .addReducer(Act.blog.getPost.SUCCESS, HttpResponse.success)
        .addReducer(Act.blog.getPost.ERROR, HttpResponse.error)
    );

    public readonly invalidate = new EAR(this, c=>c
        .setDispatchAction(Act.blog.getPost.INVALIDATE)
        .addReducer(Act.blog.getPost.INVALIDATE, HttpResponse.initial));

    private constructor() {
        super(HttpResponse.initial(), Schema.blog.getPost);

        this.request.setEpic(EAR.createEpic(action => action
            .ofType(Act.blog.getPost.SEND)
            .debounceTime(250)
            .mergeMap((action: any) => {
                    const request = new HttpRequest(c => c
                        .method(Method.GET)
                        .url(Api.blog.GET_SINGLE_POST.replace(":id", action.payload))
                        .responseType(ResponseType.JSON));
                    return Observable.ajax(request)
                        .map(response => FSAction.create(Act.blog.getPost.SUCCESS, response))
                        .catch(error => FSAction.asObservable(Act.blog.getPost.ERROR, error))
                }
            )));
    }

    private static _INST: GetPostEar;
    static get INST(): GetPostEar {
        if (!this._INST) {
            this._INST = new GetPostEar();
        }
        return this._INST;
    }
}
