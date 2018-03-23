package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.Results;

import java.util.UUID;


public class HomeController extends Controller {
    public Result index() {
        String nonce = UUID.randomUUID().toString();
        return Results.ok(views.html.index.render(nonce))
                .withHeader("Content-Security-Policy", "default-src 'self'; script-src 'self'; font-src fonts.gstatic.com; style-src 'self' fonts.googleapis.com 'nonce-" + nonce + "';");
    }

}
