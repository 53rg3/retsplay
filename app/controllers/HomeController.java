package controllers;

import play.mvc.*;


public class HomeController extends Controller {

    public Result index() {
        System.out.println("loading index");
        return ok(views.html.index.render());
    }

}
