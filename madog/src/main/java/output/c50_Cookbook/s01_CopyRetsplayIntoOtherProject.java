package output.c50_Cookbook;

import madog.core.Output;
import madog.core.Print;


public class s01_CopyRetsplayIntoOtherProject extends Output {

    @Override
    public void addMarkDownAsCode() {

        Print.h2("Copy retsplay into other project");

        Print.wrapped("" +
                "1. Copy `/es` folder\n" +
                "2. Copy and replace `/app/controllers/HomeController.java`\n" +
                "3. Copy and replace `/app/views/index.scala.html`\n" +
                "4. Delete `/app/views/main.scala.html`\n" +
                "5. Copy and replace `/conf/routes`\n" +
                "6. Copy and replace `/conf/application.conf`\n" +
                "7. Run `npm install` in `/es`\n" +
                "8. Delete `/ajaxexample`, `/blog`, `/counter`, `/formexample` in `/es/src/modules` \n" +
                "9. Delete their entries in `ActionTypes.tsx`, `Api.tsx`, `Schema.tsx` & `Router.tsx` (also in Routes object) in `/es/src/app` \n" +
                "10. Delete their sidebar links in `/es/src/modules/layout/sidebar/Sidebar.tsx` \n" +
                "11. Run `webpack --watch` and remove leftover fuckups\n" +
                "\n" +
                "Start Play if IntelliJ shows linting errors. Restart IntelliJ if it complains that it doesn't recognize node_modules." +
                "");

    }

}
