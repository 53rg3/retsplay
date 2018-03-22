import * as React from "react";
import {NoProps, NoState} from "../../helpers/NoPropsNoState";
import {withRedux} from "../../helpers/ComponentDecorators";
import Counter from "./counter/Counter";



class Home extends React.Component<NoProps,NoState> {

    render() {
        return (
            <div>
                <h2>Home</h2>
                <Counter />
            </div>
        );
    }
}
export default withRedux<NoProps>(Home);
