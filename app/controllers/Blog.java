package controllers;


import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.google.common.collect.Lists;
import com.google.inject.Inject;
import helpers.Helpers;
import models.BlogPost;
import models.DbMock;
import play.Logger;
import play.data.FormFactory;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.Results;

import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

public class Blog extends Controller {

    @Inject
    private FormFactory formFactory;

    private boolean respondWithOccasionalErrors = false;
    private boolean produceErrorResponse = false;
    ObjectNode emptyJson = new ObjectMapper().createObjectNode();


    public Result getAllPosts() {

        final List<BlogPost> blogPostList = DbMock.getAllPostsAsList();

        return this.simulateRealWorldResponse(Json.toJson(blogPostList));
    }

    public Result getPost(final String id) {

        final BlogPost blogPost = DbMock.store.get(id);

        return this.simulateRealWorldResponse(Json.toJson(blogPost));
    }

    public Result createNewPost() {

        final BlogPost blogPost = formFactory.form(BlogPost.class).bindFromRequest().get();
        String id = String.valueOf(ThreadLocalRandom.current().nextInt(1, 10001));
        blogPost.setId(id);
        BlogPost result = DbMock.store.putIfAbsent(id, blogPost);
        if(result == null) {
            return this.simulateRealWorldResponse(emptyJson);
        } else {
            return Results.notAcceptable("ID already exists. Or you suck. Or both.");
        }
    }

    public Result deletePost(final String id) {

        DbMock.store.remove(id);

        return this.simulateRealWorldResponse(this.emptyJson);
    }

    public Result updatePost(final String id) {

        final BlogPost blogPost = formFactory.form(BlogPost.class).bindFromRequest().get();
        DbMock.store.put(blogPost.getId(), blogPost);

        return this.simulateRealWorldResponse(this.emptyJson);
    }



    private Result simulateRealWorldResponse(final JsonNode jsonNode) {
        Logger.info("Next request will produce error? " + this.produceErrorResponse);
        if(this.respondWithOccasionalErrors) {
            this.produceErrorResponse = !this.produceErrorResponse;
        }
        Helpers.sleep(500);

        if(this.produceErrorResponse) {
            return Results.badRequest();
        } else {
            return jsonNode != null ? Results.ok(jsonNode) : Results.notFound();
        }
    }


}

