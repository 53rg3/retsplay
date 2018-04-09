import {FormField} from "../../lib/form/FormField";

export const counterFormFields = {
    incrementValue: new FormField(Number, c=>c
        .value(1)
        .validation(v => !isNaN(v), "Not a number")),
    decrementValue: new FormField(Number, c=>c
        .value(1)
        .validation(v => !isNaN(v), "Not a number"))
};
