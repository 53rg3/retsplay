import * as React from "react";
import {NoState} from "../../helpers/NoPropsNoState";
import {CounterEAR, CounterState, CounterStateFactory} from "./actions/CounterEAR";
import {withRedux} from "../../helpers/ComponentDecorators";


type Props = {
    counterState?:CounterState;
}
class Counter extends React.Component<Props,NoState> {

    render() {
        return (
            <div>
                Counter: {this.props.counterState.count}<br/>
                <button onClick={CounterEAR.INST.increase.dispatch()}>Increase</button><br/>
                <button onClick={CounterEAR.INST.decrease.dispatch(CounterStateFactory.value(7))}>Decrease</button><br/>
            </div>
        );
    }
}
export default withRedux<Props>(Counter);
