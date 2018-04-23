import {BlogPost} from "../commons/models/BlogPost";
import {Html} from "../../../lib/helpers/Html";
import {HttpResponseRenderer} from "../../../lib/helpers/HttpResponseRenderer";
import {HttpResponse} from "../../../lib/ajax/HttpResponse";
import {BlogRender} from "../commons/render/BlogRender";
import {blogCss} from "../commons/Blog.css";
import {Body} from "../../layout/commons/Body";
import Typography from "material-ui-next/es/Typography";
import Chip from "material-ui-next/es/Chip";
import React = require("react");
import Button from "material-ui-next/es/Button";
import {DeletePostEar} from "./ears/DeletePost.ear";
import {SinglePost} from "./SinglePost";
import SinglePostProps = SinglePost.SinglePostProps;
import {Routes} from "../../../app/Router";

export class SinglePostLogic {

    private readonly component: React.Component;
    private readonly props:SinglePostProps;

    constructor(component: React.Component, props:SinglePostProps) {
        this.component = component;
        this.props = props;
    }

    private redirectTo(path:string) {
        this.component.setState({redirectTo: path})
    }

    private deletePost(id: string) {
        DeletePostEar.INST.request.dispatch(id);
        this.redirectTo(Routes.blog.SHOW_ALL);
    }

    private renderedSuccess = (response: HttpResponse<BlogPost>) => (
        <Body>
        <Typography variant="headline" component="h3">
            {response.body.title}
        </Typography>
        <div style={blogCss.sectionMargin}>
            {response.body.post}
        </div>
        <div style={blogCss.sectionMargin}>

            {response.body.tags.split(",").map(tag =>
                <Chip key={tag} style={blogCss.tagChip} label={tag.trim()}/>)}

            <Button style={blogCss.deleteButton}
                    variant="raised"
                    color="secondary"
                    onClick={() => this.deletePost(this.props.match.params.id)}>Delete Post</Button>

            <Button style={blogCss.editButton}
                    variant="raised"
                    color="secondary"
                    onClick={() => this.redirectTo(Routes.blog.EDIT.replace(":id", this.props.match.params.id))}>Edit Post</Button>
        </div>
        </Body>);
    public renderResponse = new HttpResponseRenderer<BlogPost>(c => c
        .initial(() => Html.emptySpan())
        .loading(BlogRender.loading)
        .success(this.renderedSuccess)
        .error(() => <div>error</div>));

}
