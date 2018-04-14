import {blogCss} from "../Blog.css";
import CircularProgress from "material-ui-next/Progress/CircularProgress";
import Grid from "material-ui-next/es/Grid";
import React = require("react");

export class BlogRender {

    public static loading = () => (
        <div style={blogCss.spinner}>
            <Grid container alignContent="center" justify="center">
                <Grid item xs={12}>
                    <CircularProgress/>
                </Grid>
            </Grid>
        </div>);

}
