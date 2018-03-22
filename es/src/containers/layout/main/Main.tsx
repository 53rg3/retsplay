import * as React from "react";
import {NoProps, NoState} from "../../../helpers/NoPropsNoState";



export class Main extends React.Component<NoProps, NoState> {
    render() {
        return (
            <main className="main">
                <div className="main-wrapper">
                    {this.props.children}
                </div>
            </main>
        );
    }
}
