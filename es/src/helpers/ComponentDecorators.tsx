import * as React from "react";
import {connect} from "react-redux";

export function withRedux<P>(C: React.ComponentClass<any>) {
    return connect<P>((props:P) => props)(C);
}
