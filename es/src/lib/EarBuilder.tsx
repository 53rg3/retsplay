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
    private readonly _parent: R;
    private _epic: Epic<FSAction<T>, T>;

    constructor(earBuilder: EarBuilder<T, R>) {
        this.dispatchActionType = Checks.throwIfNull(earBuilder.dispatchActionType, "'dispatchActionType' must not be null.");
        this._parent = Checks.throwIfNull(earBuilder.parentEAR, "'parentEAR' must not be null.");
        this._epic = earBuilder.epic;
    }


    public dispatch(payload?: T): () => {} {
        if (_.isNil(payload)) {
            return () => Redux.INST.dispatch(ActionFactory.create(this.dispatchActionType, null));
        } else {
            return () => Redux.INST.dispatch(ActionFactory.create(this.dispatchActionType, payload));
        }
    }

    get epic(): Epic<FSAction<T>, T> {
        Checks.throwIfNull(this._epic, "Epic was not set in EarBuilder. Check your implementation for combineEpics().");
        return this._epic;
    }
}


export class EarBuilder<T, R extends Reducer<T>> {

    /* ------------------------------------------------------ */
    // FIELDS
    /* ------------------------------------------------------ */
    private _dispatchActionType: string;
    private _parentEAR: R;
    private _epic: Epic<FSAction<T>, T>;

    /* ------------------------------------------------------ */
    // BUILDER
    /* ------------------------------------------------------ */
    public setParentEAR(mandatorySetting: R): EarBuilder<T, R> {
        this._parentEAR = mandatorySetting;
        return this;
    }

    public setDispatchAction(mandatorySetting: string): EarBuilder<T, R> {
        this._dispatchActionType = mandatorySetting;
        return this;
    }

    public setReducer(actionType: string, optionalSetting: (state: T, action: FSAction<T>) => T): EarBuilder<T, R> {
        this._parentEAR.addReducer(actionType, optionalSetting);
        return this;
    }

    public setEpic(epic: (action$: ActionsObservable<FSAction<T>>) => Observable<FSAction<T>>): EarBuilder<T, R> {
        this._epic = epic;
        return this;
    }

    public build(): EAR<T, R> {
        return new EAR(this);
    }


    /* ------------------------------------------------------ */
    // GETTERS
    /* ------------------------------------------------------ */
    get dispatchActionType(): string {
        return this._dispatchActionType;
    }

    get parentEAR(): R {
        return this._parentEAR;
    }

    get epic(): Epic<FSAction<T>, T> {
        return this._epic;
    }
}
