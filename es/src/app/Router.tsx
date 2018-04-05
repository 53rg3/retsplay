import * as React from "react";
import {Route} from "react-router";
import Home from "../containers/home/Home";
import Blog from "../containers/blog/Blog";
import {LayoutRoot} from "../containers/layout/LayoutRoot";
import CssBaseline from "material-ui-next/es/CssBaseline";
import Counter from "../containers/counter/Counter";
import {NoProps, NoState} from "../lib/helpers/NoPropsNoState";
import FormExample from "../containers/formexample/FormExample";


export class Routes {

    private static root: string = "/";
    private static module = {
        blog: Routes.root + "blog",
        formExample: Routes.root + "form-example",
        counter: Routes.root + "counter",
        assets: Routes.root + "assets"
    };

    public static DASHBOARD = Routes.root;

    public static blog = {
        ROOT: Routes.module.blog
    };

    public static counter = {
        ROOT: Routes.module.counter
    };

    public static formExample = {
        ROOT: Routes.module.formExample
    };

    public static assets = {
        IMAGES: Routes.module.assets+"/images"
    };

}

export class Router extends React.Component<NoProps, NoState> {
    render() {
        return (
            <div>
                <CssBaseline />
                <LayoutRoot>
                    <Route exact path={Routes.DASHBOARD} component={Home}/>
                    <Route exact path={Routes.counter.ROOT} component={Counter}/>
                    <Route exact path={Routes.blog.ROOT} component={Blog}/>
                    <Route exact path={Routes.formExample.ROOT} component={FormExample}/>
                </LayoutRoot>
            </div>
        );
    }
}

