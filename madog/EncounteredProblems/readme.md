## Table of Contents
[1. EncounteredProblems](#encounteredproblems)<br>
# EncounteredProblems

* **SelectAll option in forms causes the validations errors to disappear**<br>
Reason is that we use React's `forceUpdate` which resets the `touched` flags. We would need to copy the state of formProps (which holds all info, like meta info etc) into FormManager and preserve the touched object. So we can replace it in formProps after the form has rerendered. This way we could update our formFields with values and bring the form meta into the state before we rerendered the component. ANOTHER SOLUTION: Final Form doesn't register changes in MUI's SelectField and the selectAll/deselectAll function. We could notify Final Form that changes have occured via mutators. But this wouldn't solve the rerender problem. Probably we should simply use `Redux-Form`.
* **Unique keys for arrays of React elements**<br>
Use `Id.random()`. There was a problem in forms where this caused the component to not react. Using `Id.random.bind(this)` passes the function itself. Not a generated key. Better not use the `index parameter` from the `map` function, because [it's an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318). 
* **Play refuses to use external font libraries like Roboto Font for Material UI, because of CSP**<br>
Error-message: `Refused to apply inline style because it violates the following Content Security Policy directive: "default-src 'self'"`. "In order to use CSP with Material-UI (and JSS), you need to use a nonce.", but  "Banning inline script is the biggest security win CSP provides, and banning inline style likewise hardens your application". Nice... See [HomeController.java](/madog/app/controllers/HomeController.java) how we implemented it. Notice that we also added `fonts.gstatic.com` and `fonts.googleapis.com` to the CSP header. We added the nonce via `<meta property="csp-nonce" content="@{nonce}" />` in `index.scala.html`. Add `play.filters.enabled += "play.filters.headers.SecurityHeadersFilter"` and set `play.filters.headers.allowActionSpecificHeaders=true` in `application.conf`.
* **Weird borders around form elements**<br>
Add `outline: 'none'` to their style property.
* **CSS in Production is mangled**<br>
No idea how to solve this. Use normalize.css, class-loader, style-loader? Doesn't matter for Admin Dashboards. We simply use Dev and gzip. Maybe it's the way we use CSS? Or withStyles? Maybe CSSinJS needs some additional libraries?
* **POST requests respond with 403 forbidden**<br>
We need to use `CSRF tokens`. Or we simply use `play.filters.disabled += play.filters.csrf.CSRFFilter` in `application.conf`, because we use the app only internally.
* **IntelliJ does too much 'indexing'**<br>
Exclude `app.js` & `app.map.js` in /public in Project Settings. These files simply get too large and are indexed after every transpiling, which is an expensive operation.
* **SCSS doesn't compile**<br>
Add `addSbtPlugin("org.irundaia.sbt" % "sbt-sassify" % "1.4.11")` to `/project/plugins.sbt`


