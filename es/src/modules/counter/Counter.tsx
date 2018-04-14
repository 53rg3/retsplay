import * as React from "react";
import {CounterLogic} from "./Counter.logic";
import {decorate} from "../../lib/helpers/Decorator";
import Paper from "material-ui-next/es/Paper";
import Button from "material-ui-next/es/Button";
import {counterCss} from "./Counter.css";
import Typography from "material-ui-next/es/Typography";
import Grid from "material-ui-next/es/Grid";
import {FormManager} from "../../lib/form/FormManager";
import {counterFormFields} from "./Counter.form";
import {Field, Form} from "react-final-form";
import {FormFactory} from "../../lib/form/FormFactory";
import {FieldMeta} from "../../lib/form/FieldMeta";
import {Heading} from "../layout/commons/Heading";
import {Body} from "../layout/commons/Body";
import {CounterModel} from "./models/CounterModel";
import {Schema} from "../../app/Schema";
import {CounterEAR} from "./ears/Counter.ear";

export module Counter {

    CounterEAR.INST;
    const css = counterCss;
    const formFields = counterFormFields;


    class State {
        hasError: false;
    }

    class Props {
        [Schema.counter.state]:CounterModel;
    }

    class Component extends React.Component<Props, State> {

        private formManager: FormManager;
        private logic: CounterLogic;

        constructor(props: Props) {
            super(props);
            this.state = new State();
            this.formManager = new FormManager(this, formFields);
            this.logic = new CounterLogic(formFields, this.formManager, this);
        }

        render(): any {
            return (
                <div>
                    <Heading heading={"Async Counter"}/>
                    <Body>
                    A reminder how to overcomplicate simple things and still come up with a shitty solution... but it
                    illustrates how to use the EAR builder with state factory methods in the model.
                    </Body>
                    <br/>
                    <Form onSubmit={() => {/* NO OP */}}
                          validate={this.formManager.validate.bind(this.formManager)}
                          initialValues={this.formManager.getValues()}>
                        {formProps => {
                            return (<Grid container spacing={0}>
                                    <Grid item sm={4}>
                                        <Grid container justify="center">
                                            <Button variant="raised" color="primary"
                                                    onClick={() => this.logic.incrementValue()}>
                                                Increase
                                            </Button>
                                            <Paper style={css.paper}>
                                                <Field {...formFields.incrementValue} >
                                                    {props => FormFactory.textField(c => c
                                                        .props(props)
                                                        .customProps(FieldMeta.styleAsProp(css.paper))
                                                        .field(c => c
                                                            .InputProps({disableUnderline: true})
                                                            .placeholder("value")
                                                            .error(FieldMeta.isTouchedAndInvalid(props))
                                                            .helperText(FieldMeta.showHelpOrError(props, "(increment by)"))))}
                                                </Field>
                                            </Paper>
                                        </Grid>
                                    </Grid>

                                    <Grid item sm={4}>
                                        <Grid container justify="center">
                                            <Paper style={css.paper}>
                                                <Typography variant="headline" align="center">
                                                    {this.props.counterModel.count}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    </Grid>

                                    <Grid item sm={4}>
                                        <Grid container justify="center">
                                            <Paper style={css.paper}>
                                                <Field {...formFields.decrementValue}>
                                                    {props => FormFactory.textField(c => c
                                                        .props(props)
                                                        .customProps(FieldMeta.styleAsProp(css.paper))
                                                        .field(c => c
                                                            .InputProps({disableUnderline: true})
                                                            .placeholder("value")
                                                            .error(FieldMeta.isTouchedAndInvalid(props))
                                                            .helperText(FieldMeta.showHelpOrError(props, "(decrement by)"))))}
                                                </Field>
                                            </Paper>
                                            <Button variant="raised" color="primary"
                                                    onClick={() => this.logic.decrementValue()}>
                                                Decrease
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    {this.formManager.setFormProps(formProps)}
                                </Grid>
                            );
                        }}
                    </Form>
                    <br/>
                    {this.state.hasError ? <Body>
                    <div style={css.errorMessage}>Why you submit NaN!?</div>
                    </Body> : ""}
                </div>
            );
        }
    }
    export const component = decorate(Component, c => c
        .withRedux(({counterModel}:Props) => ({counterModel})));

}
