import {FSAction} from "./FSAction";
import {Checks} from "../helpers/Checks";
import {ReduxCollector} from "./ReduxCollector";


export class Reducer<T> {

    private readonly reducers: { [index: string]: (state: T, action: FSAction<T>) => T } = {};
    private readonly initialState: T;

    constructor(initialState: T, reduxStateKey:string) {
        Checks.throwIfNil(initialState, "'initialState' must not be null.");
        this.initialState = initialState;
        if(reduxStateKey) {
            ReduxCollector.reducers[reduxStateKey] = this.reducer;
        }
    }

    public addReducer(actionType: string, reducerFunction: (state: T, action: FSAction<T>) => T) {
        Checks.throwIfNotNil(this.reducers[actionType], "Duplicate ActionType for Reducer in EAR instance provided, problem with " + actionType);
        this.reducers[actionType] = reducerFunction;
    }

    public reducer = (state = this.initialState, action: FSAction<T>) => {
        const matchingReducer = this.reducers[action.type];
        if (matchingReducer) {
            return this.reducers[action.type](state, action);
        }
        return state;
    }
}
