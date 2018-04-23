import * as React from "react";
import {NoState} from "../../../lib/helpers/NoPropsNoState";
import {Body} from "../../layout/commons/Body";
import {decorate} from "../../../lib/helpers/Decorator";
import {match, Redirect} from "react-router";
import {editorFormFields} from "./Editor.formFields";
import {FormManager} from "../../../lib/form/FormManager";
import {Field, Form} from "react-final-form";
import {FormFactory} from "../../../lib/form/FormFactory";
import Button from "material-ui-next/es/Button";
import {FieldMeta} from "../../../lib/form/FieldMeta";
import {editorCss} from "./Editor.css";
import {EditorLogic} from "./Editor.logic";
import {CreateNewEar} from "./ears/CreateNew.ear";
import {HttpResponse} from "../../../lib/ajax/HttpResponse";
import {BlogPost} from "../commons/models/BlogPost";
import {Schema} from "../../../app/Schema";
import {UpdatePostEar} from "./ears/UpdatePost.ear";
import {GetPostEar} from "../singlePost/ears/GetPost.ear";
import {HttpRequestStage} from "../../../lib/ajax/HttpRequest";


export module Editor {

    CreateNewEar.INST;
    const updatePostEar = UpdatePostEar.INST;
    const getPostEar = GetPostEar.INST;

    class Props {
        classes?: any;
        match: match<{id:string}>;
        [Schema.blogCreateNew]: HttpResponse<BlogPost>;
        [Schema.blogGetPost]: HttpResponse<BlogPost>;
    }
    const mapsStateToProps = ({blogCreateNew,blogGetPost}:Props) =>
        ({blogCreateNew,blogGetPost});

    class State {
        redirectTo:string = null;
    }

    class Component extends React.Component<Props, State> {

        private logic = new EditorLogic(this);
        private formFields = editorFormFields;
        private formManager = new FormManager(this, this.formFields);
        private id:string;

        constructor(props:Props){
            super(props);
            this.id = this.props.match.params.id;
            this.state = new State();
        }

        componentDidMount() {
            getPostEar.invalidate.dispatch();
            if(!this.state.redirectTo && this.id) {
                getPostEar.request.dispatch(this.id);
            }
        }

        render():any {
            return (
                <div>
                    <Body>
                        <Form onSubmit={this.id ? this.logic.updatePost.bind(this.logic) : this.logic.createNewPost.bind(this.logic)}
                              validate={this.formManager.validate.bind(this.formManager)}
                              initialValues={this.props.blogGetPost.stage == HttpRequestStage.SUCCESS ? this.props.blogGetPost.body : {}}
                              render={(formProps) => (
                            <form onSubmit={formProps.handleSubmit}>

                                <Field {...this.formFields.id}>
                                    {props => FormFactory.textField(c=>c
                                        .props(props)
                                        .field(c=>c
                                            .type("hidden")))}
                                </Field>

                                <Field {...this.formFields.title}>
                                    {props => FormFactory.textField(c=>c
                                        .props(props)
                                        .field(c=>c
                                            .label("Title")
                                            .fullWidth(true)
                                            .error(FieldMeta.isTouchedAndInvalid(props))
                                            .helperText(FieldMeta.showHelpOrError(props,
                                                "Clickbait all the way!!"))))}
                                </Field>

                                <Field {...this.formFields.post}>
                                    {props => FormFactory.textField(c=>c
                                        .props(props)
                                        .field(c=>c
                                            .label("Post")
                                            .multiline(true)
                                            .fullWidth(true)
                                            .rows(20)
                                            .error(FieldMeta.isTouchedAndInvalid(props))
                                            .helperText(FieldMeta.showHelpOrError(props,
                                                "Some shit no one cares about. We already got the ad revenue at this point."))))}
                                </Field>

                                <Field {...this.formFields.tags}>
                                    {props => FormFactory.textField(c=>c
                                        .props(props)
                                        .field(c=>c
                                            .label("Tags")
                                            .fullWidth(true)
                                            .error(FieldMeta.isTouchedAndInvalid(props))
                                            .helperText(FieldMeta.showHelpOrError(props,
                                                "Comma separated list"))))}
                                </Field>

                                <div>
                                    <Button style={editorCss.submitButton}
                                            variant="raised"
                                            color="primary"
                                            type="submit"
                                            disabled={formProps.submitting}>
                                        {this.id ? "Update Post" : "Create New Post"}
                                    </Button>
                                    {this.logic.renderResponse.from(this.props.blogCreateNew)}
                                </div>
                            </form>
                              )}/>
                    </Body>
                    {this.state.redirectTo ? <Redirect to={this.state.redirectTo}/> : ""}
                </div>
            );
        }
    }

    export const component = decorate(Component, c => c
        .withRedux(mapsStateToProps));


}


