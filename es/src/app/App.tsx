import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {RxJs} from "./RxJS";
import {Redux} from "./Redux";
import {RootComponent} from "../components/root/RootComponent";



RxJs.getImports();

ReactDOM.render(
    <Provider store={Redux.INST.store}>
        <RootComponent />
    </Provider>,
    document.getElementById("app")
);
