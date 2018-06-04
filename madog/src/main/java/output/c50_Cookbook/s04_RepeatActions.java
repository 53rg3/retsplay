package output.c50_Cookbook;

import madog.core.Output;
import madog.core.Print;
import madog.core.Ref;
import madog.markdown.Icon;


public class s04_RepeatActions extends Output {

    @Override
    public void addMarkDownAsCode() {

        Print.h2("Repeat Actions");

        Print.wrapped("Use `setInterval` somewhere and cancel the interval with `clearInterval`");

        Print.codeBlock("" +
                "private interval = setInterval(()=>console.log(\"interval\"), 1000);\n" +
                "//...\n" +
                "componentWillUnmount() {\n" +
                "     clearInterval(this.interval);\n" +
                "}\n");

        Print.wrapped(Icon.BANG + " IntelliJ adds `import {clearInterval}from \"timers\";` automatically. " +
                "You need to delete this for whatever reason.");
    }

}
