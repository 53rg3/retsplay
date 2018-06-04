package output.c01_Conventions;

import madog.core.Output;
import madog.core.Print;
import madog.core.Ref;
import madog.markdown.List;
import output.c00_Overview.s00_Overview;


public class s01_ConsistentNaming extends Output {

    @Override
    public void addMarkDownAsCode() {

        Print.h2("Consistent Naming");

        Print.wrapped("" +
                "All EARs, Schema entries, API Endpoints, ActionTypes, Controllers, Play Routes, Module Files Names " +
                "should comply to the following pattern: `[Module]*[Name of the VIEW]`. **Capitalization rules should follow the conventions of the retrospective file.** " +
                "I.e. if we have a view which **shows all** entries of a model called \"ImportSource\", then we should " +
                "use the following naming: " +
                "");

        Print.wrapped("" +
                "- In `StateTree.tsx`:\n" +
                "\n" +
                "```\n" +
                "importSourcesShowSource =\"importSourcesShowSource\"\n" +
                "```\n" +
                "\n" +
                "- In `ActionTypes.tsx`:\n" +
                "\n" +
                "```\n" +
                "public static [Schema.importSourcesShowAll] = {\n" +
                "     ...FSAction.ajaxTypes(Schema.importSourcesShowAll)\n" +
                "};\n" +
                "```\n" +
                "\n" +
                "- In `Api.tsx`:\n" +
                "\n" +
                "```\n" +
                "public static importSources = {showAll: Api.modules.importSources+\"/show_all\",\n" +
                "// ... other ... } \n" +
                "```\n" +
                "\n" +
                "- In `Router.tsx`:\n" +
                "```\n" +
                "public static importSources = {\n" +
                "         SHOW_ALL:\"/import-sources\",\n" +
                "// ... other ... };\n" +
                "```\n" +
                "\n" +
                "- In DAO `ImportSourcesDAO.java`:\n" +
                "```\n" +
                "public ElsaResponse<List<ImportSource>>showAll() {\n" +
                "     return some_DB_Request; }\n" +
                "```\n" +
                "\n" +
                "- In Controller `ImportSources.java`:\n" +
                "```\n" +
                "public ResultshowAll() {\n" +
                "     return ok(dao.showAll);\n" +
                "}\n" +
                "```\n" +
                "\n" +
                "- In `conf/routes`:\n" +
                "\n" +
                "Api-Endpoint:\n" +
                "```\n" +
                "GET /api/import_sources/show_all          controllers.ImportSources.showAll \n" +
                "```\n" +
                "\n" +
                "URL path (doesn't comply, because it's easier for the user):\n" +
                "\n" +
                "```\n" +
                "GET /import-sources                        controllers.PNA.index(id =null) \n" +
                "```\n" +
                "\n" +
                "- In `modules/import_sources/ShowAll.tsx` (notice that the .tsx file only uses the purpose of the view as name): \n" +
                "\n" +
                "```\n" +
                "export class ImportSourcesShowAllextends React.Component<Props, NoState> {\n" +
                "      // ... your component\n" +
                "}\n" +
                "```\n" +
                "\n" +
                "- In `modules/import_sources/ShowAll.ear.tsx` (again, we're using only the purpose of the view in combination with a designation of the type of the file (i.e. `.ear`)):\n" +
                "**We can keep the actual file name shorter, like `ShowAllEar`.**" +
                "\n" +
                "```\n" +
                "export class ImportSourcesShowAllEar extends Reducer<HttpResponse<ImportSource[]>> {\n" +
                "      // ... code of the EAR\n" +
                "}\n" +
                "```" +
                "");

    }

}
