import * as React from "react";
import Button from "material-ui-next/es/Button";
import {Link} from "react-router-dom";
import {CounterState} from "../../home/counter/actions/CounterEAR";
import {decorate} from "../../../helpers/ComponentDecorators";
import {NoState} from "../../../helpers/NoPropsNoState";


const styles = () => ({
    button: {
        color: "#ff77a9",
        width: "241px",
        backgroundColor: "#ccc",
        margin: "0 auto"
    }
});

interface Props {
    route: string;
    linkText: string;
    classes?: any;
    counterState?: CounterState
}
class Component extends React.Component<Props, NoState> {
    render() {
        return (
            <Link to={this.props.route}>
                <Button variant="raised" color="secondary" className={this.props.classes.button}>
                    {this.props.linkText} + {this.props.counterState.count}
                </Button>
            </Link>
        );
    }
}
export const SidebarLink = decorate<Props>(Component, c => c
    .withRouter(true)
    .withRedux(true)
    .withStyles(styles));
