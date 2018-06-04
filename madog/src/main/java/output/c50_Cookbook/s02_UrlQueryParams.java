package output.c50_Cookbook;

import madog.core.Output;
import madog.core.Print;
import madog.core.Ref;


public class s02_UrlQueryParams extends Output {

    @Override
    public void addMarkDownAsCode() {

        Print.h2("URL Query Parameters");

        Print.wrapped("Do `npm install query-string`. The URL parameters can be found in React Router connected component via:");

        Print.codeBlock("" +
                "class Props {\n" +
                "     location:Location\n" +
                "}" +
                "");

        Print.wrapped("See "+Ref.externalURL("https://www.npmjs.com/package/query-string") + " for usage.");
    }

}
