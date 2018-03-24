import * as React from "react";
import {NoState} from "../../../helpers/NoPropsNoState";
import {decorate} from "../../../helpers/ComponentDecorators";
import Drawer from "material-ui-next/es/Drawer";
import {SidebarLink} from "./SidebarLink";
import {Routes} from "../../../app/Router";
import {MenuList} from "material-ui-next";
import {SidebarLinkGroup} from "./SidebarNestedLinks";
import Icon from "material-ui-next/es/Icon";



const styles = (theme:any) => ({
    drawerPaper: {
        position: 'relative',
        width: 240,
    },
    toolbar: theme.mixins.toolbar,
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

interface Props {
    classes?: any
}
class Component extends React.Component<Props, NoState> {



    render() {
        return (
            <Drawer variant="permanent" classes={{paper: this.props.classes.drawerPaper}}>
                <div className={this.props.classes.toolbar}/>

                <MenuList>
                    <SidebarLink linkText={"Dashboard"} route={Routes.DASHBOARD} icon={"dashboard"}/>
                </MenuList>

                <SidebarLinkGroup groupName={"Blog"} icon={"comment"}>
                    <SidebarLink linkText={"Show all posts"} route={Routes.blog.ROOT} nested={true} icon={"list"}/>
                    <SidebarLink linkText={"Add new"} route={Routes.blog.ROOT} nested={true} icon={"add_circle_outline"} />
                </SidebarLinkGroup>

                <MenuList>
                    <SidebarLink linkText={"Something"} route={Routes.DASHBOARD} icon={"equalizer"}/>
                </MenuList>


            </Drawer>
        );
    }
}
export const Sidebar = decorate<Props>(Component, c => c
    .withStyles(styles));

