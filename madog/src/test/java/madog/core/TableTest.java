package madog.core;

import madog.markdown.Table;
import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class TableTest {

    @Test
    public void getAsMarkdown() throws Exception {
        final Table table = new Table();
        table.header("Col1", "Col2", "Col3");
        table.row("Val1", "Val2", "Val3");
        table.row("Val4","Val5","Val6");
        table.row("Val7","Val8","Val9");
        final String markdown = table.getAsMarkdown();
        assertEquals(true, markdown.contains("| Col1 | Col2 | Col3 |"));
        assertEquals(true, markdown.contains("| --- | --- | --- |"));
        assertEquals(true, markdown.contains("| Val1 | Val2 | Val3 |"));
        assertEquals(true, markdown.contains("| Val4 | Val5 | Val6 |"));
        assertEquals(true, markdown.contains("| Val7 | Val8 | Val9 |"));
    }

    @Test(expected = IllegalStateException.class)
    public void unequalAmountOfRows() throws Exception {
        final Table table = new Table();
        table.header("Col1", "Col2", "Col3");
        table.row("Val1", "Val2", "Val3", "asdf");
    }

}
