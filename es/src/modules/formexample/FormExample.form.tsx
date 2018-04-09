import {FormField} from "../../lib/form/FormField";
import {Value} from "../../lib/form/Value";


export const formExampleFields = {
    name: new FormField(String, c => c
        .validation(Value.isRequired, "Required")),

    secretKey: new FormField(String, c => c
        .validation(Value.isRequired, "Required")
        .validation(v => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{12,})/.test(v),
            "Min 12 chars, with capital letters & special chars")
        .validation(v => Value.hasMinLength(v, 12), "Min length: 12")),

    skill: new FormField(String, c => c
        .validation(Value.isRequired, "Only a dead socialist is good socialist. How do you slay them?")),

    food: new FormField(Array, c => c
        .validation(Value.isRequired, "We need to know!")
        .validation(v => v.length > 1, "Choose at least two!")),

    awesome: new FormField(Boolean, c => c
        .validation(Value.isRequired, "Must be awesome")),

    glorious: new FormField(Boolean, c => c
        .validation(Value.isRequired, "Must be glorious")),

    formidable: new FormField(Boolean, c => c
        .validation(Value.isRequired, "Must be formidable")),

    multiColor: new FormField(Array, c => c
        .validation(Value.isRequired, "Dude, choose some colors!")
        .validation(v => v.length > 1, "Choose at least two!")),

    singleColor: new FormField(String, c => c
        .validation(Value.isRequired, "Dude, choose a color!"))
};
