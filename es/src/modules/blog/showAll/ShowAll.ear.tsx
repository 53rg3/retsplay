import {Schema} from "../../../app/Schema";
import {HttpResponse} from "../../../lib/ajax/HttpResponse";
import {Act} from "../../../app/ActionTypes";
import {HttpRequestEAR} from "../../../lib/ajax/HttpRequestEAR";
import {Method, ResponseType} from "../../../lib/ajax/HttpMeta";
import {Api} from "../../../app/Api";
import {HttpRequest} from "../../../lib/ajax/HttpRequest";
import {Person} from "../../ajaxexample/models/Person";
import {Reducer} from "../../../lib/ear/Reducer";

export class ShowAllEar extends Reducer<HttpResponse<Person>> {

    private requestConfig = new HttpRequest(c => c
        .method(Method.GET)
        .url(Api.blog.GET_ALL_POSTS)
        .responseType(ResponseType.JSON));
    public readonly request = HttpRequestEAR.create(this, c => c
        .request(this.requestConfig)
        .actionTypes(Act.blogShowAll));

    private constructor() {
        super(HttpResponse.initial(), Schema.blogShowAll);
    }


    private static _INST: ShowAllEar;
    static get INST(): ShowAllEar {
        if (!this._INST) {
            this._INST = new ShowAllEar();
        }
        return this._INST;
    }
}
