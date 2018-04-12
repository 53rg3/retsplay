package controllers;

import helpers.Helpers;
import models.Person;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

public class AjaxResponses extends Controller {

    public Result postErrorExample() {
        Helpers.sleep(500);
        return badRequest("Arbitrary response body for POST error request");
    }

    public Result postSuccessExample() {
        Helpers.sleep(500);
        return ok("Arbitrary response body for POST success request");
    }

    public Result getErrorExample() {
        Helpers.sleep(500);
        return badRequest("Arbitrary response body for GET error request");
    }

    public Result getSuccessExample() {
        Helpers.sleep(500);
        return ok(Json.toJson(new Person())).as("application/json");
    }

}
