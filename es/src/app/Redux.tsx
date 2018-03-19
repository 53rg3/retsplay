import {applyMiddleware, createStore} from "redux";
import {combineReducers} from "redux";
import logger from "redux-logger";
import * as React from "react";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {CounterEAR} from "../components/counter/actions/CounterEAR";


export class Redux {
    private static _INST: Redux;

    /* ------------------------------------------------------------- */
    // REDUCERS
    /* ------------------------------------------------------------- */
    private readonly registeredReducers = combineReducers({
        counterState: CounterEAR.INST.reducer,
    });

    /* ------------------------------------------------------------- */
    // EPICS
    /* ------------------------------------------------------------- */
    private readonly rootEpic = combineEpics(
        CounterEAR.INST.increase.epic,
        CounterEAR.INST.decrease.epic
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

}


