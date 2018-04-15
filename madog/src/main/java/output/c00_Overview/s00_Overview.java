package output.c00_Overview;

import madog.core.Output;
import madog.core.Print;
import madog.core.Ref;


public class s00_Overview extends Output {

    @Override
    public void addMarkDownAsCode() {

        Print.h1("Overview");

        Print.wrapped(Ref.image("overview.png"));

    }

}
