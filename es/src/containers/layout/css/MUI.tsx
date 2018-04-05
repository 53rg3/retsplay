
export module MUI {

    export const inline = {

        form: {
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
        },

        modalStyleInline: {
            style: {
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
            }
        }
    };



    export const classes = {

        noStyles: () => ({}),

        layoutRoot: (theme: any) => ({
            root: {
                flexGrow: 1,
                minHeight: "100vh",
                zIndex: 1,
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
            }
        }),

        mainContent: () => ({
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
        }),

        modalStyle: (theme: any) => ({
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
        })
    };



    const themes = {
        darkBlueYellow: {
            palette: {
                primary: {
                    main: "#37474f",
                    light: "#62727b",
                    dark: "#102027",
                    contrastText: "#ffffff"
                },
                secondary: {
                    main: "#ffa000",
                    light: "#ffd149",
                    dark: "#c67100",
                    contrastText: "#000000"
                }
            }
        }
    };
    export const theme = themes.darkBlueYellow;

}
