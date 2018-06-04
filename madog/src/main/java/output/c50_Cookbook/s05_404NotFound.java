package output.c50_Cookbook;

import madog.core.Output;
import madog.core.Print;
import madog.markdown.Icon;


public class s05_404NotFound extends Output {

    @Override
    public void addMarkDownAsCode() {

        Print.h2("404 - Not Found Page");

        Print.wrapped("In Play routes, place as **LAST** route:");
        Print.codeBlock("" +
                "GET /*path                                  controllers.PNA.unknownRoute(path) " +
                "");

        Print.wrapped("In a controller:");
        Print.codeBlock("" +
                "public Result unknownRoute(String path) {\n" +
                "     return notFound(\"Couldn't find route\"); \n" +
                "}" +
                "");

        Print.wrapped("In React Router add a route to desired 404 component:");
        Print.codeBlock("" +
                "<Route component={NotFound.component}/>" +
                "");

        Print.wrapped("Add a component like:");
        Print.codeBlock("" +
                "class NotFound extends React.Component<NoProps, NoState> {\n" +
                "    render() {\n" +
                "        return (\n" +
                "            <div>404 - Route not found</div>\n" +
                "        );\n" +
                "    }\n" +
                "}" +
                "");

    }

}
