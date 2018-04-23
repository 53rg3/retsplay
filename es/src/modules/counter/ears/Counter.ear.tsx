import {Reducer} from "../../../lib/ear/Reducer";
import {EAR} from "../../../lib/ear/EAR";
import {FSAction} from "../../../lib/ear/FSAction";
import {CounterModel} from "../models/CounterModel";
import {Act} from "../../../app/ActionTypes";
import {Schema} from "../../../app/Schema";

export class CounterEAR extends Reducer<CounterModel> {

    public readonly increase = new EAR(this, c => c
        .setDispatchAction(Act.counter.ASYNC_INCREMENT)
        .addReducer(Act.counter.INCREMENT, CounterModel.increase));


    public readonly decrease = new EAR(this, c => c
        .setDispatchAction(Act.counter.ASYNC_DECREMENT)
        .addReducer(Act.counter.DECREMENT, CounterModel.decrease));

    private constructor() {
        super(CounterModel.initial(), Schema.counterModel);

        this.increase.setEpic(EAR.createEpic(action => action
            .ofType(Act.counter.ASYNC_INCREMENT)
            .delay(500)
            .map(action => FSAction.create(Act.counter.INCREMENT, action.payload))));

        this.decrease.setEpic(EAR.createEpic(action => action
            .ofType(Act.counter.ASYNC_DECREMENT)
            .delay(500)
            .map(action => FSAction.create(Act.counter.DECREMENT, action.payload))))
    }


    private static _INST: CounterEAR;
    static get INST(): CounterEAR {
        if (!this._INST) {
            this._INST = new CounterEAR();
        }
        return this._INST;
    }
}






