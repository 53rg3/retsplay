import * as React from "react";
import {NoProps, NoState} from "../../../helpers/NoPropsNoState";
import {Routes} from "../../../app/Router";
import {SidebarLink} from "./SidebarLink";




export class Sidebar extends React.Component<NoProps, NoState> {

    render() {
        return (
            <nav className="nav">
                <SidebarLink linkText={"Home"} route={Routes.HOME} />
                <SidebarLink linkText={"Blog"} route={Routes.blog.ROOT} />
            </nav>
        );
    }

}

