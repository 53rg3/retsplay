import {Action} from "redux";
import {Observable} from "rxjs/Observable";

export class FSAction<T> implements Action {
    readonly type: string;
    readonly payload: T;

    public static create<T>(actionType: string, payload: T): FSAction<T> {
        return {type: actionType, payload: payload};
    }

    public static asObservable<T>(actionType: string, payload: T): Observable<FSAction<T>> {
        return Observable.of(FSAction.create(actionType, payload));
    }

    public static ajaxTypes(moduleId:string, reduxStateKey:string) {
        return {
            SEND: `${moduleId}.${reduxStateKey}.SEND`,
            SUCCESS: `${moduleId}.${reduxStateKey}.SUCCESS`,
            ERROR: `${moduleId}.${reduxStateKey}.ERROR`
        }
    }
}
