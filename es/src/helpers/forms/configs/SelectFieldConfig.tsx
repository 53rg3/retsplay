import {SelectProps} from "material-ui-next/es/Select";
import * as React from "react";
import {FormField} from "../FormField";
import {FormManager} from "../FormManager";
import {GenericBuilder, GenericConfig} from "../../GenericBuilder";


export class SelectFieldConfigData {
    customProps: {};
    selectComponentProps: SelectProps;
    formField:FormField<any>;
    formManager:FormManager;
    filterStateName:string;
    parentComponent:React.Component<any, {[key:string]: any}>;
    enableSelectAll:boolean;
    filter:(item:any)=>boolean;
    options:Array<string | number>;
    inputLabel:string;

}

export class SelectFieldConfig {

    private _selectComponentCustomProps: {};
    private _selectComponentProps: SelectProps = GenericBuilder.of<SelectProps>().build();
    private _formField:FormField<any>;
    private _formManager:FormManager;
    private _filterStateName:string;
    private _parentComponent:React.Component;
    private _enableSelectAll:boolean = false;
    private _filter:(item:any)=>boolean;
    private _options:Array<string | number>;
    private _inputLabel:string;

    public formManager(formManager:FormManager) {
        this._formManager = formManager;
        return this;
    }

    public enableFilter(filterStateName:string, parentComponent:React.Component) {
        this._filterStateName = filterStateName;
        this._parentComponent = parentComponent;
        return this;
    }

    public enableSelectAll(enableSelectAll?:boolean) {
        if(enableSelectAll === false) {
            this._enableSelectAll = enableSelectAll;
        } else {
            this._enableSelectAll = true;
        }
        return this;
    }

    public filterFunction(filter:(item:any)=>boolean) {
        this._filter = filter;
        return this;
    }

    public options(options:Array<string | number>) {
        this._options = options;
        return this;
    }

    public inputLabel(inputLabel:string) {
        this._inputLabel = inputLabel;
        return this;
    }

    public selectComponentCustomProps(customProps: {}) {
        this._selectComponentCustomProps = customProps;
        return this;
    }

    public formField(formField:FormField<any>) {
        this._formField = formField;
        return this;
    }

    public selectComponentProps(config:(config: GenericConfig<SelectProps>) => GenericConfig<SelectProps>) {
        this._selectComponentProps = GenericBuilder.buildFromConfig(config);
        return this;
    }

    public build():SelectFieldConfigData {
        return GenericBuilder.of<SelectFieldConfigData>()
            .customProps(this._selectComponentCustomProps)
            .selectComponentProps(this._selectComponentProps)
            .formField(this._formField)
            .formManager(this._formManager)
            .filterStateName(this._filterStateName)
            .parentComponent(this._parentComponent)
            .enableSelectAll(this._enableSelectAll)
            .filter(this._filter)
            .options(this._options)
            .inputLabel(this._inputLabel)
            .build();
    }
}

