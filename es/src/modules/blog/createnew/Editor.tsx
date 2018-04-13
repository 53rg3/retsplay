import * as React from "react";
import {NoState} from "../../../lib/helpers/NoPropsNoState";
import {Body} from "../../layout/commons/Body";
import {decorate} from "../../../lib/helpers/Decorator";


export module Editor {

    class Props {
        classes?: any;
    }

    class Component extends React.Component<Props, NoState> {

        render() {
            return (
                <div>
                    <Body>
                    Create new
                    </Body>
                </div>
            );
        }
    }

    export const component = decorate<Props>(Component, c => c);


}


