import {HttpResponse} from "../../../lib/ajax/HttpResponse";
import {Reducer} from "../../../lib/ear/Reducer";
import {Person} from "../models/Person";
import {Api} from "../../../app/Api";
import {Act} from "../../../app/ActionTypes";
import {HttpRequest} from "../../../lib/ajax/HttpRequest";
import {Method, ResponseType} from "../../../lib/ajax/HttpMeta";
import {HttpRequestEAR} from "../../../lib/ajax/HttpRequestEAR";
import {Schema} from "../../../app/StateTree";


export class PostErrorEar extends Reducer<HttpResponse<Person>> {

    private httpRequest = new HttpRequest(c => c
        .method(Method.POST)
        .url(Api.ajaxRequests.EXAMPLE_ERROR_URL)
        .responseType(ResponseType.TEXT));
    public readonly request = HttpRequestEAR.create(this, c => c
        .request(this.httpRequest)
        .actionTypes(Act.ajaxRequestsPostError)
        .debounce(250));

    private constructor() {
        super(HttpResponse.initial(), Schema.ajaxRequestsPostError);
    }

    private static _INST: PostErrorEar;
    static get INST(): PostErrorEar {
        if (!this._INST) {
            this._INST = new PostErrorEar();
        }
        return this._INST;
    }

}


