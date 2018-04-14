export class Api {

    private static root: string = "http://localhost:9000/api";
    private static modules = {
        blog: Api.root + "/blog",
        ajaxRequests: Api.root + "/ajaxrequests"
    };


    public static ajaxRequests = {
        EXAMPLE_ERROR_URL: Api.modules.ajaxRequests + "/error-example",
        EXAMPLE_SUCCESS_URL: Api.modules.ajaxRequests + "/success-example"
    };


    public static blog = {
        ROOT: /*----------------*/ Api.modules.blog,
        GET_ALL_POSTS: /*-------*/ Api.modules.blog + "/getallposts",
        GET_SINGLE_POST: /*-----*/ Api.modules.blog + "/post/:id",
        DELETE_POST: /*---------*/ Api.modules.blog + "/delete/:id",
        CREATE_NEW_POST: /*-----*/ Api.modules.blog + "/createnewpost",
        UPDATE_POST: /*---------*/ Api.modules.blog + "/updatepost/:id"
    };


}
