import * as React from "react";
import {NoState} from "../../lib/helpers/NoPropsNoState";
import {decorate} from "../../lib/helpers/ComponentDecorators";
import {CounterEAR} from "./Counter.ear";




class Props {
    counterState: CounterEAR.State
}

class CounterComponent extends React.Component<Props, NoState> {

    render() {
        const Action = CounterEAR.Action;
        const Factory = CounterEAR.Factory;
        return (
            <div>
                Counter: {this.props.counterState.count}<br/>
                <button onClick={Action.increase.dispatch()}>Increase</button>
                <br/>
                <button onClick={Action.decrease.dispatch(Factory.value(7))}>Decrease</button>
                <br/>
            </div>
        );
    }
}

export default decorate<Props>(CounterComponent, c => c
    .withRedux(true))


