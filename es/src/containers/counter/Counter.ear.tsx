import {Reducer} from "../../lib/ear/Reducer";
import {EAR} from "../../lib/ear/EAR";
import {Act} from "../../app/ActionType";
import {ActionFactory} from "../../lib/helpers/ActionFactory";
import {FSAction} from "../../lib/ear/FSAction";


export module CounterEAR {

    export class State {
        readonly count: number;

        constructor(count: number) {
            this.count = count;
        }
    }

    export class Factory {
        public static increase(counterState: State, action: FSAction<State>) {
            return new State(counterState.count + 1);
        }

        public static decrease(counterState: State, action: FSAction<State>) {
            return new State(counterState.count - action.payload.count);
        }

        public static initial() {
            return new State(0);
        }

        public static value(value: number) {
            return new State(value);
        }
    }

    class EarWrapper extends Reducer<State> {
        private constructor() {
            super(Factory.initial());
        }

        public readonly increase = new EAR(this, c => c
            .setDispatchAction(Act.counter.ASYNC_INCREMENT)
            .setEpic(action => action
                .ofType(Act.counter.ASYNC_INCREMENT)
                .delay(500)
                .mapTo(ActionFactory.create(Act.counter.INCREMENT, null)))
            .addReducer(Act.counter.INCREMENT, Factory.increase));


        public readonly decrease = new EAR(this, c => c
            .setDispatchAction(Act.counter.ASYNC_DECREMENT)
            .setEpic(action => action
                .ofType(Act.counter.ASYNC_DECREMENT)
                .delay(500)
                .map(x => ActionFactory.create(Act.counter.DECREMENT, x.payload)))
            .addReducer(Act.counter.DECREMENT, Factory.decrease));


        private static _INST: EarWrapper;
        static get INST(): EarWrapper {
            if (!this._INST) {
                this._INST = new EarWrapper();
            }
            return this._INST;
        }
    }
    export const Action = EarWrapper.INST;







}



