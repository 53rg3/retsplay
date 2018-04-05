import * as React from "react";
import {decorate} from "../../helpers/ComponentDecorators";
import {Field, Form} from 'react-final-form'
import {FormFactory} from "../../helpers/forms/FormFactory";
import {FormField} from "../../helpers/forms/FormField";
import {Value} from "../../helpers/forms/Value";
import Button from "material-ui-next/es/Button";
import {FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, RadioGroup} from "material-ui-next";
import {FieldMeta} from "../../helpers/forms/FieldMeta";
import {FormManager} from "../../helpers/forms/FormManager";
import {formCss, modalStyle} from "../layout/css/MuiComponents";
import Divider from "material-ui-next/es/Divider";
import {Toggle} from "../../helpers/Toggle";
import {ModalStandard} from "../layout/commons/ModalStandard";


const colorSelection = [
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

class Props {
    classes?: any;
}

class State {
    isModalOpen = false;
    colorFilter = "";
}

class FormExampleBlank extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = new State();
    }

    handleSubmit(input: any) {
        console.log("Form Submission Result: ", input);
        Toggle.byKey("isModalOpen", this);
    }

    private changeValues() {
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

    private selectAllLink() {
        const value = FieldMeta.getValueAsArray(this.formFields.food);
        if (value.length == 0) {
            return <span style={formCss.functionLink}
                         onClick={() => FieldMeta.selectAll(this.formManager, this.formFields.food)}>(select all)</span>;
        } else {
            return <span style={formCss.functionLink}
                         onClick={() => FieldMeta.deselectAll(this.formManager, this.formFields.food)}>(deselect all)</span>;
        }
    }

    private formFields = {
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

        singleColor: new FormField(Array, c => c
            .validation(Value.isRequired, "Dude, choose a color!"))
    };
    private formManager: FormManager = new FormManager(this, this.formFields);


    render(): any {
        return (
            <div>
                <ModalStandard isOpen={this.state.isModalOpen} onClose={Toggle.asFunction('isModalOpen', this)}>
                    <div>
                        <pre>{JSON.stringify(this.formManager.getValues(), null, 4)}</pre>
                    </div>
                </ModalStandard>
                <Button variant="raised" onClick={this.changeValues.bind(this)}>Insert values (initialize)</Button>
                <br/>
                <br/>
                <Form
                    onSubmit={this.handleSubmit.bind(this)}
                    validate={this.formManager.validate.bind(this.formManager)}
                    initialValues={this.formManager.getValues()}
                    render={(formProps) => (
                        <form onSubmit={formProps.handleSubmit}>
                            <div>
                                <Field {...this.formFields.name}>
                                    {props => FormFactory.textField(c => c
                                        .fieldProps(props)
                                        .customProps(FieldMeta.styleAsProp({width: "100px", marginRight: "20px"}))
                                        .field(c => c
                                            .label("Name *")
                                            .error(FieldMeta.isTouchedAndInvalid(props))
                                            .helperText(FieldMeta.showHelpOrError(props, "Your fucking name"))))}
                                </Field>
                                <Field {...this.formFields.secretKey}>
                                    {props => FormFactory.textField(c => c
                                        .fieldProps(props)
                                        .field(c => c
                                            .type(FieldMeta.inputType.password)
                                            .label("Secret Key *")
                                            .error(FieldMeta.isTouchedAndInvalid(props))
                                            .helperText(FieldMeta.showHelpOrError(props, "Alphanumeric with special chars. Min. length > 12"))))}
                                </Field>
                            </div>

                            <br/>

                            <div>
                                <FormControl
                                    error={FieldMeta.isTouchedAndInvalidByField(formProps, this.formFields.skill)}>
                                    <FormLabel>Main Skill</FormLabel>
                                    <RadioGroup row>
                                        <FormControlLabel label="Magic"
                                                          control={FormFactory.radioButton(c => c
                                                              .formField(this.formFields.skill)
                                                              .value("magic"))}/>
                                        <FormControlLabel label="Swordsmanship"
                                                          control={FormFactory.radioButton(c => c
                                                              .formField(this.formFields.skill)
                                                              .value("swordsmanship"))}/>
                                        <FormControlLabel label="Archery"
                                                          control={FormFactory.radioButton(c => c
                                                              .formField(this.formFields.skill)
                                                              .value("archery"))}/>
                                    </RadioGroup>
                                    <FormHelperText style={formCss.radioButtonHelperText}>
                                        {FieldMeta.showHelpOrErrorByField(formProps, this.formFields.skill, "How do you like to slay socialists?")}
                                    </FormHelperText>
                                </FormControl>
                            </div>

                            <br/>

                            <div>
                                <FormLabel>Favorite food</FormLabel><br/>
                                <FormControl
                                    error={FieldMeta.isTouchedAndInvalidByField(formProps, this.formFields.food)}>
                                    {this.selectAllLink()}
                                    <FormGroup row>
                                        <FormControlLabel label="Pizza"
                                                          control={FormFactory.checkbox(c => c
                                                              .formField(this.formFields.food)
                                                              .value("pizza"))}/>
                                        <FormControlLabel label="Burger"
                                                          control={FormFactory.checkbox(c => c
                                                              .formField(this.formFields.food)
                                                              .value("burger"))}/>
                                        <FormControlLabel label="Hot Dogs"
                                                          control={FormFactory.checkbox(c => c
                                                              .formField(this.formFields.food)
                                                              .value("hot dogs"))}/>
                                    </FormGroup>
                                    <FormHelperText style={formCss.radioButtonHelperText}>
                                        {FieldMeta.showHelpOrErrorByField(formProps, this.formFields.food,
                                            "Why get thinner, when you can get more dinner?")}
                                    </FormHelperText>
                                </FormControl>
                            </div>

                            <br/>

                            <div>

                                <FormLabel>Attributes</FormLabel>
                                <FormGroup row>
                                    <div>
                                        <FormControl
                                            error={FieldMeta.isTouchedAndInvalidByField(formProps, this.formFields.awesome)}>
                                            <FormControlLabel
                                                label="Awesome"
                                                control={FormFactory.switch(c => c
                                                    .formField(this.formFields.awesome))}/>
                                            <FormHelperText style={formCss.radioButtonHelperText}>
                                                {FieldMeta.showHelpOrErrorByField(formProps, this.formFields.awesome, "")}
                                            </FormHelperText>
                                        </FormControl>
                                    </div>

                                    <div>
                                        <FormControl
                                            error={FieldMeta.isTouchedAndInvalidByField(formProps, this.formFields.glorious)}>
                                            <FormControlLabel
                                                label="Glorious"
                                                control={FormFactory.switch(c => c
                                                    .formField(this.formFields.glorious))}/>
                                            <FormHelperText style={formCss.radioButtonHelperText}>
                                                {FieldMeta.showHelpOrErrorByField(formProps, this.formFields.glorious, "")}
                                            </FormHelperText>
                                        </FormControl>
                                    </div>

                                    <div>
                                        <FormControl
                                            error={FieldMeta.isTouchedAndInvalidByField(formProps, this.formFields.formidable)}>
                                            <FormControlLabel
                                                label="Formidable"
                                                control={FormFactory.switch(c => c
                                                    .formField(this.formFields.formidable))}/>
                                            <FormHelperText style={formCss.radioButtonHelperText}>
                                                {FieldMeta.showHelpOrErrorByField(formProps, this.formFields.formidable, "")}
                                            </FormHelperText>
                                        </FormControl>
                                    </div>
                                </FormGroup>
                            </div>

                            <div>
                                <FormLabel>Color Selection</FormLabel><br/>
                                <FormControl className={this.props.classes.formControl}
                                             error={FieldMeta.isTouchedAndInvalidByField(formProps, this.formFields.singleColor)}>
                                    <Field {...this.formFields.singleColor} render={props => FormFactory.select(c => c
                                        .formField(this.formFields.singleColor)
                                        .formManager(this.formManager)
                                        .inputLabel("(SINGLE SELECT)")
                                        .selectComponentCustomProps(FieldMeta.styleAsProp({
                                            width: "250px",
                                            marginRight: "10px"
                                        }))
                                        .options(colorSelection))}/>
                                    <FormHelperText>
                                        {FieldMeta.showHelpOrErrorByField(formProps, this.formFields.singleColor, "Choose a color")}
                                    </FormHelperText>
                                </FormControl>

                                <FormControl className={this.props.classes.formControl}
                                             error={FieldMeta.isTouchedAndInvalidByField(formProps, this.formFields.multiColor)}>
                                    <Field {...this.formFields.multiColor} render={props => FormFactory.select(c => c
                                        .formField(this.formFields.multiColor)
                                        .formManager(this.formManager)
                                        .inputLabel("(MULTI SELECT)")
                                        .enableFilter("colorFilter", this)
                                        .enableSelectAll()
                                        .filterFunction(item => item
                                            .toLowerCase()
                                            .includes(this.state.colorFilter))
                                        .selectComponentProps(c => c
                                            .multiple(true))
                                        .selectComponentCustomProps(FieldMeta.styleAsProp({width: "250px"}))
                                        .options(colorSelection))}/>
                                    <FormHelperText>
                                        {FieldMeta.showHelpOrErrorByField(formProps, this.formFields.multiColor, "Choose some colors")}
                                    </FormHelperText>
                                </FormControl>
                                {console.log("formProps", formProps)}
                            </div>


                            <br/>
                            <Button variant="raised" color="primary" type="submit" disabled={formProps.submitting}>
                                Submit
                            </Button>

                            <br/><br/>
                            <Divider/>

                            <h2>Values</h2>
                            <div style={{backgroundColor: "#ddd"}}>
                                <pre>{JSON.stringify(this.formManager.getValues(), null, 4)}</pre>
                            </div>
                        </form>)}
                />

            </div>
        );
    }
}
export const FormExample = decorate<Props>(FormExampleBlank, c => c
    .withStyles(modalStyle));
