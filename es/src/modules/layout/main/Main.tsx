import * as React from "react";
import {NoState} from "../../../lib/helpers/NoPropsNoState";
import {decorate} from "../../../lib/helpers/ComponentDecorators";
import {mainCss} from "./Main.css";


interface Props {
    children: any;
    classes?: any;
}

class Component extends React.Component<Props, NoState> {
    render() {
        return (
            <main className={this.props.classes.content}>
                <div className={this.props.classes.toolbar}/>
                {this.props.children}
            </main>
        );
    }
}

export const Main = decorate<Props>(Component, c => c
    .withRouter(true)
    .withRedux(true)
    .withStyles(mainCss));
