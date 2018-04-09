import * as React from "react";
import {Heading} from "../layout/commons/Heading";
import {Body} from "../layout/commons/Body";
import {NoState} from "../../lib/helpers/NoPropsNoState";
import {decorate} from "../../lib/helpers/ComponentDecorators";


class Props {
    classes?: any;
}

class Blog extends React.Component<Props, NoState> {

    render() {
        return (
            <div>
                <Heading heading="Blog"/>
                <Body>
                Blog...
                </Body>
            </div>
        );
    }
}

export default decorate<Props>(Blog, c => c
    .withRedux(true));
