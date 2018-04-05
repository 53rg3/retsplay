import * as React from "react";
import Drawer from "material-ui-next/es/Drawer";
import {SidebarLink} from "./SidebarLink";
import {Routes} from "../../../app/Router";
import {MenuList} from "material-ui-next";
import {SidebarLinkGroup} from "./SidebarNestedLinks";
import Divider from "material-ui-next/es/Divider";
import {NoState} from "../../../lib/helpers/NoPropsNoState";
import {decorate} from "../../../lib/helpers/ComponentDecorators";


const styles = (theme:any) => ({
    drawerPaper: {
        position: 'relative',
        minHeight:"100%",
        width: 240,
    },
    toolbar: {
        marginTop: "63px"
    },
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


                <SidebarLinkGroup groupName={"Blog"} icon={"comment"} >
                    <SidebarLink linkText={"Show all posts"} route={Routes.blog.ROOT} nested={true} icon={"list"}/>
                    <Divider />
                </SidebarLinkGroup>

                    <SidebarLink linkText={"Counter"} route={Routes.counter.ROOT} icon={"exposure_plus_1"}/>
                    <SidebarLink linkText={"Form Example"} route={Routes.formExample.ROOT} icon={"format_align_left"} />
                </MenuList>


            </Drawer>
        );
    }
}
export const Sidebar = decorate<Props>(Component, c => c
    .withStyles(styles));

