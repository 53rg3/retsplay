import {Redux} from "../../app/Redux";
import _ = require("lodash");
import {ActionsObservable, Epic} from "redux-observable";
import {Observable} from "rxjs/Observable";
import {FSAction} from "./FSAction";
import {Reducer} from "./Reducer";
import {Checks} from "../helpers/Checks";
import {ReduxCollector} from "./ReduxCollector";

export class EAR<T, R extends Reducer<T>> {

    private readonly dispatchActionType: string;
    private readonly parent: R;
    private _epic: Epic<FSAction<T>, T>;

    constructor(parentEAR:R, config:(config:EarConfig<T, R>)=>EarConfig<T, R>) {

        const earConfig = config(new EarConfig<T, R>(parentEAR)).internalBuild();

        this.dispatchActionType = Checks.throwIfNil(earConfig.getDispatchActionType(), "'dispatchActionType' must not be null.");
        this.parent = Checks.throwIfNil(earConfig.getParentEAR(), "'parentEAR' must not be null.");
        // this._epic = earConfig.getEpic();
    }


    public dispatch(payload?: T): any {
        if (_.isNil(payload)) {
            return Redux.INST.dispatch(FSAction.create(this.dispatchActionType, null));
        } else {
            return Redux.INST.dispatch(FSAction.create(this.dispatchActionType, payload));
        }
    }

    get epic(): Epic<FSAction<T>, T> {
        Checks.throwIfNil(this._epic, "Epic was not set in EarBuilder. Check your implementation of combineEpics().");
        return this._epic;
    }

    public setEpic(epic: Epic<FSAction<T>, T>) {
        this._epic = epic;
        ReduxCollector.epics.push(epic);
    }

    public static createEpic<T>(epic: (action$: ActionsObservable<FSAction<T>>) => Observable<FSAction<any>>):Epic<FSAction<T>, T> {
        return epic;
    }
}


export class EarConfig<T, R extends Reducer<T>> {

    /* ------------------------------------------------------ */
    // FIELDS
    /* ------------------------------------------------------ */
    private dispatchActionType: string;
    private parentEAR: R;
    // SEE setEpic, private epic: Epic<FSAction<T>, T>;

    /* ------------------------------------------------------ */
    // BUILDER
    /* ------------------------------------------------------ */

    constructor(parentEAR: R) {
        this.parentEAR = parentEAR;
    }

    public setDispatchAction(mandatorySetting: string): EarConfig<T, R> {
        this.dispatchActionType = mandatorySetting;
        return this;
    }

    public addReducer(actionType: string, reducerFunction: (state: T, action: FSAction<T>) => T): EarConfig<T, R> {
        this.parentEAR.addReducer(actionType, reducerFunction);
        return this;
    }

    /** We can't create the Epic in the builder, because IntelliJ can't handle it. Leads to high CPU usage and lag.
     * RxJS has 3,6k files and 10MB. We have to set the Epic manually in the product of the builder. */
    // public setEpic(epic: (action$: ActionsObservable<FSAction<T>>) => Observable<FSAction<any>>): EarConfig<T, R> {
    //     this.epic = epic;
    //     return this;
    // }

    public internalBuild() {
        return this;
    }

    /* ------------------------------------------------------ */
    // GETTERS
    /* ------------------------------------------------------ */
    public getDispatchActionType(): string {
        return this.dispatchActionType;
    }

    public getParentEAR(): R {
        return this.parentEAR;
    }

    // See setEpic
    // public getEpic(): Epic<FSAction<T>, T> {
    //     return this.epic;
    // }
}
