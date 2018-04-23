import * as React from "react";
import {HttpResponse} from "../../lib/ajax/HttpResponse";
import {Person} from "./models/Person";
import {Body} from "../layout/commons/Body";
import {HttpResponseRenderer} from "../../lib/helpers/HttpResponseRenderer";
import {Html} from "../../lib/helpers/Html";

export class AjaxRequestsLogic {

    private readonly component: React.Component;

    constructor(component: React.Component) {
        this.component = component;
    }

    public updateDisplayedResponse(httpResponse: HttpResponse<Person>) {
        this.component.setState({displayedResponse: httpResponse})
    }


    private renderedBody = (response: HttpResponse<Person>) => (
        <Body>
        <h2>Response</h2>
            <pre>
                {JSON.stringify(response.body, null, 4)}
            </pre>
        </Body>);
    public renderResponse = new HttpResponseRenderer<Person>(c => c
        .initial(() => Html.emptySpan())
        .loading(() => Html.emptySpan())
        .success(this.renderedBody)
        .error(this.renderedBody));


    public sendRequest(type: string, dispatch: (payload?: any) => any) {
        this.component.setState({
            ...this.component.state,
            lastAction: type
        });
        dispatch();
    }

}
