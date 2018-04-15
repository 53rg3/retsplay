package madog.core;

import madog.markdown.Icon;
import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class IconTest {

    @Test
    public void assertCorrectValues() {
        assertEquals(":mag_right: ", Icon.MAG_GLASS);
    }

}
