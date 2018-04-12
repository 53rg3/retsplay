import {MUI} from "../modules/layout/css/MUI";
import createMuiTheme from "material-ui-next/styles/createMuiTheme";
import MuiThemeProvider from "material-ui-next/es/styles/MuiThemeProvider";
import {Redux} from "./Redux";
import {Provider} from "react-redux";
import {RxJs} from "./RxJS";
import {BrowserRouter} from "react-router-dom";
import {Router} from "./Router";
import * as React from "react";
import * as ReactDOM from "react-dom";


RxJs.getImports();
ReactDOM.render(
        <Provider store={Redux.INST.store}>
            <MuiThemeProvider theme={createMuiTheme(MUI.theme)}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
            </MuiThemeProvider>
        </Provider>
    ,
    document.getElementById("app")
);

