import * as React from "react";
import {connect} from "react-redux";
import withStyles from "material-ui-next/es/styles/withStyles";
import {GenericBuilder, GenericConfig} from "./GenericBuilder";
import {withRouter} from "react-router";

class Capabilities {
    withRedux:boolean = false;
    withStyles: (theme?:any)=>Object;
    withRouter:boolean = false;
}

/**
 * ----- Props interface maybe needs specific properties -----
 * ------ We can't check these at compile- or run-time. ------
 *
 * withStyles:
 * Props must have property 'classes:any'. This adds the provided CSS to props.
 *
 * withRouter:
 * Props should have property 'location:any'. This adds some functions to props.
 *
 * withRedux:
 * Props must have the state property names from the store. Otherwise they won't be available.
 */
export function decorate<P>(component: React.ComponentClass, cfg:(cfg:GenericConfig<Capabilities>)=>GenericConfig<Capabilities>, from?:string): React.ComponentClass<P> {

    const config = GenericBuilder.buildFromConfig(cfg);
    if(from) {
        console.log("FROM: ", from, config);
    }
    let blankComponent = component as any;

    if(config.withStyles) {
        console.log("in withStyles, config: ", from, config.withStyles);
        blankComponent = withStyles(config.withStyles)(blankComponent)
    }

    if(config.withRouter) {
        console.log("in withRouter, config: ", from, config.withRouter);
        blankComponent = withRouter(blankComponent);
    }

    if(config.withRedux) {
        blankComponent = connect<P>((props:P) => {console.log("in withRudux", from, props); return props})(blankComponent);
    }

    return blankComponent;
}


export function withRedux<Props>(componentClass: any): React.ComponentClass<any> {
    return connect<Props>((props:Props) => props)(componentClass);
}
