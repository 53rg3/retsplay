import {Action} from "redux";

export class FSAction<T> implements Action {
    readonly type: string;
    readonly payload: T;
}
