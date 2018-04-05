/**********************************************************/
// Direct CSS (for inline style)
/**********************************************************/

import {theme} from "./Theme";

export const formCss = {
    radioButtonHelperText: {
        marginTop: "-6px"
    },
    functionLink: {
        marginTop: "3px",
        fontColor: "#000",
        fontSize: "10px",
        textDecoration: "underline",
        cursor: "pointer"
    }
};

export const modalStyleInline = {
    style: {
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
    }
};


/**********************************************************/
// CssInJs (for classes)
/**********************************************************/

export const noStyles = () => ({});

export const layoutRoot = (theme: any) => ({
    root: {
        flexGrow: 1,
        minHeight: "100vh",
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    }
});

export const paperStyle = () => ({
    body: {
        padding: "16px",
        marginBottom: "5px"
    },
    heading: {
        color: theme.palette.primary.main,
        fontSize: "24px",
        fontWeight: "bold",
        padding: "5px 16px",
        marginBottom: "4px"
    }
});

export const modalStyle = (theme: any) => ({
    standard: {
        position: 'absolute',
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});
