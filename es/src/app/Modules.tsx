import {CounterEAR} from "../modules/counter/ears/Counter.ear";

export module Modules {

    export const counter = {
        name: "counter",
        counterEAR: {
            ...CounterEAR.INST
        }
    }

}
