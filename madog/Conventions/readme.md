## Table of Contents
[1. Conventions](#conventions)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.1 Consistent Naming](#consistent-naming)<br>
# Conventions

* **Structure**<br>
Structure the project 'module-oriented'. Modules as in 'containers for components' which contain everything concerning the components, i.e. EARs, logic, css, etc. Modules can contain multiple components. Each should have its own folder and should be self-contained.Everything used by multiple components should go into a `/commons` folder. Helpers into `/lib/helpers`. See overview for more info: [Overview](/madog/Overview/readme.md).
* **File Naming**<br>
Files in module folders should be contain the module name and the aspect they provide, e.g.<br/>`PostView.tsx` -> the component<br/>`PostView.logic.tsx` -> methods of this component.<br/>`PostView.formFields.tsx` -> form definition<br/>`PostView.css.tsx` -> CSS<br/>If there are overlaps, e.g. multiple EARs, then put these into separate folders.
* No logic in components. Write it into `YourModule.logic.tsx`. Otherwise components become too big.
* SCSS goes into [/app/assets](/app/assets). These will be automatically compiled.
* Redux state reducer methods belong in the model class, not into EARs.


## Consistent Naming

All EARs, Schema entries, API Endpoints, ActionTypes, Controllers, Play Routes, Module Files Names should comply to the following pattern: `[Module]*[Name of the VIEW]`. **Capitalization rules should follow the conventions of the retrospective file.** I.e. if we have a view which **shows all** entries of a model called "ImportSource", then we should use the following naming: 


- In `StateTree.tsx`:

```
importSourcesShowSource ="importSourcesShowSource"
```

- In `ActionTypes.tsx`:

```
public static [Schema.importSourcesShowAll] = {
     ...FSAction.ajaxTypes(Schema.importSourcesShowAll)
};
```

- In `Api.tsx`:

```
public static importSources = {showAll: Api.modules.importSources+"/show_all",
// ... other ... } 
```

- In `Router.tsx`:
```
public static importSources = {
         SHOW_ALL:"/import-sources",
// ... other ... };
```

- In DAO `ImportSourcesDAO.java`:
```
public ElsaResponse<List<ImportSource>>showAll() {
     return some_DB_Request; }
```

- In Controller `ImportSources.java`:
```
public ResultshowAll() {
     return ok(dao.showAll);
}
```

- In `conf/routes`:

Api-Endpoint:
```
GET /api/import_sources/show_all          controllers.ImportSources.showAll 
```

URL path (doesn't comply, because it's easier for the user):

```
GET /import-sources                        controllers.PNA.index(id =null) 
```

- In `modules/import_sources/ShowAll.tsx` (notice that the .tsx file only uses the purpose of the view as name): 

```
export class ImportSourcesShowAllextends React.Component<Props, NoState> {
      // ... your component
}
```

- In `modules/import_sources/ShowAll.ear.tsx` (again, we're using only the purpose of the view in combination with a designation of the type of the file (i.e. `.ear`)):
**We can keep the actual file name shorter, like `ShowAllEar`.**
```
export class ImportSourcesShowAllEar extends Reducer<HttpResponse<ImportSource[]>> {
      // ... code of the EAR
}
```

