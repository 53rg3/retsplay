import {TextFieldProps} from "material-ui-next/es/TextField/TextField";
import {FieldRenderProps} from "react-final-form";
import {GenericConfig} from "../../helpers/GenericBuilder";




export class TextFieldConfigData {
    props: FieldRenderProps;
    customProps: {};
    jsx: (cfg: GenericConfig<TextFieldProps>) => GenericConfig<TextFieldProps>;

    constructor(props: FieldRenderProps, customProps: {}, jsx: (cfg: GenericConfig<TextFieldProps>) => GenericConfig<TextFieldProps>) {
        this.props = props;
        this.customProps = customProps;
        this.jsx = jsx;
    }
}

export class TextFieldConfig {

    private _props: FieldRenderProps;
    private _customProps: {};
    private _jsx: (cfg: GenericConfig<TextFieldProps>) => GenericConfig<TextFieldProps>;

    public fieldProps(props: FieldRenderProps) {
        this._props = props;
        return this;
    }

    public customProps(customProps: {}) {
        this._customProps = customProps;
        return this;
    }

    public field(config:(config: GenericConfig<TextFieldProps>) => GenericConfig<TextFieldProps>) {
        this._jsx = config;
        return this;
    }

    public build():TextFieldConfigData {
        return new TextFieldConfigData(this._props, this._customProps, this._jsx);;
    }
}

