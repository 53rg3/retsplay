import {FSAction} from "../../../lib/ear/FSAction";

export class CounterModel {

    readonly count: number;

    constructor(count: number) {
        this.count = count;
    }

    public static increase(counterState: CounterModel, action: FSAction<CounterModel>) {
        return new CounterModel(counterState.count + action.payload.count);
    }

    public static decrease(counterState: CounterModel, action: FSAction<CounterModel>) {
        return new CounterModel(counterState.count - action.payload.count);
    }

    public static initial() {
        return new CounterModel(0);
    }

    public static value(value: number) {
        return new CounterModel(value);
    }
    
}
