import {HttpResponse} from "../../../lib/ajax/HttpResponse";
import {Reducer} from "../../../lib/ear/Reducer";
import {Person} from "../models/Person";
import {Api} from "../../../app/Api";
import {Act} from "../../../app/ActionTypes";
import {HttpRequest} from "../../../lib/ajax/HttpRequest";
import {Method, ResponseType} from "../../../lib/ajax/HttpMeta";
import {HttpRequestEAR} from "../../../lib/ajax/HttpRequestEAR";
import {Schema} from "../../../app/Schema";


export class GetSuccessEar extends Reducer<HttpResponse<Person>> {

    private requestConfig = new HttpRequest(c => c
        .method(Method.GET)
        .url(Api.ajaxRequests.EXAMPLE_SUCCESS_URL)
        .responseType(ResponseType.JSON));
    public readonly request = HttpRequestEAR.create(this, c => c
        .request(this.requestConfig)
        .actionTypes(Act.ajaxRequestsGetSuccess)
        .debounce(250));

    private constructor() {
        super(HttpResponse.initial(), Schema.ajaxRequestsGetSuccess);
    }


    private static _INST: GetSuccessEar;
    static get INST(): GetSuccessEar {
        if (!this._INST) {
            this._INST = new GetSuccessEar();
        }
        return this._INST;
    }
}


