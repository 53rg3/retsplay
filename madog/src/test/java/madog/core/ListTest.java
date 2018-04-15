package madog.core;

import madog.markdown.List;
import org.junit.Test;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;


public class ListTest {

    @Test
    public void testEntryBodyOnly() throws Exception {
        final List list = new List();
        list.entry("asdf");
        list.entry("qwer");
        final String result = list.getAsMarkdown();
        assertThat(result, containsString("* asdf\n"));
        assertThat(result, containsString("* qwer\n"));
    }

    @Test
    public void testNumberedList() throws Exception {
        final List list = new List();
        list.isNumberedList(true);
        list.entry("asdf");
        list.entry("qwer");
        final String result = list.getAsMarkdown();
        assertThat(result, containsString("1. asdf\n"));
        assertThat(result, containsString("2. qwer\n"));
    }

    @Test
    public void testEntry1TitleAndBody() throws Exception {
        final List list = new List();
        list.entry("asdf", "text text text");
        list.entry("qwer", "text text text");
        final String result = list.getAsMarkdown();
        assertThat(result, containsString("* **asdf**<br>\n"));
        assertThat(result, containsString("* **qwer**<br>\n"));
    }

    @Test
    public void testGetAsMarkdown() throws Exception {

    }
}
