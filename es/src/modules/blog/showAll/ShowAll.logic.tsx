import {HttpResponseRenderer} from "../../../lib/helpers/ResponseRenderer";
import {Html} from "../../../lib/helpers/Html";
import React = require("react");
import {BlogPost} from "../commons/models/BlogPost";
import {BlogRender} from "../commons/render/BlogRender";
import {ShowAllRender} from "./ShowAll.render";

export class ShowAllLogic {

    private readonly component: React.Component;

    constructor(component: React.Component) {
        this.component = component;
    }

    public renderResponse = new HttpResponseRenderer<BlogPost[]>(c => c
        .initial(() => Html.emptySpan())
        .loading(BlogRender.loading)
        .success(ShowAllRender.success)
        .error(() => <div>error</div>));

}
