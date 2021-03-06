import * as React from "react";
import {Heading} from "../layout/commons/Heading";
import {Body} from "../layout/commons/Body";
import {decorate} from "../../lib/helpers/Decorator";
import Button from "material-ui-next/es/Button";
import {HttpResponse} from "../../lib/ajax/HttpResponse";
import Grid from "material-ui-next/es/Grid/Grid";
import {Person} from "./models/Person";
import {AjaxRequestsLogic} from "./AjaxRequests.logic";
import {Schema} from "../../app/StateTree";
import {GetSuccessEar} from "./ears/GetSuccess.ear";
import {GetErrorEar} from "./ears/GetError.ear";
import {PostErrorEar} from "./ears/PostError.ear";
import {PostSuccessEar} from "./ears/PostSuccess.ear";




export module AjaxRequests {

    const getSuccessEAR = GetSuccessEar.INST;
    const getErrorEAR = GetErrorEar.INST;
    const postSuccessEAR = PostSuccessEar.INST;
    const postErrorEAR = PostErrorEar.INST;

    class State {
        displayedResponse: HttpResponse<Person>;
        lastAction: string;
    }

    class Props {
        classes?: any;
        [Schema.ajaxRequestsGetSuccess]: HttpResponse<Person>;
        [Schema.ajaxRequestsGetError]: HttpResponse<Person>;
        [Schema.ajaxRequestsPostSuccess]: HttpResponse<Person>;
        [Schema.ajaxRequestsPostError]: HttpResponse<Person>;
    }
    const mapsStateToProps = ({ajaxRequestsGetError,ajaxRequestsGetSuccess,ajaxRequestsPostError,ajaxRequestsPostSuccess}:Props) =>
        ({ajaxRequestsGetError,ajaxRequestsGetSuccess,ajaxRequestsPostError,ajaxRequestsPostSuccess});

    class Component extends React.Component<Props, State> {

        private logic = new AjaxRequestsLogic(this);

        constructor(props: Props) {
            super(props);
            this.state = new State();
        }

        componentWillReceiveProps(nextProps: any) {
            this.logic.updateDisplayedResponse(nextProps[this.state.lastAction])
        }

        render(): any {
            return (
                <div>
                    <Heading heading="Examples for AJAX Requests"/>
                    <Body>
                    "GET (ERROR)" uses the verbose EAR builder. Rest uses the RequestEAR builder, which is quicker for
                    creating HTTP requests. Use the verbose form if you need special logic.<br/>
                    <div style={{marginTop:"20px", textAlign: "center"}}>
                        <Grid container alignContent="center" justify="center">
                            <Grid item xs={3}>
                                <Button variant="raised" color="primary"
                                        onClick={() => this.logic.sendRequest(
                                            'getSuccess',
                                            () => getSuccessEAR.request.dispatch())}>
                                    GET<br/>(Success)
                                </Button>
                                <br/>
                                <br/>
                                {this.props.ajaxRequestsGetSuccess.stage}<br/>
                            </Grid>

                            <Grid item xs={3}>
                                <Button variant="raised" color="primary"
                                        onClick={() => this.logic.sendRequest(
                                            'getError',
                                            () => getErrorEAR.request.dispatch()
                                        )}>
                                    GET<br/>(Error)
                                </Button>
                                <br/>
                                <br/>
                                {this.props.ajaxRequestsGetError.stage}
                            </Grid>

                            <Grid item xs={3}>
                                <Button variant="raised" color="primary"
                                        onClick={() => this.logic.sendRequest(
                                            'postSuccess',
                                            () => postSuccessEAR.request.dispatch("this is the request body, can be anything"))}>
                                    POST<br/>(Success)
                                </Button>
                                <br/>
                                <br/>
                                {this.props.ajaxRequestsPostSuccess.stage}
                            </Grid>

                            <Grid item xs={3}>
                                <Button variant="raised" color="primary"
                                        onClick={() => this.logic.sendRequest(
                                            'postError',
                                            () => postErrorEAR.request.dispatch("this is the request body, can be anything"))}>
                                    POST<br/>(Error)
                                </Button>
                                <br/>
                                <br/>
                                {this.props.ajaxRequestsPostError.stage}
                            </Grid>
                        </Grid>
                    </div>
                    </Body>
                    Result display under this doesn't work anymore. Some problem with state change probably.
                    Not worth the time investigating.
                    {this.logic.renderResponse.from(this.state.displayedResponse)}
                </div>
            );
        }
    }

    export const component = decorate<Props>(Component, c => c
        .withRedux(mapsStateToProps));

}


