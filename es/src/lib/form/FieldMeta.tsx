import {FieldRenderProps} from "react-final-form";
import {FormField} from "./FormField";
import {FormManager} from "./FormManager";
import * as React from "react";

export class FieldMeta {

    public static styleAsProp(cssInJs: { [key: string]: {} }) { // [key:string]: string|number
        return {style: cssInJs}
    }

    public static readonly inputType = {
        button: "button",
        checkbox: "checkbox",
        color: "color",
        date: "date",
        datetimeLocal: "datetime-local",
        email: "email",
        file: "file",
        hidden: "hidden",
        image: "image",
        month: "month",
        number: "number",
        password: "password",
        radio: "radio",
        range: "range",
        reset: "reset",
        search: "search",
        submit: "submit",
        tel: "tel",
        text: "text",
        time: "time",
        url: "url",
        week: "week"
    };

    public static readonly shrinkedLabel = {
        shrink: true
    };

    public static getErrorMessage(props: FieldRenderProps): string {
        return props.meta.error;
    }

    public static isTouchedAndInvalid(props: FieldRenderProps): boolean {
        return props.meta.touched && props.meta.invalid;
    }

    public static isTouchedAndInvalidByField(formProps: any, field: FormField<any>): boolean {
        if (formProps.errors[field.name] !== undefined) {
            return formProps.touched[field.name] && formProps.invalid;
        } else {
            return false;
        }
    }

    public static showHelpOrError(props: FieldRenderProps, helperText: string) {
        return FieldMeta.isTouchedAndInvalid(props) ? FieldMeta.getErrorMessage(props) : helperText;
    }

    public static showHelpOrErrorByField(formProps: any, formField: FormField<any>, helperText: string): string {
        if (FieldMeta.getErrorMessageByField(formProps, formField)) {
            return FieldMeta.isTouchedAndInvalidByField(formProps, formField) ? FieldMeta.getErrorMessageByField(formProps, formField) : helperText;
        } else {
            return helperText;
        }
    }

    public static getErrorMessageByField(formProps: any, field: FormField<any>): string {
        return formProps.errors[field.name];
    }

    public static hasValue(name: string, formField: FormField<any>): boolean {
        if (formField.value) {
            const value = formField.value as Array<string>;
            return value.indexOf(name) > -1;
        } else {
            return false;
        }
    }

    public static pushValue(value: string | number, formField: FormField<any>): void {
        const array = formField.value as Array<string | number>;
        if (array.indexOf(value) > -1) {
            array.push(value);
        }
    }

    public static setValueFromEvent(event: any, formField: FormField<any>, formManager: FormManager): void {
        if (event.target.value && !event.target.value.includes(undefined)) {
            formField.value = event.target.value;
            formManager.setValues({
                [formField.name]: event.target.value
            });
        }
    }


    public static selectAll(formManager: FormManager, formField: FormField<any>) {
        formManager.setValues({
            [formField.name]: formManager.fields[formField.name].options
        });
    }

    public static deselectAll(formManager: FormManager, formField: FormField<any>) {
        formManager.setValues({
            [formField.name]: []
        });
    }

    public static getValueAsArray(formField: FormField<any>): Array<string> {
        return formField.value as Array<string>;
    }

}
