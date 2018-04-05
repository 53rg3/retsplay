import * as React from "react";
import {decorate} from "../../../helpers/ComponentDecorators";
import {NoState} from "../../../helpers/NoPropsNoState";
import {paperStyle} from "../css/MuiComponents";
import Paper from "material-ui-next/es/Paper";

class Props {
    classes?: any;
    heading:string;
}
class HeadingRaw extends React.Component<Props, NoState> {
    render() {
        return (
            <Paper className={this.props.classes.heading} elevation={1}>
                {this.props.heading}
            </Paper>
        );
    }
}
export const Heading = decorate<Props>(HeadingRaw, c => c
    .withStyles(paperStyle));
