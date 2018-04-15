package output.c06_RxJS;

import madog.core.Output;
import madog.core.Print;
import madog.markdown.List;


public class s00_RxJS extends Output {

    @Override
    public void addMarkDownAsCode() {

        Print.h1("RxJS");

        List list = new List();
        list.entry("Map functions", "" +
                "`.mapTo(obj)` -> Map emissions to constant value\n" +
                "`.map(fn)` -> Apply projection with each value from source\n");
        

        Print.wrapped(list.getAsMarkdown());

    }

}
