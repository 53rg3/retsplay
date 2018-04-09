export class Api {

    private static root: string = "http://localhost:9000/api";
    private static modules = {
        blog: Api.root + "/blog",
    };


    public static ajaxRequests = {
        EXAMPLE_ERROR_URL: Api.root+"/error-example",
        EXAMPLE_SUCCESS_URL: Api.root+"/success-example"
    };


    public static blog = {
        ROOT: /*----------------*/ Api.modules.blog,
        GET_ALL_POSTS: /*-------*/ Api.modules.blog + "/getallposts",
        GET_SINGLE_POST: /*-----*/ Api.modules.blog + "/getpost?id=",
        ADD_NEW_POST: /*--------*/ Api.modules.blog + "/addnewpost",
        UPDATE_POST: /*---------*/ Api.modules.blog + "/updatepost?id=",
        DELETE_POST: /*---------*/ Api.modules.blog + "/deletepost?id=",
        GET_SEARCH_RESULTS: /*--*/ Api.modules.blog + "/searchforblogposts?q="
    };


}
