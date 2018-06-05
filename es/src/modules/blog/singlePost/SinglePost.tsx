import * as React from "react";
import {decorate} from "../../../lib/helpers/Decorator";
import {NoProps} from "../../../lib/helpers/NoPropsNoState";
import {BlogPost} from "../commons/models/BlogPost";
import {HttpResponse} from "../../../lib/ajax/HttpResponse";
import {Schema} from "../../../app/StateTree";
import {match, Redirect} from "react-router";
import {SinglePostLogic} from "./SinglePost.logic";
import {GetPostEar} from "./ears/GetPost.ear";
import {DeletePostEar} from "./ears/DeletePost.ear";


export module SinglePost {

    const getPost = GetPostEar.INST;
    DeletePostEar.INST;

    export class SinglePostProps {
        [Schema.blogGetPost]: HttpResponse<BlogPost>;
        match: match<{id:string}>;
    }
    const mapsStateToProps = ({blogGetPost}:SinglePostProps) =>
            ({blogGetPost});
    class State {
        redirectTo:string = null;
    }
    class GetPost extends React.Component<SinglePostProps, State> {

        private logic = new SinglePostLogic(this, this.props);

        constructor(props:SinglePostProps) {
            super(props);
            this.state = new State();
        }

        componentDidMount() {
            if(!this.state.redirectTo) {
                getPost.request.dispatch(this.props.match.params.id);
            }
        }

        render():any {
            return (
                <div>
                    {this.logic.renderResponse.from(this.props.blogGetPost)}
                    {this.state.redirectTo ? <Redirect to={this.state.redirectTo}/> : ""}
                </div>
            );
        }
    }
    export const component = decorate<NoProps>(GetPost, c => c
        .withRedux(mapsStateToProps));

}

