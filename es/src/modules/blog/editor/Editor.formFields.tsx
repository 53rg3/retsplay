import {FormField} from "../../../lib/form/FormField";
import {Value} from "../../../lib/form/Value";

export const editorFormFields = {
    id: new FormField(String, c=>c),
    title: new FormField(String, c=>c
        .validation(Value.isRequired, "Required")),
    post: new FormField(String, c=>c
        .validation(Value.isRequired, "Required")),
    tags: new FormField(String, c=>c
        .validation(Value.isRequired, "Required")
        .validation(v => /[\d\w\s,]+/.test(v), "Only letters, numbers, white and commas allowed"))
};
