import TextField from "material-ui-next/es/TextField";
import * as React from "react";
import {Field, FieldProps} from "react-final-form";
import Radio from "material-ui-next/es/Radio";
import Checkbox from "material-ui-next/es/Checkbox";
import {FieldMeta} from "./FieldMeta";
import Switch from "material-ui-next/es/Switch";
import MenuItem from "material-ui-next/Menu/MenuItem";
import ListItem from "material-ui-next/List/ListItem";
import InputLabel from "material-ui-next/Input/InputLabel";
import Select from "material-ui-next/es/Select";
import Icon from "material-ui-next/es/Icon";
import {FormField} from "./FormField";
import Tooltip from "material-ui-next/es/Tooltip";
import {FormManager} from "./FormManager";
import {TextFieldConfig, TextFieldConfigData} from "./configs/TextFieldConfig";
import {SelectFieldConfig, SelectFieldConfigData} from "./configs/SelectFieldConfig";
import {Checks} from "../helpers/Checks";
import {GenericBuilder, GenericConfigWithFormField} from "../helpers/GenericBuilder";


export class FormFactory {

    public static textField(config: (cfg: TextFieldConfig) => TextFieldConfig) {

        const cfg: TextFieldConfigData = config(new TextFieldConfig()).build();
        Checks.throwIfNil(cfg.props, "Property 'props' must not be null. This factory method is intended to be used " +
            "as a child inside a Final Form Field.");
        return (
            <TextField
                {...cfg.props.input}
                {...GenericBuilder.buildFromConfig(cfg.jsx)}
                {...cfg.customProps}
            />
        );
    }

    public static radioButton(config: (config: GenericConfigWithFormField<FieldProps>) => GenericConfigWithFormField<FieldProps>) {
        const cfg = GenericBuilder.buildFromConfig(config);

        Checks.throwIfNil(cfg.formField, "Property 'formField' in Checkbox  must not be null;");
        Checks.throwIfNotNil(cfg.type, "Setting property 'type' in RadioButton is not allowed;");
        Checks.throwIfNotNil(cfg.name, "Property 'name' is not allowed. Use 'formField'.");
        Checks.throwIfNil(cfg.value, "Property 'value' in RadioButton  must not be null;");

        cfg.name = cfg.formField.name;
        return (
            <Field {...cfg} type={FieldMeta.inputType.radio}>
                {props => <Radio {...props.input} />}
            </Field>
        );
    }

    public static checkbox(config: (config: GenericConfigWithFormField<FieldProps>) => GenericConfigWithFormField<FieldProps>) {
        const cfg = GenericBuilder.buildFromConfig(config);

        Checks.throwIfNil(cfg.formField, "Property 'formField' in Checkbox  must not be null;");
        Checks.throwIfNotNil(cfg.type, "Setting property 'type' in CheckBox is not allowed;");
        Checks.throwIfNotNil(cfg.name, "Property 'name' is not allowed. Use 'formField'.");
        Checks.throwIfNil(cfg.value, "Property 'value' in Checkbox  must not be null;");

        cfg.name = cfg.formField.name;
        cfg.formField.addOption(cfg.value);
        return (
            <Field {...cfg} type={FieldMeta.inputType.checkbox}>
                {props => {
                    cfg.formField.props = props;
                    return (<Checkbox {...props.input} checked={FieldMeta.hasValue(cfg.value, cfg.formField)}/>);
                }}
            </Field>
        );
    }

    public static switch(config: (config: GenericConfigWithFormField<FieldProps>) => GenericConfigWithFormField<FieldProps>) {
        const cfg = GenericBuilder.buildFromConfig(config);

        Checks.throwIfNil(cfg.formField, "Property 'formField' in Switch  must not be null;");
        Checks.throwIfNotNil(cfg.type, "Setting property 'type' in Switch is not allowed;");
        Checks.throwIfNotNil(cfg.name, "Property 'name' is not allowed. Use 'formField'.");
        Checks.throwIfNotNil(cfg.value, "Property 'value' in Switch  is not allowed. Switch is for true/false only.");

        cfg.name = cfg.formField.name;
        return (
            <Field {...cfg} type={FieldMeta.inputType.checkbox}>
                {props => {
                    cfg.formField.props = props;
                    return (<Switch {...props.input} value={"override_dummy"} checked={props.input.value}/>);
                }}
            </Field>
        );
    }

