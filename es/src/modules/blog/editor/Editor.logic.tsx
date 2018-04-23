import React = require("react");
import {BlogPost} from "../commons/models/BlogPost";
import {Html} from "../../../lib/helpers/Html";
import {HttpResponseRenderer} from "../../../lib/helpers/HttpResponseRenderer";
import {HttpResponse} from "../../../lib/ajax/HttpResponse";
import {CreateNewEar} from "./ears/CreateNew.ear";
import {Redirect} from "react-router";
import {Routes} from "../../../app/Router";
import {UpdatePostEar} from "./ears/UpdatePost.ear";

export class EditorLogic {

    private readonly component: React.Component;

    constructor(component: React.Component) {
        this.component = component;
    }

    private redirectToAllPosts() {
        this.component.setState({redirectTo: Routes.blog.SHOW_ALL})
    }

    public createNewPost(event:any) {
        CreateNewEar.INST.request.dispatch(event);
        this.redirectToAllPosts();
    }
    public updatePost(event:any) {
        UpdatePostEar.INST.request.dispatch(event);
        this.redirectToAllPosts();
    }

    public renderResponse = new HttpResponseRenderer<BlogPost>(c => c
        .initial(() => Html.emptySpan())
        .loading(() => <div>Loading</div>)
        .success(() => <div>Success</div>)
        .error(() => <div>Error</div>));

}
