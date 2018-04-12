import * as React from "react";
import Button from "material-ui-next/es/Button";
import {NoProps} from "../../lib/helpers/NoPropsNoState";
import {Assets} from "../../lib/helpers/Assets";



const styles = {
    margin: "0 auto"
};

class State {
    buttonPushed:boolean = false;
}
export default class Home extends React.Component<NoProps, State> {
    constructor(props:NoProps) {
        super(props);
        this.state = new State();
    }

    handleClick() {
        this.setState({buttonPushed: !this.state.buttonPushed});
    }

    private home = (
        <div>
            <Button variant="raised" color="secondary" onClick={this.handleClick.bind(this)}>Push this button!</Button>
        </div>);

    private dancer = (
        <div style={styles}>
            <img className="fading" src={Assets.image("dance.gif")} />
            <audio autoPlay>
                <source src={Assets.image("dubmood.mp3")} type="audio/mpeg" />
            </audio>
        </div>);

    render() {
        const html = this.state.buttonPushed ? this.dancer : this.home;
        return (html);
    }
}
