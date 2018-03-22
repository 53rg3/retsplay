import * as React from "react";
import {NoProps, NoState} from "../../../helpers/NoPropsNoState";
import {Assets} from "../../../helpers/Assets";


export class Header extends React.Component<NoProps, NoState> {
    render() {
        return (
            <header className="row row-header">
                <img src={Assets.getLogo()}/>
            </header>
        );
    }
}
