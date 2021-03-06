import {FormField} from "../../lib/form/FormField";
import * as React from "react";
import {FormManager} from "../../lib/form/FormManager";
import {Counter} from "./Counter";
import {CounterModel} from "./models/CounterModel";
import {CounterEAR} from "./ears/Counter.ear";

export class CounterLogic {

    formFields: { [key: string]: FormField<any> };
    formManager: FormManager;
    component: React.Component;

    constructor(formFields: { [key: string]: FormField<any> }, formManager: FormManager, component: React.Component) {
        this.formFields = formFields;
        this.formManager = formManager;
        this.component = component;
    }


    incrementValue() {
        if (this.formManager.getFormProps().valid) {
            CounterEAR.INST.increase.dispatch(CounterModel.value(Number(this.formFields.incrementValue.value)));
            this.component.setState({hasError: false});
        } else {
            this.component.setState({hasError: true})
        }
    }

    decrementValue() {
        if (this.formManager.getFormProps().valid) {
            CounterEAR.INST.decrease.dispatch(CounterModel.value(Number(this.formFields.decrementValue.value)));
            this.component.setState({hasError: false});
        } else {
            this.component.setState({hasError: true});
        }
    }
}
