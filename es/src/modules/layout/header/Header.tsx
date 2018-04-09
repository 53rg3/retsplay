import React = require("react");
import AppBar from "material-ui-next/es/AppBar";
import Toolbar from "material-ui-next/es/Toolbar";
import Typography from "material-ui-next/es/Typography";
import {NoState} from "../../../lib/helpers/NoPropsNoState";
import {Assets} from "../../../lib/helpers/Assets";
import {decorate} from "../../../lib/helpers/ComponentDecorators";
import {headerCss} from "./Header.css";


interface Props {
    classes?: any;
}
class Component extends React.Component<Props, NoState> {
    render() {
        const { classes } = this.props;
        return (
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="title" color="inherit" noWrap>
                        <img src={Assets.getLogo()}/>
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}
export const Header = decorate<Props>(Component, c => c
    .withStyles(headerCss));
