package output.c99_Bookmarks;

import madog.core.Output;
import madog.core.Print;
import madog.core.Ref;
import madog.markdown.List;


public class s00_Bookmarks extends Output {

    @Override
    public void addMarkDownAsCode() {

        Print.h1("Bookmarks");

        List list = new List();
        list.entry("Icons", ""
                +Ref.externalURL("https://github.com/FortAwesome/react-fontawesome")+"<br/>"
                +Ref.externalURL("https://www.materialpalette.com/icons")+"<br/>"
        );
        list.entry("Theming", ""
                +Ref.externalURL("https://material.io/color/")+" -> cool color sets<br/>"
                +Ref.externalURL("https://cimdalli.github.io/mui-theme-generator/")+"<br/>"
        );


        Print.wrapped(list.getAsMarkdown());

    }

}
