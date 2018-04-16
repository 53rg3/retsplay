## Table of Contents
[1. Theming](#theming)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.1 Removing Material UI](#removing-material-ui)<br>
# Theming

* Using IntelliJ import helper functionality (ALT+Enter) is risky. See [Benchmark](https://stackoverflow.com/q/49408778/4179212). Tree shaking doesn't seem to work.
* We can override Material UI Next CSS in the theme, see [https://stackoverflow.com/a/48962739/4179212](https://stackoverflow.com/a/48962739/4179212)
* The theme colors can be edited in [MUI.tsx](/es/src/modules/layout/css/MUI.tsx). You can replace the whole color scheme by adding a new one in the `themes` object and changing the exported `theme` constant to it.
* [MUI.tsx](/es/src/modules/layout/css/MUI.tsx) also contains inline styles and classes for the general layout.


## Removing Material UI

* Yeah... just don't. It runs though EACH component in [/es/src/modules](/es/src/modules). Probably simply delete all JSX from component, `.render.tsx` and `.logic.tsx` files. Delete `MuiThemeProvider` in [AppRoot](/es/src/app/AppRoot.tsx). Delete `CssBaseline` & `LayoutRoot` from [Router.tsx](/es/src/app/Router.tsx). Then run `npm remove --save material-ui-next`. 


