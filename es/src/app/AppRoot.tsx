import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {RxJs} from "./RxJS";
import {Redux} from "./Redux";
import {BrowserRouter} from "react-router-dom";
import {Router} from "./Router";
import MuiThemeProvider from "material-ui-next/es/styles/MuiThemeProvider";
import createMuiTheme from "material-ui-next/styles/createMuiTheme";
import {theme} from "../containers/layout/css/Theme";






RxJs.getImports();

ReactDOM.render(
        <Provider store={Redux.INST.store}>
            <MuiThemeProvider theme={createMuiTheme(theme)}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
            </MuiThemeProvider>
        </Provider>
    ,
    document.getElementById("app")
);

