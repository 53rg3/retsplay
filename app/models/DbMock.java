package models;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DbMock {

    public static Map<String,BlogPost> store = new HashMap<>();

    static {
        String title = "Integralrechnung";
        String post = "Die Integralrechnung ist neben der Differentialrechnung der wichtigste Zweig der mathematischen Disziplin Analysis. Sie ist aus dem Problem der Flächen- und Volumenberechnung entstanden. Das Integral ist ein Oberbegriff für das unbestimmte und das bestimmte Integral. Die Berechnung von Integralen heißt Integration.\n" +
                "\n" +
                "Das bestimmte Integral einer Funktion ordnet dieser eine Zahl zu. Bildet man das bestimmte Integral einer reellen Funktion in einer Variablen, so lässt sich das Ergebnis im zweidimensionalen Koordinatensystem als Flächeninhalt der Fläche, die zwischen dem Graphen der Funktion, der x {\\displaystyle x} x-Achse sowie den begrenzenden Parallelen zur y {\\displaystyle y} y-Achse liegt, deuten. Hierbei zählen Flächenstücke unterhalb der x {\\displaystyle x} x-Achse negativ. Man spricht vom orientierten Flächeninhalt. Diese Konvention wird gewählt, damit das bestimmte Integral eine lineare Abbildung ist, was sowohl für theoretische Überlegungen als auch für konkrete Berechnungen eine zentrale Eigenschaft des Integralbegriffs darstellt. Auch wird so sichergestellt, dass der sogenannte Hauptsatz der Differential- und Integralrechnung gilt.";
        String tags = "mathe, integral, volumenberechnung, flächenberechnung, unterstufe";
        BlogPost blogPost = new BlogPost("1001", title, post, tags);
        store.put(blogPost.getId(), blogPost);

        title = "Differentialrechnung";
        post = "Die Differential- bzw. Differenzialrechnung ist ein wesentlicher Bestandteil der Analysis und damit ein Gebiet der Mathematik. Sie ist eng verwandt mit der Integralrechnung, mit der sie gemeinsam unter der Bezeichnung Infinitesimalrechnung zusammengefasst wird. Zentrales Thema der Differentialrechnung ist die Berechnung lokaler Veränderungen von Funktionen.\n" +
                "Anschauliche Darstellung der Ableitung als Tangentensteigung einer Funktion an der Stelle x0.\n" +
                "\n" +
                "Hierzu dienlich und gleichzeitig Grundbegriff der Differentialrechnung ist die Ableitung einer Funktion (auch Differentialquotient genannt), deren geometrische Entsprechung die Tangentensteigung ist. Die Ableitung ist (nach der Vorstellung von Leibniz) der Proportionalitätsfaktor zwischen verschwindend kleinen (infinitesimalen) Änderungen des Eingabewertes und den daraus resultierenden, ebenfalls infinitesimalen Änderungen des Funktionswertes. Existiert ein solcher Proportionalitätsfaktor, so nennt man die Funktion differenzierbar. Äquivalent wird die Ableitung in einem Punkt als die Steigung derjenigen linearen Funktion definiert, die unter allen linearen Funktionen die Änderung der Funktion am betrachteten Punkt lokal am besten approximiert. Entsprechend wird die Ableitung auch die Linearisierung der Funktion genannt.";
        tags = "mathe, differential, funktionen, oberstufe";
        blogPost = new BlogPost("1002", title, post, tags);
        store.put(blogPost.getId(), blogPost);


        title = "Analysis";
        post = "Die Analysis [aˈnalyzɪs] (griechisch ανάλυσις análysis, deutsch ‚Auflösung‘, altgriechisch ἀναλύειν analýein ‚auflösen‘) ist ein Teilgebiet der Mathematik, dessen Grundlagen von Gottfried Wilhelm Leibniz und Isaac Newton als Infinitesimalrechnung unabhängig voneinander entwickelt wurden. Als eigenständiges Teilgebiet der Mathematik neben den klassischen Teilgebieten der Geometrie und der Algebra existiert die Analysis seit Leonhard Euler.\n" +
                "\n" +
                "Grundlegend für die gesamte Analysis sind die beiden Körper R {\\displaystyle \\mathbb {R} } \\mathbb {R} (der Körper der reellen Zahlen) und C {\\displaystyle \\mathbb {C} } \\mathbb {C} (der Körper der komplexen Zahlen) mitsamt deren geometrischen, arithmetischen, algebraischen und topologischen Eigenschaften. Zentrale Begriffe der Analysis sind die des Grenzwerts, der Folge, der Reihe sowie in besonderem Maße der Begriff der Funktion. Die Untersuchung von reellen und komplexen Funktionen hinsichtlich Stetigkeit, Differenzierbarkeit und Integrierbarkeit zählt zu den Hauptgegenständen der Analysis. Die hierzu entwickelten Methoden sind in allen Natur- und Ingenieurwissenschaften von großer Bedeutung.";
        tags = "mathe, analysis, newton";
        blogPost = new BlogPost("1003", title, post, tags);
        store.put(blogPost.getId(), blogPost);
    }

    public static List<BlogPost> getAllPostsAsList() {

        List<BlogPost> list = new ArrayList<>();

        for(Map.Entry<String,BlogPost> entry : store.entrySet()) {
            list.add(entry.getValue());
        }

        return list;
    }

}
