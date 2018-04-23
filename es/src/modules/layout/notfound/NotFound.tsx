import React = require("react");
import {NoProps, NoState} from "../../../lib/helpers/NoPropsNoState";
import {decorate} from "../../../lib/helpers/Decorator";

export module NotFound {

    class NotFound extends React.Component<NoProps, NoState> {
        render() {
            return (
                <div>404 - Route not found</div>
            );
        }
    }
    export const component = decorate(NotFound, c => c);

}
