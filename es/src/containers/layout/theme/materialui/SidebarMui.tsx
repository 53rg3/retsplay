import {Link} from "react-router-dom";
import * as React from "react";




const styles = {
    link: {
        width: "100%",
        marginTop: "2px",
        backgroundColor: "#54585e"
    },
    linkButtonStyle: {
        backgroundColor: "rgb(111, 113, 117)"
    },

    gap: {
        marginTop:"13px"
    }
};
export class SidebarMui extends React.Component {

    public gap() {
        return (
            <div style={styles.gap}></div>
        );
    }
    // <RaisedButton primary={true} label={linkText} buttonStyle={styles.linkButtonStyle} style={styles.link}/>
    public link(route: string, linkText: string) {
        return (
            <Link to={route}>
                {linkText}
            </Link>
        );
    };


}
