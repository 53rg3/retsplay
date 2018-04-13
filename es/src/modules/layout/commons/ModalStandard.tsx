import * as React from "react";
import Modal from "material-ui-next/es/Modal";
import {MUI} from "../css/MUI";
import {NoState} from "../../../lib/helpers/NoPropsNoState";
import {decorate} from "../../../lib/helpers/Decorator";


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
    .withStyles(MUI.classes.modalStyle));
