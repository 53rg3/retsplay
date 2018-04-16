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
        list.entry("Theme Colors", "" +
                "The theme colors can be edited in "+Ref.internalPath("/es/src/modules/layout/css/MUI.tsx", "MUI.tsx")+". " +
                "You can replace the whole color scheme by adding a new one in the `themes` object and changing the exported `theme` " +
                "constant to it.");
        Print.wrapped(list.getAsMarkdown());

    }

}
