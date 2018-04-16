package output.c08_Helpers;

import madog.core.Output;
import madog.core.Print;
import madog.core.Ref;
import madog.markdown.List;


public class s00_Helpers extends Output {

    @Override
    public void addMarkDownAsCode() {

        Print.h1("Helpers");

        Print.wrapped(Ref.internalPath("/es/src/lib/helpers", "Helpers") + " offers a bunch of helper classes for all " +
                "sorts of situations.");
        List list = new List();
        list.entry("Assets.tsx", "" +
                "Easy access to static assets in `/public` like images, etc.");
        list.entry("Checks.tsx", "" +
                "Null checks, type checks, etc");
        list.entry("Decorator.tsx", "" +
                "A builder for component decorators for Redux, Router & Material UI.");
        list.entry("GenericBuilder.tsx", "" +
                "Build objects from interfaces via Reflection.");
        list.entry("Html.tsx", "" +
                "Standard HTML component which are often used.");
        list.entry("Id.tsx", "" +
                "Random IDs for key properties for React child components.");
        list.entry("NoPropsNoState.tsx", "" +
                "Empty Props & State.");
        list.entry("ResponseRenderer.tsx", "" +
                "Builder for HTTP responses to conveniently render JSX. See "+
                Ref.externalURL("https://github.com/53rg3/retsplay/blob/master/es/src/modules/blog/showAll/ShowAll.logic.tsx#L16", "example")+". " +
                "So we don't need to use if-else or switch statements. We simply pass the HttpResponse object to the `.form()` " +
                "and it will render the JSX according to the current stage of the HTTP request (i.e. INITIAL, LOADING, SUCCESS & ERROR).");
        list.entry("Toggle.tsx", "" +
                "Methods to toggle a boolean field in the state of an component.");
        Print.wrapped(list.getAsMarkdown());

    }

}
