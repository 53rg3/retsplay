import * as React from "react";
import {CounterEAR, CounterState, CounterStateFactory} from "./actions/CounterEAR";
import {NoState} from "../../lib/helpers/NoPropsNoState";
import {decorate} from "../../lib/helpers/ComponentDecorators";


type Props = {
    counterState?: CounterState;
}

class Component extends React.Component<Props, NoState> {

    render() {
        return (
            <div>
                Counter: {this.props.counterState.count}<br/>
                <button onClick={CounterEAR.INST.increase.dispatch()}>Increase</button>
                <br/>
                <button onClick={CounterEAR.INST.decrease.dispatch(CounterStateFactory.value(7))}>Decrease</button>
                <br/>
            </div>
        );
    }
}

export default decorate<Props>(Component, c => c
    .withRedux(true))


