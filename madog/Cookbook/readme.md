## Table of Contents
[1. Cookbooks](#cookbooks)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.1 Copy retsplay into other project](#copy-retsplay-into-other-project)<br>
# Cookbooks
## Copy retsplay into other project

1. Copy `/es` folder
2. Copy and replace `/app/controllers/HomeController.java`
3. Copy and replace `/app/views/index.scala.html`
4. Delete `/app/views/main.scala.html`
5. Copy and replace `/conf/routes`
6. Copy and replace `/conf/application.conf`
7. Run `npm install` in `/es`
8. Delete `/ajaxexample`, `/blog`, `/counter`, `/formexample` in `/es/src/modules` 
9. Delete their entries in `ActionTypes.tsx`, `Api.tsx`, `Schema.tsx` & `Router.tsx` (also in Routes object) in `/es/src/app` 
10. Delete their sidebar links in `/es/src/modules/layout/sidebar/Sidebar.tsx` 
11. Run `webpack --watch` and remove leftover fuckups

Start Play if IntelliJ shows linting errors. Restart IntelliJ if it complains that it doesn't recognize node_modules.

