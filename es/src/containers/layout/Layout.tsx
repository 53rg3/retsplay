import * as React from "react";
import {NoProps, NoState} from "../../helpers/NoPropsNoState";
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Sidebar} from "./sidebar/Sidebar";



export class Layout extends React.Component<NoProps,NoState> {
    render() {
        return (
            <div className="flex-full-height">
                <Header/>
                <div className="row row-main">
                    <Main children={this.props.children}/>
                    <Sidebar/>
                </div>
            </div>
        );
    }
}
