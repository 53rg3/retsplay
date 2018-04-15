package output.c02_EncounteredProblems;

import madog.core.Output;
import madog.core.Print;
import madog.markdown.List;


public class s00_EncounteredProblems extends Output {

    @Override
    public void addMarkDownAsCode() {

        Print.h1("EncounteredProblems");

        List list = new List();
        list.entry("SelectAll option in forms causes the validations errors to disappear", "" +
                "Reason is that we use React's `forceUpdate` which resets the `touched` flags. We would need to copy " +
                "the state of formProps (which holds all info, like meta info etc) into FormManager and preserve the " +
                "touched object. So we can replace it in formProps after the form has rerendered. This way we could " +
                "update our formFields with values and bring the form meta into the state before we rerendered the " +
                "component. ANOTHER SOLUTION: Final Form doesn't register changes in MUI's SelectField and the " +
                "selectAll/deselectAll function. We could notify Final Form that changes have occured via mutators. " +
                "But this wouldn't solve the rerender problem. Probably we should simply use `Redux-Form`.");
        Print.wrapped(list.getAsMarkdown());

    }

}
