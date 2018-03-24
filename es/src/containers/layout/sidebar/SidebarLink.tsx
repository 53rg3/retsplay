import * as React from "react";
import {Link} from "react-router-dom";
import {decorate} from "../../../helpers/ComponentDecorators";
import {NoState} from "../../../helpers/NoPropsNoState";
import { ListItem, ListItemText } from 'material-ui-next/List';
import Icon from "material-ui-next/es/Icon";


const styles = (theme:any) => ({
    listItem: {

    },
    nested: {
        maxHeight: "30px"
    },
    link: {
        textDecoration: "none !important",
        color: theme.palette.primary.main
    }
});

class Props {
    route: string;
    linkText: string;
    icon?:string = "none";
    classes?: any;
    nested?: any = false;
}
class Component extends React.Component<Props, NoState> {
    render() {
        return (
            <Link to={this.props.route} className={this.props.classes.link}>
                <ListItem button className={this.props.nested ? this.props.classes.nested : this.props.classes.listItem}>
                    <Icon>{this.props.icon}</Icon>
                    <ListItemText inset primary={this.props.linkText} />
                </ListItem>
            </Link>
        );
    }
}
export const SidebarLink = decorate<Props>(Component, c => c
    .withStyles(styles));
