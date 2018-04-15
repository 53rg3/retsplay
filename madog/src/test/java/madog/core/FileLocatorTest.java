package madog.core;

import madog.core.FileLocator;
import madog.core.FileLocator.FileType;
import madog.core.Ref;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FileLocatorTest {

    final FileLocator fileLocator = new FileLocator();

    @Test
    public void testAllTypesOfLinks() {
        assertEquals("[http://www.google.com](http://www.google.com)", Ref.externalURL("http://www.google.com"));
        assertEquals("[Google](http://www.google.com)", Ref.externalURL("http://www.google.com", "Google"));
    }

    @Test(expected = IllegalStateException.class)
    public void isFileInGitIgnore() {
        fileLocator.getPathToFile("madog.iml", FileType.FILE_IN_GIT_IGNORE);
    }

    @Test
    public void areFileTypesCorrectlyAssigned() {
        fileLocator.getPathToFile("example.jpg", FileType.IMAGE);
        fileLocator.getPathToFile("example.pdf", FileType.RESOURCE);
        fileLocator.getPathToFile("Printer.java", FileType.CLASS);
        fileLocator.getPathToFile("c00_Index.java", FileType.OUTPUT_CLASS);
    }

    @Test
    public void getPathToFile() {
        assertEquals("/src/main/java/madog/core/Printer.java", fileLocator.getPathToFile("Printer.java", FileType.CLASS));
        assertEquals("/pom.xml", fileLocator.getPathToFile("pom.xml", FileType.NOT_SUITABLE_FOR_REFERENCE));
    }

    @Test
    public void determinePathToClass() {

    }

}
