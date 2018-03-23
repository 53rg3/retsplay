import createMuiTheme from 'material-ui-next/styles/createMuiTheme';

export const MuiCustomTheme = createMuiTheme({
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
});
