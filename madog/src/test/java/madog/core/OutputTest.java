package madog.core;

import org.junit.Test;

public class OutputTest {

    @Test
    public void replaceLastTest() {
        final String text = "output.a1_Config.a1_Config";
        final String regex = "a1_Config";
        final String replacement = "/readme.md";
//        System.out.println(replaceLast(text, regex, replacement));
    }

    private static String replaceLast(final String text, final String regex, final String replacement) {
        return text.replaceFirst("(?s)(.*)" + regex, "$1" + replacement);
    }

}