    public static select(config: (config: SelectFieldConfig) => SelectFieldConfig) {
        const cfg: SelectFieldConfigData = config(new SelectFieldConfig()).build();

        Checks.throwIfNotNil(cfg.selectComponentProps.value, "Property 'value' in selectComponentProps  is not allowed. Use 'formField'.");
        Checks.throwIfNil(cfg.formField, "Property 'formField'  must not be null;");
        Checks.throwIfNil(cfg.formManager, "Property 'formManager'  must not be null;");
        Checks.throwIfNil(cfg.options, "Property 'options'  must not be null;");

        const renderValueFunction = cfg.selectComponentProps.multiple ? (selected: any) => selected.join(", ") : (selected: any) => selected;

        // TEMPORARY HELPER FIELD HACK
        if((cfg.enableSelectAll && !cfg.selectComponentProps.multiple) || cfg.filterStateName && !cfg.selectComponentProps.multiple) {
            throw new Error("Can't use helper functions like SelectAll or Filter in Select without 'multiple' enable. Selection " +
                "closes onChange. We would need to use property 'open' and 'onClose' on Select component to control the behavior. " +
                "Who needs filters on select fields anyway?");
        }
        // HELPER FIELD
        let helperField:any = "";
        if(cfg.filterStateName) {
            helperField = (<ListItem style={{padding: "6px", outline: "none"}}>
                <Icon>search</Icon>
                <TextField
                    value={cfg.parentComponent.state[cfg.filterStateName]}
                    placeholder="  Filter"
                    onChange={(event: any) => FormFactory.setSelectFilter(event, cfg.filterStateName, cfg.parentComponent)}/>
                {cfg.enableSelectAll ? FormFactory.selectAllLink(cfg.formField, cfg.formManager, cfg.filter) : ""}
            </ListItem>);
        } else if(cfg.enableSelectAll) {
            helperField = (<ListItem style={{padding: "6px", outline: "none"}}>
                {cfg.enableSelectAll ? FormFactory.selectAllLink(cfg.formField, cfg.formManager, cfg.filter) : ""}
            </ListItem>);
        }

        // EVALUATE VALUE
        if(!Array.isArray(cfg.formField.value) && !cfg.formField.value) {
            cfg.formField.value = [];
        } else if (!Array.isArray(cfg.formField.value) && cfg.formField.value){
            cfg.formField.value = [cfg.formField.value];
        }

        return (
            <div>
                <InputLabel>{cfg.inputLabel}</InputLabel>
                <Select
                    {...cfg.selectComponentProps}
                    {...cfg.customProps}
                    value={cfg.formField.value}
                    renderValue={renderValueFunction}
                    onClick={(event: any) => {
                        FieldMeta.setValueFromEvent(event, cfg.formField, cfg.formManager)
                    }}
                >
                    {helperField}
                    {cfg.options
                        .filter(cfg.filter ? cfg.filter.bind(this) : (item)=>true)
                        .map(item => (
                            <MenuItem key={item} value={item}>
                                {item}
                                {cfg.formField.addOption(item.toString())}
                            </MenuItem>
                        ))}
                </Select>
            </div>);
    }

    private static setSelectFilter(event: any, filterStateName: string, parentComponent: React.Component) {
        parentComponent.setState({[filterStateName]: event.target.value});
    }

    private static selectAllLink(formField: FormField<any>, formManager: FormManager, filterFunction: (item: any) => boolean) {
        const value = FieldMeta.getValueAsArray(formField);
        formField.options = formField.options.filter(filterFunction);
        if (value.length == 0) {
            return (
                <Tooltip title="select all" placement="bottom">
                    <Icon style={{cursor: "pointer", color: "green"}}
                          onClick={() => FieldMeta.selectAll(formManager, formField)}>
                        playlist_add
                    </Icon>
                </Tooltip>);
        } else {
            return (
                <Tooltip title="deselect all" placement="bottom">
                    <Icon id="__internal__" style={{cursor: "pointer", color: "red"}}
                          onClick={() => FieldMeta.deselectAll(formManager, formField)}>
                        playlist_play
                    </Icon>
                </Tooltip>);
        }
    }

}
