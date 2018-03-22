import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {RxJs} from "./RxJS";
import {Redux} from "./Redux";
import {BrowserRouter} from "react-router-dom";
import {Router} from "./Router";
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {MuiCustomStyle} from "../containers/layout/theme/materialui/Style";
// <MuiThemeProvider muiTheme={MuiCustomStyle}>
// </MuiThemeProvider>

RxJs.getImports();

ReactDOM.render(
        <Provider store={Redux.INST.store}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </Provider>
    ,
    document.getElementById("app")
);

