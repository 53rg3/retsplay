import * as React from "react";
import {JsonResponse} from "../../lib/ajax/JsonResponse";
import {Person} from "./models/Person";
import {Body} from "../layout/commons/Body";

export class AjaxRequestsLogic {

    private readonly component: React.Component;

    constructor(component: React.Component) {
        this.component = component;
    }

    public updateDisplayedResponse(jsonResponse: JsonResponse<Person>) {
        this.component.setState({displayedResponse: jsonResponse})
    }

    public displayResponse(displayedResponse: any) {
        if (displayedResponse) {
            return (
                <Body>
                <h2>Response</h2>
                    <pre>
                        {JSON.stringify(displayedResponse, null, 4)}
                    </pre>
                </Body>);
        } else {
            return "";
        }
    }

    public sendRequest(type: string, dispatch: (payload?: any) => any) {
        this.component.setState({
            ...this.component.state,
            lastAction: type
        });
        dispatch();
    }

}
