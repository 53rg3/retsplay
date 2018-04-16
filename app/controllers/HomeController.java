package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.Results;

import java.util.UUID;


public class HomeController extends Controller {


    public Result index() {
        String nonce = this.getUUID();
        return Results.ok(views.html.index.render(nonce))
                .withHeader("Content-Security-Policy", this.getCspHeaderValue(nonce));
    }

    public Result blogpost(int id) {
        String nonce = this.getUUID();
        return Results.ok(views.html.index.render(nonce))
                .withHeader("Content-Security-Policy", this.getCspHeaderValue(nonce));
    }

    private String getUUID() {
        return UUID.randomUUID().toString();
    }

    private String getCspHeaderValue(String nonce) {
        return "default-src 'self'; " +
                "script-src 'self'; " +
                "font-src fonts.gstatic.com; " +
                "style-src 'self' fonts.googleapis.com 'nonce-" + nonce + "';";
    }

}
