import {FSAction} from "../lib/FSAction";


export class ActionFactory {
    public static create<T>(actionType: string, payload: T): FSAction<T> {
        return {type: actionType, payload: payload};
    }
}
