## Table of Contents
[1. Cookbooks](#cookbooks)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.1 Copy retsplay into other project](#copy-retsplay-into-other-project)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.2 URL Query Parameters](#url-query-parameters)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.3 Dealing With Dates](#dealing-with-dates)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.4 Repeat Actions](#repeat-actions)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.5 404 - Not Found Page](#404---not-found-page)<br>
# Cookbooks
## Copy retsplay into other project

1. Copy `/es` folder
2. Copy and replace `/app/controllers/HomeController.java`
3. Copy and replace `/app/views/index.scala.html`
4. Delete `/app/views/main.scala.html`
5. Copy and replace `/conf/routes`
6. Copy and replace `/conf/application.conf`
7. Run `npm install` in `/es`
8. Delete `/ajaxexample`, `/blog`, `/counter`, `/formexample` in `/es/src/modules` 
9. Delete their entries in `ActionTypes.tsx`, `Api.tsx`, `Schema.tsx` & `Router.tsx` (also in Routes object) in `/es/src/app` 
10. Delete their sidebar links in `/es/src/modules/layout/sidebar/Sidebar.tsx` 
11. Run `webpack --watch` and remove leftover fuckups

Start Play if IntelliJ shows linting errors. Restart IntelliJ if it complains that it doesn't recognize node_modules.

## URL Query Parameters

Do `npm install query-string`. The URL parameters can be found in React Router connected component via:


```TYPESCRIPT
class Props {
     location:Location
}
```


See [https://www.npmjs.com/package/query-string](https://www.npmjs.com/package/query-string) for usage.

## Dealing With Dates

Do `npm install date-fns@next`. See [https://date-fns.org/](https://date-fns.org/). Example:


```TYPESCRIPT
import {format, addDays, subDays, subMilliseconds, subMinutes, endOfDay} from 'date-fns'// ...// Add 1 day to todayformat(addDays(new Date(), 1), "YYYY-MM-dd");// Subtract 7 days to todayformat(subDays(new Date(), 7), "YYYY-MM-dd");
```

## Repeat Actions

Use `setInterval` somewhere and cancel the interval with `clearInterval`


```TYPESCRIPT
private interval = setInterval(()=>console.log("interval"), 1000);
//...
componentWillUnmount() {
     clearInterval(this.interval);
}

```


:heavy_exclamation_mark:  IntelliJ adds `import {clearInterval}from "timers";` automatically. You need to delete this for whatever reason.

## 404 - Not Found Page

In Play routes, place as **LAST** route:


```TYPESCRIPT
GET /*path                                  controllers.PNA.unknownRoute(path) 
```


In a controller:


```TYPESCRIPT
public Result unknownRoute(String path) {
     return notFound("Couldn't find route"); 
}
```


In React Router add a route to desired 404 component:


```TYPESCRIPT
<Route component={NotFound.component}/>
```


Add a component like:


```TYPESCRIPT
class NotFound extends React.Component<NoProps, NoState> {
    render() {
        return (
            <div>404 - Route not found</div>
        );
    }
}
```

