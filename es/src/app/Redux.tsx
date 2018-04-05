import {applyMiddleware, combineReducers, createStore} from "redux";
import * as React from "react";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {CounterEAR} from "../containers/counter/Counter.ear";


export class Redux {
    private static _INST: Redux;


    /* ------------------------------------------------------------- */
    // REDUCERS
    /* ------------------------------------------------------------- */
    private readonly registeredReducers = combineReducers({
        counterState: CounterEAR.Action.reducer
    });


    /* ------------------------------------------------------------- */
    // EPICS
    /* ------------------------------------------------------------- */
    private readonly rootEpic = combineEpics(
        CounterEAR.Action.increase.epic,
        CounterEAR.Action.decrease.epic
    );


    /* ------------------------------------------------------------- */
    // STORE
    /* ------------------------------------------------------------- */
    private readonly epicMiddleware = createEpicMiddleware(this.rootEpic);

    public readonly store = createStore(
        this.registeredReducers,
        applyMiddleware(this.epicMiddleware)
        // applyMiddleware(this.epicMiddleware, logger)
    );

    private constructor() {
    }

    static get INST(): Redux {
        if (!this._INST) {
            this._INST = new Redux();
        }
        return this._INST;
    }


    public readonly dispatch = this.store.dispatch;


    /* ------------------------------------------------------------- */
    // HELPERS
    /* ------------------------------------------------------------- */
    /**
     * Use only in component before rendering occurs (i.e. in life-cycle methods like `componentWillReceiveProps()`).
     * Otherwise component will not get updated.
     */
    public static getByKey<C>(stateKey:string): C {
        const store: any = Redux.INST.store.getState();
        const state: C = store[stateKey];
        if (!state) {
            throw new Error("Couldn't find property '"+stateKey+"' in Redux state object.");
        }
        return state;
    }

    /**
     * Gets the whole Redux store. For debugging.
     */
    public static getCompleteStateTree() {
        return Redux.INST.store.getState();
    }

}


