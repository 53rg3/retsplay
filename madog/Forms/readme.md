## Table of Contents
[1. Forms](#forms)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.1 Form definition & FormManager](#form-definition--formmanager)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.2 FormFactory](#formfactory)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.3 FieldMeta](#fieldmeta)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.4 Validation helpers](#validation-helpers)<br>
# Forms
## Form definition & FormManager

Forms need an instance of `FormManager` (provides a `validate` method and `getValues` method for `initialValues`). To instantiate it you need an object with the type signature `{[key:string]: FormField<any>}` which provides the form definition. `FormField` is a builder which contains the type of the field (e.g. String, Number, Array) and validations. See [example](https://github.com/53rg3/retsplay/blob/master/es/src/modules/formexample/FormExample.formFields.tsx). For a complete form example see [FormExample](https://github.com/53rg3/retsplay/blob/master/es/src/modules/formexample/FormExample.tsx). Notice the props on `<Form>` for `onSubmit`, `validate`, `initialValues`. Also notice that we provide `formProps.handleSubmit` again to the actual HTML `<form>` element.

## FormFactory

FormFactory offers builders for Material UI components (`TextField`, `Select`, `Switch`, `Checkbox`, `Radiobutton`). The APIs are so fucked up that we discuss them further. Simply copy & paste the shit from [FormExample](https://github.com/53rg3/retsplay/blob/master/es/src/modules/formexample/FormExample.tsx). and pray that it works.`FormFactory.textField()` is even more fucked up. `.props()` takes the props from from Final Form. `.customProps()` is for css style and `field` exposes the properties of Material UI's `TextField`, which has an even more fucked up API. Forms are the 7th circle of hell.

## FieldMeta

`FieldMeta` provides different helper methods like types for the HTML `input` element, `isTouchedAndInvalid` & `getErrorMessage` to retrieve meta data from Final Form's `props`, `selectAll` & `deselectAll` for Array fields, etc. See [FieldMeta.tsx](/es/src/lib/form/FieldMeta.tsx). Yes, that's fucked up too.

## Validation helpers

`Value` provides helper methods for validations like `.isRequired()`, `.isGreaterThan()`, different Regex pattern, etc. Most common validations are covered. Check [Value.tsx](/es/src/lib/form/Value.tsx) for more info.

