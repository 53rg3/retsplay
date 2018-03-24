import * as React from "react";
import {decorate} from "../../../helpers/ComponentDecorators";
import {NoState} from "../../../helpers/NoPropsNoState";
import {Routes} from "../../../app/Router";
import {Toggle} from "../../../helpers/Toggler";
import List, { ListItem, ListItemText } from 'material-ui-next/List';
import Collapse from 'material-ui-next/transitions/Collapse';
import Icon from "material-ui-next/es/Icon";
import {SidebarLink} from "./SidebarLink";


const styles = () => ({
    someComponent: {

    }
});

class Props {
    icon?:string = "none"
    groupName:string;
}
class Component extends React.Component<Props, NoState> {

    state = { open: false };

    render():any {
        return (
            <div>
                <ListItem button onClick={Toggle.byKey("open", this)}>
                    <Icon>{this.props.icon}</Icon>
                    <ListItemText inset primary="Blog" />
                    {this.state.open ? <Icon>keyboard_arrow_up</Icon> : <Icon>keyboard_arrow_down</Icon>}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    {this.props.children}
                </Collapse>
            </div>
        );
    }
}
export const SidebarLinkGroup = decorate<Props>(Component, c => c
    .withStyles(styles));
