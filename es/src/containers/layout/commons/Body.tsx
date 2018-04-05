import * as React from "react";
import {paperStyle} from "../css/MuiComponents";
import {decorate} from "../../../helpers/ComponentDecorators";
import {NoState} from "../../../helpers/NoPropsNoState";
import Paper from "material-ui-next/es/Paper";


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
    .withStyles(paperStyle));
