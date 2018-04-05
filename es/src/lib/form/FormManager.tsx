import {FormField} from "./FormField";
import * as React from "react";
import {Checks} from "../helpers/Checks";

export class FormManager {

    public readonly fields:{[key:string]: FormField<any>};
    private readonly component:React.Component;

    constructor(component:React.Component, fields:{[key:string]: FormField<any>}) {
        Object.keys(fields).forEach(key => {
           fields[key].name = key;
        });
        this.fields = fields;
        this.component = component;
    }

    public validate(values: any): Object {
        this.updateValues(values);
        this.validateForm(values);
        const errors = {} as any;
        Object.keys(this.fields).forEach(key => {
            const validations = this.fields[key].validations;
            for (const validation of validations) {
                if (!validation.predicate(values[this.fields[key].name])) {
                    errors[this.fields[key].name] = validation.errorMessage;
                    break;
                }
            }
        });
        return errors;
    }

    private validateForm(values: any) {
        Object.keys(values).forEach(key => {
            if(!this.fields[key]) {
                throw new Error("Field '"+key+"' is not registered in form definition which you passed to FormManager.");
            }
        });
    }

    public setValues(values:any) {
        this.updateValues(values);
        this.component.setState(this.component.state);
    }

    public updateValues(values:any) {
        Object.keys(values).forEach(key => {
            Checks.throwIfNil(this.fields[key], "Field '"+key+"' does not exist in the form definition object you passed to FormManager");
            this.fields[key].value = values[key];
        });
    }

    public getValues():Object {
        let values:{[key:string]: any} = {};
        Object.keys(this.fields).forEach(key => {
            values[key] = this.fields[key].value;
        });
        return values;
    }

}

export class Validation {
    readonly predicate: (value: any) => boolean;
    readonly errorMessage: string;

    constructor(validation: (value: any) => boolean, errorMessage: string) {
        this.predicate = validation;
        this.errorMessage = errorMessage;
    }
}
