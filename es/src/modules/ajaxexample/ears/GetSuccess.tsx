import {JsonResponse} from "../../../lib/ajax/JsonResponse";
import {Reducer} from "../../../lib/ear/Reducer";
import {EAR} from "../../../lib/ear/EAR";
import {Act} from "../../../app/ActionType";
import {Person} from "../models/Person";
import {Api} from "../../../app/Api";
import {ajax} from "rxjs/observable/dom/ajax";
import {FSAction} from "../../../lib/ear/FSAction";


export class GetSuccessEar extends Reducer<JsonResponse<Person>> {

    public readonly request = new EAR(this, c => c
        .setDispatchAction(Act.ajaxRequests.getSuccess.SEND)
        .addReducer(Act.ajaxRequests.getSuccess.SEND, JsonResponse.loading)
        .addReducer(Act.ajaxRequests.getSuccess.SUCCESS, JsonResponse.success)
        .addReducer(Act.ajaxRequests.getSuccess.ERROR, JsonResponse.error)
    );

    private constructor() {
        super(JsonResponse.initial());

        this.request.setEpic(EAR.createEpic(action => action
            .ofType(Act.ajaxRequests.getSuccess.SEND)
            .debounceTime(250)
            .mergeMap((action:any) =>
                ajax.get(Api.ajaxRequests.EXAMPLE_SUCCESS_URL)
                    .map(response => FSAction.create(Act.ajaxRequests.getSuccess.SUCCESS, response))
                    .catch(error => FSAction.observable(Act.ajaxRequests.getSuccess.ERROR, error)))));
    }



    private static _INST: GetSuccessEar;
    static get INST(): GetSuccessEar {
        if (!this._INST) {
            this._INST = new GetSuccessEar();
        }
        return this._INST;
    }
}


