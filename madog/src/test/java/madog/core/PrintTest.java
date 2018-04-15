package madog.core;

import madog.core.Char;
import madog.core.Page;
import madog.core.Page.PageType;
import madog.core.Printer.Depth;
import org.junit.Test;

import java.util.regex.Matcher;

import static junit.framework.TestCase.assertEquals;

public class PrintTest {

    @Test
    public void characterTest() {
        assertEquals("###", Char.get(3, "#"));
        assertEquals("##", Char.get(2, "#"));
        assertEquals("#", Char.get(1, "#"));
        assertEquals("&nbsp;&nbsp;&nbsp;", Char.get(3, "&nbsp;"));
        assertEquals("\n\n", Char.get(2, "\n"));
    }




    @Test
    public void tocNumbering() {
        final Page page = new Page(PageType.STANDARD, null);
        assertEquals("1. ", page.getNextNumbering(Depth.ONE));
        assertEquals("1.1 ", page.getNextNumbering(Depth.TWO));
        assertEquals("1.2 ", page.getNextNumbering(Depth.TWO));
        assertEquals("1.2.1 ", page.getNextNumbering(Depth.THREE));
        assertEquals("1.2.2 ", page.getNextNumbering(Depth.THREE));
        assertEquals("1.3 ", page.getNextNumbering(Depth.TWO));
        assertEquals("1.3.1 ", page.getNextNumbering(Depth.THREE));
        assertEquals("2. ", page.getNextNumbering(Depth.ONE));
        assertEquals("2.1 ", page.getNextNumbering(Depth.TWO));
        assertEquals("2.2 ", page.getNextNumbering(Depth.TWO));
        assertEquals("2.2.1 ", page.getNextNumbering(Depth.THREE));
        assertEquals("2.2.2 ", page.getNextNumbering(Depth.THREE));
        assertEquals("2.3 ", page.getNextNumbering(Depth.TWO));
        assertEquals("2.3.1 ", page.getNextNumbering(Depth.THREE));
    }

    @Test
    public void numberingPattern() {
        final Matcher matcher = Page.numberingPattern.matcher("[1. Madog](#madog)<br>");
        matcher.find();
        assertEquals(null, matcher.group(2));
        assertEquals(null, matcher.group(3));
    }



}
