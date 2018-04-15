package output.c00_Overview;

import madog.core.Output;
import madog.core.Print;
import madog.core.Ref;


public class s01_Install extends Output {

    @Override
    public void addMarkDownAsCode() {

        Print.h2("Install");

        Print.wrapped("Run the Play server:");
        Print.codeBlock("sbt run");

        Print.wrapped("The repository comes with a prebuilt React app, see "+Ref.internalPath("/public/javascripts")+". " +
                "If you want to edit the JS files then you need install the node modules. In `/es` run `npm install`.");

    }

}
