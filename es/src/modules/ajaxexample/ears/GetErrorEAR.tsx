import {HttpResponse} from "../../../lib/ajax/HttpResponse";
import 'rxjs/add/observable/of';
import {Reducer} from "../../../lib/ear/Reducer";
import {EAR} from "../../../lib/ear/EAR";
import {Person} from "../models/Person";
import {Api} from "../../../app/Api";
import {FSAction} from "../../../lib/ear/FSAction";
import {Act} from "../../../app/ActionTypes";
import {HttpRequest} from "../../../lib/ajax/HttpRequest";
import {Observable} from "rxjs/Observable";
import {Method, ResponseType} from "../../../lib/ajax/HttpMeta";
import {Schema} from "../../../app/Schema";


export class GetErrorEar extends Reducer<HttpResponse<Person>> {

    public readonly request = new EAR(this, c => c
        .setDispatchAction(Act.ajaxRequests.getError.SEND)
        .addReducer(Act.ajaxRequests.getError.SEND, HttpResponse.loading)
        .addReducer(Act.ajaxRequests.getError.SUCCESS, HttpResponse.success)
        .addReducer(Act.ajaxRequests.getError.ERROR, HttpResponse.error)
    );

    private constructor() {
        super(HttpResponse.initial(), Schema.ajaxRequests.getError);

        const request = new HttpRequest(c=>c
            .method(Method.GET)
            .url(Api.ajaxRequests.EXAMPLE_ERROR_URL)
            .responseType(ResponseType.TEXT));
        this.request.setEpic(EAR.createEpic(action => action
            .ofType(Act.ajaxRequests.getError.SEND)
            .debounceTime(250)
            .mergeMap((action:any) => // action.payload contains the request body sent from the component, set request.body here
                Observable.ajax(request)
                    .map(response => FSAction.create(Act.ajaxRequests.getError.SUCCESS, response))
                    .catch(error => FSAction.asObservable(Act.ajaxRequests.getError.ERROR, error)))));
    }

    private static _INST: GetErrorEar;
    static get INST(): GetErrorEar {
        if (!this._INST) {
            this._INST = new GetErrorEar();
        }
        return this._INST;
    }
}


