package output.c05_Forms;

import madog.core.Output;
import madog.core.Print;
import madog.core.Ref;


public class s00_Forms extends Output {

    @Override
    public void addMarkDownAsCode() {

        Print.h1("Forms");

        Print.wrapped("FormManager and the form definition");

        Print.wrapped("Forms need an instance of `FormManager` (provides a `validate` method and `getValues` method for " +
                "initialValues). To instantiate it you need an object with the type signature `{[key:string]: FormField<any>}` " +
                "which provides the form definition. `FormField` is a builder which contains the type of the field " +
                "(e.g. String, Number, Array) and validations. See "+
                Ref.externalURL("https://github.com/53rg3/retsplay/blob/master/es/src/modules/formexample/FormExample.formFields.tsx", "example")+". " +
                "" +
                "For a complete form example see "+
                Ref.externalURL("https://github.com/53rg3/retsplay/blob/master/es/src/modules/formexample/FormExample.tsx", "FormExample")+". " +
                "Notice the props on `<Form>` for `onSubmit`, `validate`, `initialValues`. Also notice that we provide `formProps.handleSubmit` " +
                "again to the actual HTML `<form>` element.");

    }

}
