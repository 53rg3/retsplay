package output.c03_EARs;

import madog.core.Output;
import madog.core.Print;
import madog.core.Ref;
import madog.markdown.List;


public class s00_EARs extends Output {

    @Override
    public void addMarkDownAsCode() {

        Print.h1("EARs");

        Print.wrapped("EARs combine Epics, Action creators and Reducers.");

        List list = new List();

        list.entry("An EAR must extend `Reducer<TypeForReduxState>`, see "+
                Ref.externalURL("https://github.com/53rg3/retsplay/blob/master/es/src/modules/blog/editor/ears/UpdatePost.ear.tsx#L13", "example")+". ");

        list.entry("EARs must be Singletons. Use IntelliJ's Live Templates.");

        list.entry("The constructor must call `super` with initialState and reduxStateKey. See "+
                Ref.externalURL("https://github.com/53rg3/retsplay/blob/master/es/src/modules/blog/editor/ears/UpdatePost.ear.tsx#L23", "example")+". ");

        list.entry("EARs can expose multiple 'dispatchable actions', each instantiated as `new EAR()`. Each of these fields comes with a " +
                "dispatch method which dispatches the configured action to Redux. For example this "+
                Ref.externalURL("https://github.com/53rg3/retsplay/blob/master/es/src/modules/blog/singlePost/ears/GetPost.ear.tsx", "EAR instance")+ " " +
                "provides the fields `request` and `invalidate`. First one dispatches `Act.blog.getPost.SEND` and the latter one " +
                "dispatches `Act.blog.getPost.INVALIDATE`. Both can be accessed via their `.dispatch()` method. If you call `.dispatch(someValue)` then " +
                "`someValue` will be passed as `action payload` to the reducer or epics. ");

        list.entry("Each EAR is responsible for **one Redux state key**, i.e. the combined reducers registered in Redux will only affect the " +
                "key provided in the `super()` call in the constructor.");

        list.entry("Epics & Reducers are registered automatically in the Redux store while class instantiation. Therefore, " +
                "`YourEar.INST` must be called in module. Could probably also be called in Redux.tsx, but in the module " +
                "we can use it to create handy shorter references for the use in the component.");

        list.entry("The expected ResponseType must be correctly stated in the request. Otherwise RxJS sets the response to null.");

        list.entry("`setEpic` must be used separately, because IntelliJ can't handle it inside the builder. RxJS has >3k files...");

        list.entry("If the EAR is used for a HTTP request, then we can use the concise form, see "+
                Ref.externalURL("https://github.com/53rg3/retsplay/blob/master/es/src/modules/blog/editor/ears/CreateNew.ear.tsx", "example")+". " +
                "Caution: the `.actionTypes()` setting must comply to the `HttpRequestActionTypes` interface. Use the helper `FSAction.ajaxTypes()` " +
                "to create these in `ActionTypes.tsx`");

        list.entry("If data from the payload of the action is needed in the epic (e.g. to call a specific URL based on the data) " +
                "then you need to use the verbose form, see "+
                Ref.externalURL("https://github.com/53rg3/retsplay/blob/master/es/src/modules/blog/editor/ears/UpdatePost.ear.tsx#L31x", "example")+". ");

        Print.wrapped(list.getAsMarkdown());


        Print.h2("How to create EARs");
        Print.wrapped("General procedure: Create the entries in `Schema.tsx` (state key ids for Redux), then add the " +
                "corresponding `ActionTypes.tsx`, if needed add URLs to `Api.tsx`. With these you can finally implement the EAR.");

        Print.h3("Generic EAR");
        Print.wrapped("EARs can implement any logic you would create manually with `Redux` and `redux-observable`. See "+
            Ref.externalURL("https://github.com/53rg3/retsplay/blob/master/es/src/modules/counter/ears/Counter.ear.tsx", "example")+". ");

        Print.h3("Verbose HTTP request EAR");
        Print.wrapped("If you need some specific logic to make a HTTP request. See "+
                Ref.externalURL("https://github.com/53rg3/retsplay/blob/master/es/src/modules/blog/editor/ears/UpdatePost.ear.tsx", "example")+". ");

        Print.h3("Concise HTTP request EAR");
        Print.wrapped("If you just make a standard HTTP request to a fixed URL. See "+
                Ref.externalURL("https://github.com/53rg3/retsplay/blob/master/es/src/modules/blog/editor/ears/CreateNew.ear.tsx", "example")+". ");

        Print.h3("More Examples");
        Print.wrapped("More examples can be found in "+Ref.internalPath("/es/src/modules/ajaxexample", "AjaxRequests")+" and " +
                Ref.internalPath("/es/src/modules/blog", "Blog"));

        // HowTos
        // General procedure: Schema, ActionTypes, API, EAR
        // Generic EARs, https://github.com/53rg3/retsplay/blob/master/es/src/modules/counter/ears/Counter.ear.tsx
        // Verbose HTTP request EAR
        // Concise HTTP request EAR

    }

}
