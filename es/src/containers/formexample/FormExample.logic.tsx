import * as React from "react";
import {formExampleFields} from "./FormExample.fields";
import {MUI} from "../layout/css/MUI";
import {FormManager} from "../../lib/form/FormManager";
import {Toggle} from "../../lib/helpers/Toggle";
import {FieldMeta} from "../../lib/form/FieldMeta";


export class FormExampleLogic {

    private readonly component: React.Component;
    private readonly formManager: FormManager;
    private readonly formFields = formExampleFields;

    constructor(component: React.Component, formManager: FormManager) {
        this.component = component;
        this.formManager = formManager;
    }

    handleSubmit(input: any) {
        console.log("Form Submission Result: ", input);
        Toggle.byKey("isModalOpen", this.component);
    }

    changeValues() {
        this.formManager.setValues({
            name: "Bob",
            secretKey: "KAJssdf2399823§$%&",
            skill: "swordsmanship",
            food: ["burger", "pizza"],
            awesome: true,
            glorious: true,
            formidable: true,
            singleColor: "blue",
            multiColor: ["orange", "red", "yellow"]
        });
    }

    selectAllLink() {
        const value = FieldMeta.getValueAsArray(this.formFields.food);
        if (value.length == 0) {
            return <span style={MUI.inline.form.functionLink}
                         onClick={() => FieldMeta.selectAll(this.formManager, this.formFields.food)}>(select all)</span>;
        } else {
            return <span style={MUI.inline.form.functionLink}
                         onClick={() => FieldMeta.deselectAll(this.formManager, this.formFields.food)}>(deselect all)</span>;
        }
    }

}

export const colorSelection = [
    'red',
    'green',
    'blue',
    'purple',
    'yellow',
    'black',
    'white',
    'brown',
    'orange'
];
