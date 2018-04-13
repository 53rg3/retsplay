import * as React from "react";
import Paper from "material-ui-next/es/Paper";
import {MUI} from "../css/MUI";
import {NoState} from "../../../lib/helpers/NoPropsNoState";
import {decorate} from "../../../lib/helpers/Decorator";

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
    .withStyles(MUI.classes.mainContent));
