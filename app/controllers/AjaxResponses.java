package controllers;

import helpers.Helpers;
import models.Person;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

public class AjaxResponses extends Controller {

    public Result postErrorExample() {
        Helpers.sleep(500);
        return badRequest();
    }

    public Result postSuccessExample() {
        Helpers.sleep(500);
        return ok("postSuccessExample").as("application/json");
    }

    public Result getErrorExample() {
        Helpers.sleep(500);
        return badRequest();
    }

    public Result getSuccessExample() {
        Helpers.sleep(500);
        return ok(Json.toJson(new Person())).as("application/json");
    }

}
