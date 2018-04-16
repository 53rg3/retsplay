## Table of Contents
[1. EARs](#ears)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.1 How to create EARs](#how-to-create-ears)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.1.1 Generic EAR](#generic-ear)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.1.2 Verbose HTTP request EAR](#verbose-http-request-ear)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.1.3 Concise HTTP request EAR](#concise-http-request-ear)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.1.4 More Examples](#more-examples)<br>
# EARs

EARs combine Epics, Action creators and Reducers.


* An EAR must extend `Reducer<TypeForReduxState>`, see [example](https://github.com/53rg3/retsplay/blob/master/es/src/modules/blog/editor/ears/UpdatePost.ear.tsx#L13). 
* EARs must be Singletons. Use IntelliJ's Live Templates.
* The constructor must call `super` with initialState and reduxStateKey. See [example](https://github.com/53rg3/retsplay/blob/master/es/src/modules/blog/editor/ears/UpdatePost.ear.tsx#L23). 
* EARs can expose multiple 'dispatchable actions', each instantiated as `new EAR()`. Each of these fields comes with a dispatch method which dispatches the configured action to Redux. For example this [EAR instance](https://github.com/53rg3/retsplay/blob/master/es/src/modules/blog/singlePost/ears/GetPost.ear.tsx) provides the fields `request` and `invalidate`. First one dispatches `Act.blog.getPost.SEND` and the latter one dispatches `Act.blog.getPost.INVALIDATE`. 
* Each EAR is responsible for **one Redux state key**, i.e. the combined reducers registered in Redux will only affect the key provided in the `super()` call in the constructor.
* Epics & Reducers are registered automatically in the Redux store while class instantiation. Therefore, `YourEar.INST` must be called in module. Could probably also be called in Redux.tsx, but in the module we can use it to create handy shorter references for the use in the component.
* The expected ResponseType must be correctly stated in the request. Otherwise RxJS sets the response to null.
* `setEpic` must be used separately, because IntelliJ can't handle it inside the builder. RxJS has >3k files...
* If the EAR is used for a HTTP request, then we can use the concise form, see [example](https://github.com/53rg3/retsplay/blob/master/es/src/modules/blog/editor/ears/CreateNew.ear.tsx). Caution: the `.actionTypes()` setting must comply to the `HttpRequestActionTypes` interface. Use the helper `FSAction.ajaxTypes()` to create these in `ActionTypes.tsx`
* If data from the payload of the action is needed in the epic (e.g. to call a specific URL based on the data) then you need to use the verbose form, see [example](https://github.com/53rg3/retsplay/blob/master/es/src/modules/blog/editor/ears/UpdatePost.ear.tsx#L31x). 


## How to create EARs

General procedure: Create the entries in `Schema.tsx` (state key ids for Redux), then add the corresponding `ActionTypes.tsx`, if needed add URLs to `Api.tsx`. With these you can finally implement the EAR.

### Generic EAR

EARs can implement any logic you would create manually with `Redux` and `redux-observable`. See [example](https://github.com/53rg3/retsplay/blob/master/es/src/modules/counter/ears/Counter.ear.tsx). 

### Verbose HTTP request EAR

If you need some specific logic to make a HTTP request. See [example](https://github.com/53rg3/retsplay/blob/master/es/src/modules/blog/editor/ears/UpdatePost.ear.tsx). 

### Concise HTTP request EAR

If you just a standard HTTP request to a fixed URL. See [example](https://github.com/53rg3/retsplay/blob/master/es/src/modules/blog/editor/ears/CreateNew.ear.tsx). 

### More Examples

More examples can be found in [AjaxRequests](/es/src/modules/ajaxexample) and [Blog](/es/src/modules/blog)

