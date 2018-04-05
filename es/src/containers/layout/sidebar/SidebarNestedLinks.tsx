import * as React from "react";
import {decorate} from "../../../helpers/ComponentDecorators";
import {NoState} from "../../../helpers/NoPropsNoState";
import {Routes} from "../../../app/Router";
import {Toggle} from "../../../helpers/Toggle";
import List, {ListItem, ListItemText} from 'material-ui-next/List';
import Collapse from 'material-ui-next/transitions/Collapse';
import Icon from "material-ui-next/es/Icon";
import {SidebarLink} from "./SidebarLink";


const styles = (theme: any) => ({
    fontColor: {
        color: theme.palette.primary.main
    }
});

class Props {
    icon?: string = "none"
    groupName: string;
    classes?: any;
}
class State {
    open: boolean = false;
}
class Component extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = new State();
    }

    render(): any {
        return (
            <div>
                <ListItem button onClick={Toggle.asFunction("open", this)} className={this.props.classes.fontColor}>
                    <Icon>{this.props.icon}</Icon>
                    <ListItemText inset primary="Blog"/>
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
