package output.c02_EncounteredProblems;

import madog.core.Output;
import madog.core.Print;
import madog.core.Ref;
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

        list.entry("Unique keys for arrays of React elements", "" +
                "Use `Id.random()`. There was a problem in forms where this caused the component to not react. Using " +
                "`Id.random.bind(this)` passes the function itself. Not a generated key. Better not use the `index parameter` " +
                "from the `map` function, because "+
                Ref.externalURL("https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318", "it's an anti-pattern")+". ");

        list.entry("Play refuses to use external font libraries like Roboto Font for Material UI, because of CSP", "" +
                "Error-message: Refused to apply inline style because it violates the following Content Security Policy directive: \"default-src 'self'\". " +
                "\"In order to use CSP with Material-UI (and JSS), you need to use a nonce.\", but  \"Banning inline script " +
                "is the biggest security win CSP provides, and banning inline style likewise hardens your application\". Nice... " +
                "See "+Ref.classFile("HomeController.java")+" how we implemented it. Notice that we also added `fonts.gstatic.com` " +
                "and `fonts.googleapis.com` to the CSP header. We added the nonce via `&lt;meta property=\"csp-nonce\" content=\"@{nonce}\" /&gt;` " +
                "in `index.scala.html`.");

        Print.wrapped(list.getAsMarkdown());

    }

}
