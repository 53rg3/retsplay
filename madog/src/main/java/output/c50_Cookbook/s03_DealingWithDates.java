package output.c50_Cookbook;

import madog.core.Output;
import madog.core.Print;
import madog.core.Ref;


public class s03_DealingWithDates extends Output {

    @Override
    public void addMarkDownAsCode() {

        Print.h2("Dealing With Dates");

        Print.wrapped("Do `npm install date-fns@next`. See "+Ref.externalURL("https://date-fns.org/")+". Example:");

        Print.codeBlock("" +
                "import {format, addDays, subDays, subMilliseconds, subMinutes, endOfDay} from 'date-fns'" +
                "// ..." +
                "// Add 1 day to today" +
                "format(addDays(new Date(), 1), \"YYYY-MM-dd\");" +
                "// Subtract 7 days to today" +
                "format(subDays(new Date(), 7), \"YYYY-MM-dd\");");
    }

}
