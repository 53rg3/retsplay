import * as React from "react";
import {modalStyle} from "../css/MuiComponents";
import {decorate} from "../../../helpers/ComponentDecorators";
import {NoState} from "../../../helpers/NoPropsNoState";
import Modal from "material-ui-next/es/Modal";
import Typography from "material-ui-next/es/Typography";


class Props {
    classes?: any;
    isOpen: boolean;
    onClose: () => void;
}

class ModalStandardBlank extends React.Component<Props, NoState> {

    constructor(props: Props) {
        super(props);
    }

    render(): any {
        return (
            <div>
                <Modal open={this.props.isOpen}
                       onClose={this.props.onClose}>
                    <div className={this.props.classes.standard}>
                        {this.props.children}
                    </div>
                </Modal>
            </div>
        );
    }
}

export const ModalStandard = decorate<Props>(ModalStandardBlank, c => c
    .withStyles(modalStyle));
