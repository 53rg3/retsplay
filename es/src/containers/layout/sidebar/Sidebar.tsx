import * as React from "react";
import {NoProps, NoState} from "../../../helpers/NoPropsNoState";
import {Routes} from "../../../app/Router";
import {Theme} from "../theme/Theme";



export class Sidebar extends React.Component<NoProps, NoState> {

    render() {
        return (
            <nav className="nav">
                {Theme.sidebar.gap()}
                {Theme.sidebar.link(Routes.HOME, "Home")}
                {Theme.sidebar.link(Routes.blog.ROOT, "Blog")}
            </nav>
        );
    }

}

