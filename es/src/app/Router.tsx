import * as React from "react";
import {Route} from "react-router";
import Home from "../modules/home/Home";
import Blog from "../modules/blog/Blog";
import {LayoutRoot} from "../modules/layout/LayoutRoot";
import CssBaseline from "material-ui-next/es/CssBaseline";
import {NoProps, NoState} from "../lib/helpers/NoPropsNoState";
import FormExample from "../modules/formexample/FormExample";
import {Counter} from "../modules/counter/Counter";
import {AjaxRequests} from "../modules/ajaxexample/AjaxRequests";



export class Routes {

    private static root: string = "/";
    private static module = {
        blog: Routes.root + "blog",
        formExample: Routes.root + "form-example",
        counter: Routes.root + "counter",
        ajaxRequests: Routes.root + "ajax-requests",
        assets: Routes.root + "assets"
    };

    public static DASHBOARD = Routes.root;

    public static blog = {
        ROOT: Routes.module.blog
    };

    public static formExample = {
        ROOT: Routes.module.formExample
    };

    public static counter = {
        ROOT: Routes.module.counter
    };

    public static ajaxRequests = {
        ROOT: Routes.module.ajaxRequests
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
                    <Route exact path={Routes.blog.ROOT} component={Blog}/>
                    <Route exact path={Routes.counter.ROOT} component={Counter.component}/>
                    <Route exact path={Routes.ajaxRequests.ROOT} component={AjaxRequests.component}/>
                    <Route exact path={Routes.formExample.ROOT} component={FormExample}/>
                </LayoutRoot>
            </div>
        );
    }
}

