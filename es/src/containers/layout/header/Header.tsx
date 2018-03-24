import {decorate} from "../../../helpers/ComponentDecorators";
import {NoState} from "../../../helpers/NoPropsNoState";
import React = require("react");
import AppBar from "material-ui-next/es/AppBar";
import Toolbar from "material-ui-next/es/Toolbar";
import Typography from "material-ui-next/es/Typography";
import Drawer from "material-ui-next/es/Drawer";
import List from "material-ui-next/es/List";
import Divider from "material-ui-next/es/Divider";
import {Assets} from "../../../helpers/Assets";

const drawerWidth = 240;
const styles = (theme:any) => ({
    root: {
        flexGrow: 1,
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    }
});

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
    .withStyles(styles));
