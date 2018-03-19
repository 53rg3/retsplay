import {FSAction} from "../../../lib/FSAction";
import {Reducer} from "../../../lib/Reducer";
import {EAR, EarBuilder} from "../../../lib/EarBuilder";
import {Act} from "../../../app/ActionType";
import {ActionFactory} from "../../../helpers/ActionFactory";


export class CounterState {
    readonly count: number;

    constructor(count: number) {
        this.count = count;
    }
}

export class CounterStateFactory {
    public static increase(counterState: CounterState, action: FSAction<CounterState>) {
        return new CounterState(counterState.count + 1);
    }

    public static decrease(counterState: CounterState, action: FSAction<CounterState>) {
        return new CounterState(counterState.count - action.payload.count);
    }

    public static initial() {
        return new CounterState(0);
    }

    public static value(value:number) {
        return new CounterState(value);
    }
}

export class CounterEAR extends Reducer<CounterState> {
    private constructor() {
        super(CounterStateFactory.initial());
    }

    public readonly increase: EAR<CounterState, CounterEAR> = new EarBuilder<CounterState, CounterEAR>()
        .setParentEAR(this)
        .setDispatchAction(Act.counter.ASYNC_INCREMENT)
        .setEpic(action => action
            .ofType(Act.counter.ASYNC_INCREMENT)
            .delay(500)
            .mapTo(ActionFactory.create(Act.counter.INCREMENT, null)))
        .setReducer(Act.counter.INCREMENT, CounterStateFactory.increase)
        .build();

    public readonly decrease: EAR<CounterState, CounterEAR> = new EarBuilder<CounterState, CounterEAR>()
        .setParentEAR(this)
        .setDispatchAction(Act.counter.ASYNC_DECREMENT)
        .setEpic(action => action
            .ofType(Act.counter.ASYNC_DECREMENT)
            .delay(500)
            .map(x => ActionFactory.create(Act.counter.DECREMENT, x.payload)))
        .setReducer(Act.counter.DECREMENT, CounterStateFactory.decrease)
        .build();


    private static _INST: CounterEAR;
    static get INST(): CounterEAR {
        if (!this._INST) {
            this._INST = new CounterEAR();
        }
        return this._INST;
    }
}
