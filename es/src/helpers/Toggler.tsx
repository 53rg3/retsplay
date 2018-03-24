import * as React from "react";
import {Checks} from "./Checks";


export class Toggle {

    public static byKey(key: string, component: React.Component): ()=>void {
        return () => {
            const stateCopy: any = component.state;
            Checks.throwIfNull(stateCopy[key], "Key '" + key + "' does not exist in state");
            const oldState: boolean = stateCopy[key];
            component.setState({[key]: !oldState});
        }
    }

}
