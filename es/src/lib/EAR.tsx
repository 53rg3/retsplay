import _ = require("lodash");
import {ActionsObservable, Epic} from "redux-observable";
import {Observable} from "rxjs/Observable";
import {FSAction} from "./FSAction";
import {Reducer} from "./Reducer";
import {Checks} from "../helpers/Checks";
import {Redux} from "../app/Redux";
import {ActionFactory} from "../helpers/ActionFactory";



export class EAR<T, R extends Reducer<T>> {
    private readonly dispatchActionType: string;
    private readonly parent: R;
    private _epic: Epic<FSAction<T>, T>;

    constructor(parentEAR:R, config:(config:EarConfig<T, R>)=>EarConfig<T, R>) {

        const earConfig = config(new EarConfig<T, R>(parentEAR)).internalBuild();

        this.dispatchActionType = Checks.throwIfNil(earConfig.getDispatchActionType(), "'dispatchActionType' must not be null.");
        this.parent = Checks.throwIfNil(earConfig.getParentEAR(), "'parentEAR' must not be null.");
        this._epic = earConfig.getEpic();
    }


    public dispatch(payload?: T): () => {} {
        if (_.isNil(payload)) {
            return () => Redux.INST.dispatch(ActionFactory.create(this.dispatchActionType, null));
        } else {
            return () => Redux.INST.dispatch(ActionFactory.create(this.dispatchActionType, payload));
        }
    }

    get epic(): Epic<FSAction<T>, T> {
        Checks.throwIfNil(this._epic, "Epic was not set in EarBuilder. Check your implementation of combineEpics().");
        return this._epic;
    }
}


export class EarConfig<T, R extends Reducer<T>> {

    /* ------------------------------------------------------ */
    // FIELDS
    /* ------------------------------------------------------ */
    private dispatchActionType: string;
    private parentEAR: R;
    private epic: Epic<FSAction<T>, T>;

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

    public addReducer(actionType: string, optionalSetting: (state: T, action: FSAction<T>) => T): EarConfig<T, R> {
        this.parentEAR.addReducer(actionType, optionalSetting);
        return this;
    }

    public setEpic(epic: (action$: ActionsObservable<FSAction<T>>) => Observable<FSAction<T>>): EarConfig<T, R> {
        this.epic = epic;
        return this;
    }

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

    public getEpic(): Epic<FSAction<T>, T> {
        return this.epic;
    }
}
