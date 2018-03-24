import * as React from "react";
import {NoProps, NoState} from "../../helpers/NoPropsNoState";
import {withRedux} from "../../helpers/ComponentDecorators";
import {FormTest} from "./FormTest";




class Blog extends React.Component<NoProps,NoState> {

    render() {
        return (
            <div>
                <h2>Blog</h2>
                <FormTest />
            </div>
        );
    }
}
export default withRedux<NoProps>(Blog);
