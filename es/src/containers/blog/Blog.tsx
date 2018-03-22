import * as React from "react";
import {NoProps, NoState} from "../../helpers/NoPropsNoState";
import {withRedux} from "../../helpers/ComponentDecorators";




class Blog extends React.Component<NoProps,NoState> {

    render() {
        return (
            <div>
                <h2>Blog</h2>
            </div>
        );
    }
}
export default withRedux<NoProps>(Blog);
