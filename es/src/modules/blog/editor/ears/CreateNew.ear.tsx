import {BlogPost} from "../../commons/models/BlogPost";
import {Schema} from "../../../../app/Schema";
import {HttpResponse} from "../../../../lib/ajax/HttpResponse";
import {Act} from "../../../../app/ActionTypes";
import {RequestEAR} from "../../../../lib/ajax/HttpRequestEAR";
import {Method, ResponseType} from "../../../../lib/ajax/HttpMeta";
import {Api} from "../../../../app/Api";
import {HttpRequest} from "../../../../lib/ajax/HttpRequest";
import {Reducer} from "../../../../lib/ear/Reducer";

export class CreateNewEar extends Reducer<HttpResponse<BlogPost>> {

    private requestConfig = new HttpRequest(c => c
        .method(Method.POST)
        .url(Api.blog.CREATE_NEW_POST)
        .responseType(ResponseType.JSON));
    public readonly request = RequestEAR.create(this, c => c
        .request(this.requestConfig)
        .actionTypes(Act.blog.createNew));

    private constructor() {
        super(HttpResponse.initial(), Schema.blog.createNew);
    }


    private static _INST: CreateNewEar;
    static get INST(): CreateNewEar {
        if (!this._INST) {
            this._INST = new CreateNewEar();
        }
        return this._INST;
    }
}
