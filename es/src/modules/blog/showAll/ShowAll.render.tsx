import {HttpResponse} from "../../../lib/ajax/HttpResponse";
import React = require("react");
import {CircularProgress} from 'material-ui-next/Progress';
import Grid from "material-ui-next/es/Grid";
import {Body} from "../../layout/commons/Body";
import Typography from "material-ui-next/es/Typography";
import Chip from "material-ui-next/es/Chip";
import _ = require("lodash");
import {Link} from "react-router-dom";
import {Routes} from "../../../app/Router";
import {BlogPost} from "../commons/models/BlogPost";
import {blogCss} from "../commons/Blog.css";
import {Id} from "../../../lib/helpers/Id";


export class ShowAllRender {

    public static success = (response: HttpResponse<BlogPost[]>) => (
        <div>
            {response.body.map(blogPost => {
                return (
                    <Body key={Id.random()}>
                        <Typography variant="headline" component="h3">
                            <Link to={Routes.blog.GET_POST.replace(":id", blogPost.id)}>{blogPost.title}</Link>
                        </Typography>
                        <div style={blogCss.sectionMargin}>
                            {_.truncate(blogPost.post, {
                                length: 250,
                                separator: ' '
                            })} <Link to={Routes.blog.GET_POST.replace(":id", blogPost.id)}> continue reading</Link></div>
                        <div style={blogCss.sectionMargin}>
                            {blogPost.tags.split(",").map(tag =>
                                <Chip key={tag} style={blogCss.tagChip} label={tag.trim()}/>)}
                        </div>
                    </Body>)
            })}
        </div>);

}
