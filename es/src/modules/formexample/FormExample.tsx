import * as React from "react";
import {Field, Form} from 'react-final-form'
import Button from "material-ui-next/es/Button";
import {FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, RadioGroup} from "material-ui-next";
import {MUI} from "../layout/css/MUI";
import Divider from "material-ui-next/es/Divider";
import {ModalStandard} from "../layout/commons/ModalStandard";
import {colorSelection, FormExampleLogic} from "./FormExample.logic";
import {formExampleFields} from "./FormExample.form";
import {formExampleCss} from "./FormExample.css";
import {FormManager} from "../../lib/form/FormManager";
import {Toggle} from "../../lib/helpers/Toggle";
import {FormFactory} from "../../lib/form/FormFactory";
import {FieldMeta} from "../../lib/form/FieldMeta";
import {decorate} from "../../lib/helpers/Decorator";




class Props {
    classes?: any;
}

class State {
    isModalOpen = false;
    colorFilter = "";
}

class FormExampleComponent extends React.Component<Props, State> {

    private formFields = formExampleFields;
    private formManager: FormManager;
    private logic:FormExampleLogic;
    private css = formExampleCss;

    constructor(props: Props) {
        super(props);
        this.state = new State();
        this.formManager = new FormManager(this, formExampleFields);
        this.logic = new FormExampleLogic(this, this.formManager);
    }


    render(): any {
        console.log(this.props);
        return (
            <div>
                <ModalStandard isOpen={this.state.isModalOpen} onClose={Toggle.asFunction('isModalOpen', this)}>
                    <div>
                        <pre>{JSON.stringify(this.formManager.getValues(), null, 4)}</pre>
                    </div>
                </ModalStandard>
                <Button variant="raised" onClick={this.logic.changeValues.bind(this)}>Insert values (initialize)</Button>
                <br/>
                <br/>
                <Form
                    onSubmit={this.logic.handleSubmit.bind(this.logic)}
                    validate={this.formManager.validate.bind(this.formManager)}
                    initialValues={this.formManager.getValues()}
                    render={formProps => (
                        <form onSubmit={formProps.handleSubmit}>
                            <div>
                                <Field {...this.formFields.name}>
                                    {props => FormFactory.textField(c => c
                                        .props(props)
                                        .customProps(FieldMeta.styleAsProp(this.css.nameField))
                                        .field(c => c
                                            .label("Name *")
                                            .error(FieldMeta.isTouchedAndInvalid(props))
                                            .helperText(FieldMeta.showHelpOrError(props, "Your fucking name"))))}
                                </Field>
                                <Field {...this.formFields.secretKey}>
                                    {props => FormFactory.textField(c => c
                                        .props(props)
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
                                    <FormHelperText style={MUI.inline.form.radioButtonHelperText}>
                                        {FieldMeta.showHelpOrErrorByField(formProps, this.formFields.skill, "How do you like to slay socialists?")}
                                    </FormHelperText>
                                </FormControl>
                            </div>

                            <br/>

                            <div>
                                <FormLabel>Favorite food</FormLabel><br/>
                                <FormControl
                                    error={FieldMeta.isTouchedAndInvalidByField(formProps, this.formFields.food)}>
                                    {this.logic.selectAllLink()}
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
                                    <FormHelperText style={MUI.inline.form.radioButtonHelperText}>
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
                                            <FormHelperText style={MUI.inline.form.radioButtonHelperText}>
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
                                            <FormHelperText style={MUI.inline.form.radioButtonHelperText}>
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
                                            <FormHelperText style={MUI.inline.form.radioButtonHelperText}>
                                                {FieldMeta.showHelpOrErrorByField(formProps, this.formFields.formidable, "")}
                                            </FormHelperText>
                                        </FormControl>
                                    </div>
                                </FormGroup>
                            </div>

                            <div>
                                <FormLabel>Color Selection</FormLabel><br/>
                                <FormControl error={FieldMeta.isTouchedAndInvalidByField(formProps, this.formFields.singleColor)}>
                                    <Field {...this.formFields.singleColor} render={props => FormFactory.select(c => c
                                        .formField(this.formFields.singleColor)
                                        .formManager(this.formManager)
                                        .inputLabel("(SINGLE SELECT)")
                                        .selectComponentCustomProps(FieldMeta.styleAsProp(this.css.singleColor))
                                        .options(colorSelection))}/>
                                    <FormHelperText>
                                        {FieldMeta.showHelpOrErrorByField(formProps, this.formFields.singleColor, "Choose a color")}
                                    </FormHelperText>
                                </FormControl>

                                <FormControl error={FieldMeta.isTouchedAndInvalidByField(formProps, this.formFields.multiColor)}>
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
                                        .selectComponentCustomProps(FieldMeta.styleAsProp(this.css.multiColor))
                                        .options(colorSelection))}/>
                                    <FormHelperText>
                                        {FieldMeta.showHelpOrErrorByField(formProps, this.formFields.multiColor, "Choose some colors")}
                                    </FormHelperText>
                                </FormControl>
                            </div>


                            <br/>
                            <Button variant="raised" color="primary" type="submit" disabled={formProps.submitting}>
                                Submit
                            </Button>

                            <br/><br/>
                            <Divider/>

                            <h2>Values</h2>
                            <div style={this.css.values}>
                                <pre>{JSON.stringify(this.formManager.getValues(), null, 4)}</pre>
                            </div>
                        </form>)}
                />
            </div>
        );
    }
}
export default decorate<Props>(FormExampleComponent, c=>c)
