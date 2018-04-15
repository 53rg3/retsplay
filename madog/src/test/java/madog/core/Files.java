package madog.core;


import org.junit.Ignore;
import org.junit.Test;

import java.io.IOException;
import java.nio.file.Paths;

public class Files {

    @Test
    @Ignore
    public void test() {
        try {
            java.nio.file.Files.createDirectories(Paths.get("./Referencing/blanko"));
        } catch (final IOException e) {
            e.printStackTrace();
        }
    }

}
