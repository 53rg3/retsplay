import {NoProps} from "../../../helpers/NoPropsNoState";
import {SidebarMui} from "./materialui/SidebarMui";


const noProps:NoProps = {};
export class Theme {

    public static sidebar = new SidebarMui(noProps);

}
