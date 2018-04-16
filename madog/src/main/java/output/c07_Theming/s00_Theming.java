package output.c07_Theming;

import madog.core.Output;
import madog.core.Print;
import madog.core.Ref;
import madog.markdown.List;


public class s00_Theming extends Output {

    @Override
    public void addMarkDownAsCode() {

        Print.h1("Theming");

        List list = new List();
        list.entry("Using IntelliJ import helper functionality (ALT+Enter) is risky. " +
                "See "+ Ref.externalURL("https://stackoverflow.com/q/49408778/4179212", "Benchmark")+". " +
                "Tree shaking doesn't seem to work.");
        list.entry("We can override Material UI Next CSS in the theme, see "+
                Ref.externalURL("https://stackoverflow.com/a/48962739/4179212"));
        list.entry("The theme colors can be edited in "+Ref.internalPath("/es/src/modules/layout/css/MUI.tsx", "MUI.tsx")+". " +
                "You can replace the whole color scheme by adding a new one in the `themes` object and changing the exported `theme` " +
                "constant to it.");
        list.entry(Ref.internalPath("/es/src/modules/layout/css/MUI.tsx", "MUI.tsx")+ " also contains inline styles and classes for the " +
                "general layout.");
        Print.wrapped(list.getAsMarkdown());


        Print.h2("Removing Material UI");
        List muiRemoval = new List();
        muiRemoval.entry("Yeah... just don't. It runs through EACH component in "+Ref.internalPath("/es/src/modules")+". " +
                "Delete all JSX from component, `.render.tsx` and `.logic.tsx` files. " +
                "Delete `MuiThemeProvider` in "+Ref.internalPath("/es/src/app/AppRoot.tsx", "AppRoot")+". Delete " +
                "`CssBaseline` & `LayoutRoot` from "+Ref.internalPath("/es/src/app/Router.tsx", "Router.tsx")+". " +
                "Then run `npm remove --save material-ui-next`. Also delete the &lt;link rel=\"stylesheet\"&gt; in `index.scala.html`.");
        Print.wrapped(muiRemoval.getAsMarkdown());

    }

}
