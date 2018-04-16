package output.c05_Forms;

import madog.core.Output;
import madog.core.Print;
import madog.core.Ref;


public class s00_Forms extends Output {

    @Override
    public void addMarkDownAsCode() {

        Print.h1("Forms");

        Print.h2("Form definition & FormManager");
        Print.wrapped("Forms need an instance of `FormManager` (provides a `validate` method and `getValues` method for " +
                "`initialValues`). To instantiate it you need an object with the type signature `{[key:string]: FormField<any>}` " +
                "which provides the form definition. `FormField` is a builder which contains the type of the field " +
                "(e.g. String, Number, Array) and validations. See "+
                Ref.externalURL("https://github.com/53rg3/retsplay/blob/master/es/src/modules/formexample/FormExample.formFields.tsx", "example")+". " +
                "" +
                "For a complete form example see "+
                Ref.externalURL("https://github.com/53rg3/retsplay/blob/master/es/src/modules/formexample/FormExample.tsx", "FormExample")+". " +
                "Notice the props on `<Form>` for `onSubmit`, `validate`, `initialValues`. Also notice that we provide `formProps.handleSubmit` " +
                "again to the actual HTML `<form>` element.");

        Print.h2("FormFactory");
        Print.wrapped("FormFactory offers builders for Material UI components (`TextField`, `Select`, `Switch`, `Checkbox`, " +
                "`Radiobutton`). The APIs are so fucked up that we discuss them further. Simply copy & paste the " +
                "shit from "+Ref.externalURL("https://github.com/53rg3/retsplay/blob/master/es/src/modules/formexample/FormExample.tsx", "FormExample")+". " +
                "and pray that it works." +
                "`FormFactory.textField()` is even more fucked up. `.props()` takes the props from from Final Form. `.customProps()` is for " +
                "css style and `field` exposes the properties of Material UI's `TextField`, which has an even more fucked up API. " +
                "Forms are the 7th circle of hell.");

        Print.h2("FieldMeta");
        Print.wrapped("`FieldMeta` provides different helper methods like types for the HTML `input` element, `isTouchedAndInvalid` & " +
                "`getErrorMessage` to retrieve meta data from Final Form's `props`, `selectAll` & `deselectAll` for Array fields, etc. " +
                "See "+Ref.internalPath("/es/src/lib/form/FieldMeta.tsx", "FieldMeta.tsx")+". Yes, that's fucked up too.");

        Print.h2("Validation helpers");
        Print.wrapped("`Value` provides helper methods for validations like `.isRequired()`, `.isGreaterThan()`, different Regex pattern, etc. " +
                "Most common validations are covered. Check "+Ref.internalPath("/es/src/lib/form/Value.tsx", "Value.tsx")+" " +
                "for more info.");
    }

}
