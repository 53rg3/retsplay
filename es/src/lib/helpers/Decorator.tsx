import * as React from "react";
import {connect} from "react-redux";
import withStyles from "material-ui-next/es/styles/withStyles";
import {GenericBuilder, GenericConfig} from "./GenericBuilder";
import {withRouter} from "react-router";

class Capabilities<P> {

    /** Method signature should look like this: `({counterModel, otherProp}:Props) => ({counterModel, otherProp})`,
     * i.e. all the state properties are to be put inside the {} and the same declaration needs to be returned. */
    withRedux: (args: P) => P;

    /** This enables you to simply pass the Props type as argument and create the mapStateToProps function dynamically.
     * But this uses `new Function` which requires 'unsafe-eval' to be allowed in the Content Security Header. So better
     * not use it. */
    withUnsafeEvalRedux:new () => P;
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
export function decorate<P>(component: React.ComponentClass, cfg:(cfg:GenericConfig<Capabilities<P>>)=>GenericConfig<Capabilities<P>>): React.ComponentClass<P> {

    const config = GenericBuilder.buildFromConfig(cfg);
    let blankComponent = component as any;

    if(config.withStyles) {
        blankComponent = withStyles(config.withStyles)(blankComponent)
    }

    if(config.withRouter) {
        blankComponent = withRouter(blankComponent);
    }

    if(config.withRedux) {
        blankComponent = connect<P>(config.withRedux)(blankComponent);
    }

    if(config.withUnsafeEvalRedux) {
        const props = new config.withUnsafeEvalRedux;
        let varSection = "";
        let returnSection = "";
        Object.keys(props).forEach(key => {
            varSection += "var "+key+" = _a."+key+"; ";
            returnSection += key+": "+key+", ";
        });
        const mapStateToProps = new Function("_a",
            varSection +
            "return {"+
                returnSection
            +"}"
        );
        blankComponent = connect(mapStateToProps as any)(blankComponent);
    }

    return blankComponent;
}
