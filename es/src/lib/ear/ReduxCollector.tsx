import {FSAction} from "./FSAction";
import {Epic} from "redux-observable";
import {Reducer} from "./Reducer";

export class ReduxCollector {

    public static readonly reducers: { [reduxStateKey: string]: (state: any, action: FSAction<any>) => any } = {};
    public static readonly epics: Epic<FSAction<any>, any>[] = [];
}
