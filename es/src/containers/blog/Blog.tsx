import * as React from "react";
import {NoState} from "../../helpers/NoPropsNoState";
import {decorate} from "../../helpers/ComponentDecorators";
import {Heading} from "../layout/commons/Heading";
import {Body} from "../layout/commons/Body";


class Props {
    classes?: any
}

class Blog extends React.Component<Props, NoState> {

    render() {
        return (
            <div>
                <Heading heading="Blog" />
                <Body>
                    Blog...
                </Body>
            </div>
        );
    }
}
export default decorate<Props>(Blog, c => c);
