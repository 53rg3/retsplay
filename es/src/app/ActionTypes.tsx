import {FSAction} from "../lib/ear/FSAction";
import {Schema} from "./Schema";


export class Act {

    public static counter = {
        INCREMENT: "INCREMENT",
        DECREMENT: "DECREMENT",
        ASYNC_DECREMENT: "ASYNC_DECREMENT",
        ASYNC_INCREMENT: "ASYNC_INCREMENT"
    };



    public static [Schema.ajaxRequestsGetSuccess] = {
        ...FSAction.ajaxTypes(Schema.ajaxRequestsGetSuccess)
    };

    public static [Schema.ajaxRequestsGetError] = {
        ...FSAction.ajaxTypes(Schema.ajaxRequestsGetError)
    };

    public static [Schema.ajaxRequestsPostSuccess] = {
        ...FSAction.ajaxTypes(Schema.ajaxRequestsPostSuccess)
    };

    public static [Schema.ajaxRequestsPostError] = {
        ...FSAction.ajaxTypes(Schema.ajaxRequestsPostError)
    };



    public static [Schema.blogShowAll] = {
        ...FSAction.ajaxTypes(Schema.blogShowAll)
    };

    public static [Schema.blogGetPost] = {
        ...FSAction.ajaxTypes(Schema.blogGetPost),
        INVALIDATE: `${Schema.blogGetPost}/INVALIDATE`
    };

    public static [Schema.blogDeletePost] = {
        ...FSAction.ajaxTypes(Schema.blogDeletePost)
    };

    public static [Schema.blogCreateNew] = {
        ...FSAction.ajaxTypes(Schema.blogCreateNew)
    };

    public static [Schema.blogUpdatePost] = {
        ...FSAction.ajaxTypes(Schema.blogUpdatePost)
    };


}



