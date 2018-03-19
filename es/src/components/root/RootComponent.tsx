import * as React from "react";
import {NoProps} from "../../helpers/NoPropsNoState";
import Counter from "../counter/Counter";


export class RootComponent extends React.Component<NoProps> {
    render() {
        return (
            <div>
                <h1>Root Component</h1>
                <Counter />
            </div>
        );
    }
}
