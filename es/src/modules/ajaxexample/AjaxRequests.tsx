import * as React from "react";
import {Heading} from "../layout/commons/Heading";
import {Body} from "../layout/commons/Body";
import {decorate} from "../../lib/helpers/ComponentDecorators";
import Button from "material-ui-next/es/Button";
import {JsonResponse} from "../../lib/ajax/JsonResponse";
import {Grid} from "material-ui-next/es";
import {GetSuccessEar} from "./ears/GetSuccess";
import {Person} from "./models/Person";
import {AjaxRequestsLogic} from "./AjaxRequests.logic";
import {GetErrorEar} from "./ears/GetError";
import {RequestStage} from "../../lib/ajax/RequestStage";
import {dynObject} from "../counter/Counter";


export module AjaxRequests {

    export const getSuccessEAR = GetSuccessEar.INST;
    export const getErrorEAR = GetErrorEar.INST;

    class Props {
        classes?: any;
        getSuccess: JsonResponse<Person>;
        getError: JsonResponse<Person>;
        ['kjh']: string
    }

    class State {
        displayedResponse: JsonResponse<Person> = null;
        lastAction: string = null;
    }

    class Component extends React.Component<Props, State> {

        private ajaxRequestsLogic = new AjaxRequestsLogic(this);

        constructor(props: Props) {
            super(props);
            this.state = new State();
        }

        componentWillReceiveProps(nextProps: any) {
            this.ajaxRequestsLogic.updateDisplayedResponse(nextProps[this.state.lastAction])
        }

        render(): any {
            return (
                <div>
                    <Heading heading="Examples for AJAX Requests"/>
                    <Body>
                    <div style={{textAlign: "center"}}>
                        <Grid container alignContent="center" justify="center">
                            <Grid item xs={3}>
                                <Button variant="raised" color="primary"
                                        onClick={() => this.ajaxRequestsLogic.sendRequest(
                                            'getSuccess',
                                            getSuccessEAR.request.dispatch.bind(getSuccessEAR.request))}>
                                    GET (Success)
                                </Button>
                                <br/>
                                <br/>
                                {this.props.getSuccess.stage}<br/>
                            </Grid>

                            <Grid item xs={3}>
                                <Button variant="raised" color="primary"
                                        onClick={() => this.ajaxRequestsLogic.sendRequest(
                                            'getError',
                                            getSuccessEAR.request.dispatch.bind(getErrorEAR.request))}>
                                    GET (Error)
                                </Button>
                                <br/>
                                <br/>
                                {this.props.getError.stage}
                            </Grid>

                            {/*<Grid item xs={3}>*/}
                            {/*<Button variant="raised" color="primary"*/}
                            {/*onClick={() => BlogEAR.Action.postRequest.dispatch({someField: "someData"})}>*/}
                            {/*Load*/}
                            {/*</Button>*/}
                            {/*<br/>*/}
                            {/*<br/>*/}
                            {/*{this.props.postExampleSuccessState.stage}*/}
                            {/*</Grid>*/}

                            {/*<Grid item xs={3}>*/}
                            {/*<Button variant="raised" color="primary"*/}
                            {/*onClick={() => BlogEAR.Action.postRequest.dispatch({someField: "someData"})}>*/}
                            {/*Load*/}
                            {/*</Button>*/}
                            {/*<br/>*/}
                            {/*<br/>*/}
                            {/*{this.props.postExampleSuccessState.stage}*/}
                            {/*</Grid>*/}
                        </Grid>
                    </div>
                    </Body>
                    {this.ajaxRequestsLogic.displayResponse(this.state.displayedResponse)}
                </div>
            );
        }
    }

    export const component = decorate<Props>(Component, c => c
        .withRedux(true));

}


