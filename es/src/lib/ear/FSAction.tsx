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

    public static ajaxTypes(reduxStateKey:string) {
        return {
            SEND: `${reduxStateKey}/SEND`,
            SUCCESS: `${reduxStateKey}/SUCCESS`,
            ERROR: `${reduxStateKey}/ERROR`
        }
    }
}
