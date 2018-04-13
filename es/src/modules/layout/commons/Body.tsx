import * as React from "react";
import Paper from "material-ui-next/es/Paper";
import {MUI} from "../css/MUI";
import {NoState} from "../../../lib/helpers/NoPropsNoState";
import {decorate} from "../../../lib/helpers/Decorator";


class Props {
    classes?: any;
}
class BodyBlank extends React.Component<Props, NoState> {
    render() {
        return (
            <Paper className={this.props.classes.body} elevation={1}>
                {this.props.children}
            </Paper>
        );
    }
}
export const Body = decorate<Props>(BodyBlank, c => c
    .withStyles(MUI.classes.mainContent));
