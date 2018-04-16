## Table of Contents
[1. Forms](#forms)<br>
# Forms

FormManager and the form definition


Forms need an instance of `FormManager` (provides a `validate` method and `getValues` method for initialValues). To instantiate it you need an object with the type signature `{[key:string]: FormField<any>}` which provides the form definition. `FormField` is a builder which contains the type of the field (e.g. String, Number, Array) and validations. See [example](https://github.com/53rg3/retsplay/blob/master/es/src/modules/formexample/FormExample.formFields.tsx). For a complete form example see [FormExample](https://github.com/53rg3/retsplay/blob/master/es/src/modules/formexample/FormExample.tsx). Notice the props on `<Form>` for `onSubmit`, `validate`, `initialValues`. Also notice that we provide `formProps.handleSubmit` again to the actual HTML `<form>` element.

