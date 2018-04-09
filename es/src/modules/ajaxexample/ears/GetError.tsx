import {JsonResponse} from "../../../lib/ajax/JsonResponse";
import 'rxjs/add/observable/of';
import {Reducer} from "../../../lib/ear/Reducer";
import {EAR} from "../../../lib/ear/EAR";
import {Act} from "../../../app/ActionType";
import {Person} from "../models/Person";
import {Api} from "../../../app/Api";
import {ajax} from "rxjs/observable/dom/ajax";
import {FSAction} from "../../../lib/ear/FSAction";


export class GetErrorEar extends Reducer<JsonResponse<Person>> {

    public readonly request = new EAR(this, c => c
        .setDispatchAction(Act.ajaxRequests.getError.SEND)
        .addReducer(Act.ajaxRequests.getError.SEND, JsonResponse.loading)
        .addReducer(Act.ajaxRequests.getError.SUCCESS, JsonResponse.success)
        .addReducer(Act.ajaxRequests.getError.ERROR, JsonResponse.error)
    );

    private constructor() {
        super(JsonResponse.initial());

        this.request.setEpic(EAR.createEpic(action => action
            .ofType(Act.ajaxRequests.getError.SEND)
            .debounceTime(250)
            .mergeMap((action:any) =>
                ajax.get(Api.ajaxRequests.EXAMPLE_ERROR_URL)
                    .map(response => FSAction.create(Act.ajaxRequests.getError.SUCCESS, response))
                    .catch(error => FSAction.observable(Act.ajaxRequests.getError.ERROR, error)))));
    }


    
    private static _INST: GetErrorEar;
    static get INST(): GetErrorEar {
        if (!this._INST) {
            this._INST = new GetErrorEar();
        }
        return this._INST;
    }
}


