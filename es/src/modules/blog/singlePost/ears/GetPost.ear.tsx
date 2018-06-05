import {Reducer} from "../../../../lib/ear/Reducer";
import {HttpResponse} from "../../../../lib/ajax/HttpResponse";
import {BlogPost} from "../../commons/models/BlogPost";
import {EAR} from "../../../../lib/ear/EAR";
import {Act} from "../../../../app/ActionTypes";
import {Schema} from "../../../../app/StateTree";
import {HttpRequest} from "../../../../lib/ajax/HttpRequest";
import {Method, ResponseType} from "../../../../lib/ajax/HttpMeta";
import {Api} from "../../../../app/Api";
import {Observable} from "rxjs/Observable";
import {FSAction} from "../../../../lib/ear/FSAction";


export class GetPostEar extends Reducer<HttpResponse<BlogPost>> {

    public readonly request = new EAR(this, c => c
        .setDispatchAction(Act.blogGetPost.SEND)
        .addReducer(Act.blogGetPost.SEND, HttpResponse.loading)
        .addReducer(Act.blogGetPost.SUCCESS, HttpResponse.success)
        .addReducer(Act.blogGetPost.ERROR, HttpResponse.error)
    );

    public readonly invalidate = new EAR(this, c=>c
        .setDispatchAction(Act.blogGetPost.INVALIDATE)
        .addReducer(Act.blogGetPost.INVALIDATE, HttpResponse.initial));

    private constructor() {
        super(HttpResponse.initial(), Schema.blogGetPost);

        this.request.setEpic(EAR.createEpic(action => action
            .ofType(Act.blogGetPost.SEND)
            .debounceTime(250)
            .mergeMap((action: any) => {
                    const request = new HttpRequest(c => c
                        .method(Method.GET)
                        .url(Api.blog.GET_SINGLE_POST.replace(":id", action.payload))
                        .responseType(ResponseType.JSON));
                    return Observable.ajax(request)
                        .map(response => FSAction.create(Act.blogGetPost.SUCCESS, response))
                        .catch(error => FSAction.asObservable(Act.blogGetPost.ERROR, error))
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
