package output.c01_Conventions;

import madog.core.Output;
import madog.core.Print;
import madog.core.Ref;
import madog.markdown.List;
import output.c00_Overview.s00_Overview;


public class s00_Conventions extends Output {

    @Override
    public void addMarkDownAsCode() {

        Print.h1("Conventions");

        List list = new List();
        list.entry("Structure", "" +
                "Structure the project 'module-oriented'. Modules as in 'containers for components' which contain " +
                "everything concerning the components, i.e. EARs, logic, css, etc. Modules can contain multiple " +
                "components. Each should have its own folder and should be self-contained." +
                "Everything used by multiple components should go into a `/commons` folder. Helpers into `/lib/helpers`. " +
                "See overview for more info: "+Ref.outputClass(s00_Overview.class, "Overview")+".");
        list.entry("File Naming", "" +
                "Files in module folders should be contain the module name and the aspect they provide, e.g.<br/>" +
                "`PostView.tsx` -> the component<br/>" +
                "`PostView.logic.tsx` -> methods of this component.<br/>" +
                "`PostView.formFields.tsx` -> form definition<br/>" +
                "`PostView.css.tsx` -> CSS<br/>" +
                "If there are overlaps, e.g. multiple EARs, then put these into separate folders.");
        list.entry("No logic in components. Write it into `YourModule.logic.tsx`. Otherwise components become too big.");
        list.entry("SCSS goes into "+Ref.internalPath("/app/assets")+". These will be automatically compiled.");
        list.entry("Redux state reducer methods belong in the model class, not into EARs.");
        Print.wrapped(list.getAsMarkdown());

    }

}
