import {Redux} from "../app/Redux";



/**
 * Use only in component before rendering occurs (i.e. in life-cycle methods like `componentWillReceiveProps()`).
 * Otherwise component will not get updated.
 */
export class StateExtractor<C> {

    public static get<C>():C {
        const store:any = Redux.INST.store.getState();
        const state:C = store['counterState'];
        if(!state) {
            throw new Error("Couldn't find property");
        }
        return state;
    }

}
