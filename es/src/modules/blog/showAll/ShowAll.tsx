import * as React from "react";
import {NoProps, NoState} from "../../../lib/helpers/NoPropsNoState";
import {decorate} from "../../../lib/helpers/Decorator";
import {ShowAllEar} from "./ShowAll.ear";
import {Schema} from "../../../app/StateTree";
import {HttpResponse} from "../../../lib/ajax/HttpResponse";
import {ShowAllLogic} from "./ShowAll.logic";
import {BlogPost} from "../commons/models/BlogPost";


export module ShowAll {

    const ear = ShowAllEar.INST;

    class Props {
        [Schema.blogShowAll]: HttpResponse<BlogPost[]>
    }
    const mapsStateToProps = ({blogShowAll}:Props) =>
            ({blogShowAll});

    class Component extends React.Component<Props, NoState> {

        private logic = new ShowAllLogic(this);

        componentDidMount() {
            ear.request.dispatch();
        }

        render():any {
            return (
                <div>
                    {this.logic.renderResponse.from(this.props.blogShowAll)}
                </div>
            );
        }
    }

    export const component = decorate<NoProps>(Component, c => c
        .withRedux(mapsStateToProps));

}



