import {AjaxRequest} from "rxjs/Rx";
import {GenericBuilder, GenericConfig} from "../helpers/GenericBuilder";
import {Checks} from "../helpers/Checks";
import {HttpResponse} from "./HttpResponse";
import {Reducer} from "../ear/Reducer";
import {EAR} from "../ear/EAR";
import {FSAction} from "../ear/FSAction";
import {Observable} from "rxjs/Observable";
import {HttpRequestActionTypes} from "./HttpRequest";


class RequestEARConfig {
    request: AjaxRequest;
    actionTypes: HttpRequestActionTypes;
    debounce: number;
}

export class HttpRequestEAR {
    private constructor() {
    }

    public static create<T, R extends Reducer<T>>(parentEAR: R, cfg: (cfg: GenericConfig<RequestEARConfig>) => GenericConfig<RequestEARConfig>) {
        const config: RequestEARConfig = GenericBuilder.buildFromConfig(cfg);
        const request = Checks.throwIfNil(config.request, "'request' must not be null.'");
        const actionTypes = Checks.throwIfNil(config.actionTypes, "'actionTypes' must not be null.'");
        const debounce = config.debounce;

        const ear = new EAR(parentEAR, c => c
            .setDispatchAction(actionTypes.SEND)
            .addReducer(actionTypes.SEND, HttpResponse.loading)
            .addReducer(actionTypes.SUCCESS, HttpResponse.success)
            .addReducer(actionTypes.ERROR, HttpResponse.error));
        ear.setEpic(EAR.createEpic(action => action
            .ofType(actionTypes.SEND)
            .debounceTime(debounce)
            .mergeMap((action: any) => {
                request.body = action.payload;
                return Observable.ajax(request)
                    .map(response => FSAction.create(actionTypes.SUCCESS, response))
                    .catch(error => FSAction.asObservable(actionTypes.ERROR, error))
            })));

        return ear;
    }

}
