import React = require("react");
import {NoState} from "../../helpers/NoPropsNoState";
import {decorate} from "../../helpers/ComponentDecorators";
import {Sidebar} from "./sidebar/Sidebar";
import {Header} from "./header/Header";
import {Main} from "./main/Main";


const styles = (theme: any) => ({
    root: {
        flexGrow: 1,
        height: "100vh",
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    }
});

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
    .withStyles(styles));
