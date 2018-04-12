import * as React from "react";
import {Route, RouteProps} from "react-router";
import Home from "../modules/home/Home";
import Blog from "../modules/blog/ShowAll";
import {LayoutRoot} from "../modules/layout/LayoutRoot";
import CssBaseline from "material-ui-next/es/CssBaseline";
import {NoProps, NoState} from "../lib/helpers/NoPropsNoState";
import FormExample from "../modules/formexample/FormExample";
import {Counter} from "../modules/counter/Counter";
import {AjaxRequests} from "../modules/ajaxexample/AjaxRequests";
import {Editor} from "../modules/blog/createnew/Editor";



export class Routes {

    public static DASHBOARD = "/";

    public static blog = {
        SHOW_ALL: "/blog",
        CREATE_NEW: "/blog/editor",
        EDIT: "/blog/editor/:id"
    };

    public static formExample = "/form-example";

    public static counter = "/counter";

    public static ajaxRequests = "/ajax-requests";

    public static assets = {
        IMAGES: "/assets/images"
    };

}

export class Router extends React.Component<NoProps, NoState> {
    render() {
        return (
            <div>
                <CssBaseline />
                <LayoutRoot>
                    <Route exact path={Routes.DASHBOARD} component={Home}/>

                    <Route exact path={Routes.blog.SHOW_ALL} component={Blog}/>
                    <Route exact path={Routes.blog.CREATE_NEW} component={Editor.component}/>
                    <Route exact path={Routes.blog.EDIT} component={Editor.component}/>

                    <Route exact path={Routes.counter} component={Counter.component}/>
                    <Route exact path={Routes.ajaxRequests} component={AjaxRequests.component}/>
                    <Route exact path={Routes.formExample} component={FormExample}/>
                </LayoutRoot>
            </div>
        );
    }
}

