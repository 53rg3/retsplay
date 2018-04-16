## Table of Contents
[1. Conventions](#conventions)<br>
# Conventions

* **Structure**<br>
Structure the project 'module-oriented'. Modules as in 'containers for components' which contain everything concerning the components, i.e. EARs, logic, css, etc. Modules can contain multiple components. Each should have its own folder and should be self-contained.Everything used by multiple components should go into a `/commons` folder. Helpers into `/lib/helpers`. See overview for more info: [Overview](/madog/Overview/readme.md).
* **File Naming**<br>
Files in module folders should be contain the module name and the aspect they provide, e.g.<br/>`PostView.tsx` -> the component<br/>`PostView.logic.tsx` -> methods of this component.<br/>`PostView.formFields.tsx` -> form definition<br/>`PostView.css.tsx` -> CSS<br/>If there are overlaps, e.g. multiple EARs, then put these into separate folders.
* No logic in components. Write it into `YourModule.logic.tsx`. Otherwise components become too big.
* SCSS goes into [/app/assets](/app/assets). These will be automatically compiled.
* Redux state reducer methods belong in the model class, not into EARs.


