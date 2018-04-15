package output;

import madog.core.Output;
import madog.core.Print;


public class c00_Index extends Output {

    @Override
    public void addMarkDownAsCode() {
        Print.accessPrinter().displayCompleteTableOfContentOfAllPagesOnThisPage(true);
        Print.wrapped(" ");
    }

}
