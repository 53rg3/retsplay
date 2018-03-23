import * as React from "react";
import {NoProps, NoState} from "../helpers/NoPropsNoState";
import {Route} from "react-router";
import Home from "../containers/home/Home";
import Blog from "../containers/blog/Blog";
import {LayoutRoot} from "../containers/layout/LayoutRoot";
import CssBaseline from "material-ui-next/es/CssBaseline";


export class Routes {

    private static root: string = "/";
    private static modules = {
        blog: Routes.root + "blog",
        assets: Routes.root + "assets"
    };

    public static HOME = Routes.root;

    public static blog = {
        ROOT: Routes.modules.blog
    };

    public static assets = {
        IMAGES: Routes.modules.assets+"/images"
    };

}

export class Router extends React.Component<NoProps, NoState> {
    render() {
        return (
            <div>
                <CssBaseline />
                <LayoutRoot>
                    <Route exact path={Routes.HOME} component={Home}/>
                    <Route exact path={Routes.blog.ROOT} component={Blog}/>
                </LayoutRoot>
            </div>
        );
    }
}

