import * as React from "react";
import ListItem from 'material-ui-next/List/ListItem';
import ListItemText from 'material-ui-next/List/ListItemText';
import Collapse from 'material-ui-next/transitions/Collapse';
import Icon from "material-ui-next/es/Icon";
import {Toggle} from "../../../lib/helpers/Toggle";
import {decorate} from "../../../lib/helpers/Decorator";


const styles = (theme: any) => ({
    fontColor: {
        color: theme.palette.primary.main
    }
});

class Props {
    icon?: string = "none";
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
                    <ListItemText inset primary={this.props.groupName} />
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
