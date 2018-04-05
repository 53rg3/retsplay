import React = require("react");
import {Sidebar} from "./sidebar/Sidebar";
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {MUI} from "./css/MUI";
import {NoState} from "../../lib/helpers/NoPropsNoState";
import {decorate} from "../../lib/helpers/ComponentDecorators";


interface Props {
    classes?: any;
}
class Component extends React.Component<Props, NoState> {
    render() {
        return (
            <div className={this.props.classes.root}>

                <Header />

                <Sidebar />

                <Main children={this.props.children}/>

            </div>
        );
    }
}

export const LayoutRoot = decorate<Props>(Component, c => c
    .withStyles(MUI.classes.layoutRoot));
