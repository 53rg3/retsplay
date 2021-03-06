import {Validation} from "./FormManager";
import {FieldRenderProps} from "react-final-form";
import {Checks} from "../helpers/Checks";


export class FormField<T> {
    name: string;
    readonly validations: Validation[] = [];
    value: T;
    options: Array<string> = [];
    props:FieldRenderProps;

    constructor(fieldType:{new():T}, config?: (config: FormFieldConfig) => FormFieldConfig) {
        let defaultValue:any;
        const type = new fieldType();
        switch(type.constructor) {
            case String:
            case Number:
            case Boolean:
            case Array:
                defaultValue = undefined;
                break;
            default:
                throw new Error("FormField type not recognized. Must be String, Number, Boolean or Array. Got: "+type);
        }

        if (config) {
            const formFieldData: FormFieldData = config(new FormFieldConfig()).build();
            this.value = formFieldData.value ? formFieldData.value : defaultValue;
            this.validations = formFieldData.validations;
        } else {
            this.value = defaultValue;
        }
    }

    public addOption(option: string) {
        Checks.throwIfNil(option, "Provided option is undefined.");
        if (this.options.indexOf(option) == -1) {
            this.options.push(option);
        }
    }

}

class FormFieldData {
    readonly validations: Validation[];
    readonly value: string | number | Array<string> | boolean;

    constructor(validations: Validation[], value: string | number | Array<string> | boolean) {
        this.validations = validations;
        this.value = value;
    }
}

export class FormFieldConfig {

    private _validations: Validation[] = [];
    private _value: string | number | Array<string> | boolean;

    public validation(validation: (value: any) => boolean, errorMessage: string) {
        this._validations.push(new Validation(validation, errorMessage));
        return this;
    }

    public value(value: string | number | Array<string> | boolean) {
        this._value = value;
        return this;
    }

    public build(): FormFieldData {
        return new FormFieldData(this._validations, this._value);
    }

}
