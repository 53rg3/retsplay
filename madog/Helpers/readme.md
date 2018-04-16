## Table of Contents
[1. Helpers](#helpers)<br>
# Helpers

[Helpers](/es/src/lib/helpers) offers a bunch of helper classes for all sorts of situations.


* **Assets.tsx**<br>
Easy access to static assets in `/public` like images, etc.
* **Checks.tsx**<br>
Null checks, type checks, etc
* **Decorator.tsx**<br>
A builder for component decorators for Redux, Router & Material UI.
* **GenericBuilder.tsx**<br>
Build objects from interfaces via Reflection.
* **Html.tsx**<br>
Standard HTML component which are often used.
* **Id.tsx**<br>
Random IDs for key properties for React child components.
* **NoPropsNoState.tsx**<br>
Empty Props & State.
* **ResponseRenderer.tsx**<br>
Builder for HTTP responses to conveniently render JSX. See [example](https://github.com/53rg3/retsplay/blob/master/es/src/modules/blog/showAll/ShowAll.logic.tsx#L16). So we don't need to use if-else or switch statements. We simply pass the HttpResponse object to the `.form()` and it will render the JSX according to the current stage of the HTTP request (i.e. INITIAL, LOADING, SUCCESS & ERROR).
* **Toggle.tsx**<br>
Methods to toggle a boolean field in the state of an component.


