import * as React from "react";
import {decorate} from "../../lib/helpers/ComponentDecorators";
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
import {CounterLogic} from "./Counter.logic";
import {CounterModel} from "./models/CounterModel";
import {CounterEAR} from "./ears/Counter.ear";



export module Counter {

    export const EAR = CounterEAR.INST;
    const css = counterCss;
    const formFields = counterFormFields;

    class Props {
        counter: CounterModel;
    }

    class State {
        hasError: false;
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
                    A reminder how to overcomplicate simple things and still come up with a shitty solution...
                    Only build Factories and such if operations are repetitive. Not for simple counters, toggles, etc.
                    </Body>
                    <br/>
                    <Form onSubmit={() => {
                    }}
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
                                                    {this.props.counter.count}
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

    export const component = decorate<Props>(Component, c => c
        .withRedux(true));

}
