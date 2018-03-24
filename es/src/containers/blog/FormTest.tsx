import * as React from "react";
import {decorate} from "../../helpers/ComponentDecorators";
import {NoState} from "../../helpers/NoPropsNoState";
import TextField from "material-ui-next/es/TextField";
import { Form, Field } from 'react-final-form'


const styles = () => ({
    someComponent: {

    }
});

interface Props {

}
class Component extends React.Component<Props, NoState> {
    render() {
        return (
            <div>
                <Form
                    onSubmit={()=>{}}
                    validate={(values)=>values}
                    render={({ handleSubmit, pristine, invalid }) => (
                        <form onSubmit={handleSubmit}>
                            <h2>Simple Default Input</h2>
                            <div>
                                <label>First Name</label>
                                <Field name="firstName" component="input" placeholder="First Name" />
                            </div>

                            <h2>An Arbitrary Reusable Input Component</h2>
                            <div>
                                <label>Interests</label>
                                <Field name="interests" component={"input"} />
                            </div>

                            <h2>Render Function</h2>
                            <Field
                                name="bio"
                                render={({ input, meta }) => (
                                    <div>
                                        <label>Bio</label>
                                        <textarea {...input} />
                                        {meta.touched && meta.error && <span>{meta.error}</span>}
                                    </div>
                                )}
                            />

                            <h2>Render Function as Children</h2>
                            <Field name="phone">
                                {({ input, meta }) => (
                                    <div>
                                        <label>Phone</label>
                                        <input type="text" {...input} placeholder="Phone" />
                                        {meta.touched && meta.error && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>

                            <button type="submit" disabled={pristine || invalid}>
                                Submit
                            </button>
                        </form>
                    )}
                />
            </div>
        );
    }
}
export const FormTest = decorate<Props>(Component, c => c
    .withStyles(styles));
