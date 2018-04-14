import {FSAction} from "../lib/ear/FSAction";
import {Schema} from "./Schema";


export class Act {

    public static counter = {
        INCREMENT: "INCREMENT",
        DECREMENT: "DECREMENT",
        ASYNC_DECREMENT: "ASYNC_DECREMENT",
        ASYNC_INCREMENT: "ASYNC_INCREMENT"
    };

    public static ajaxRequests = {

        [Schema.ajaxRequests.getSuccess]: {
            ...FSAction.ajaxTypes(Schema.ajaxRequests.moduleId, Schema.ajaxRequests.getSuccess)
        },

        [Schema.ajaxRequests.getError]: {
            ...FSAction.ajaxTypes(Schema.ajaxRequests.moduleId, Schema.ajaxRequests.getError)
        },

        [Schema.ajaxRequests.postSuccess]: {
            ...FSAction.ajaxTypes(Schema.ajaxRequests.moduleId, Schema.ajaxRequests.postSuccess)
        },

        [Schema.ajaxRequests.postError]: {
            ...FSAction.ajaxTypes(Schema.ajaxRequests.moduleId, Schema.ajaxRequests.postError)
        },
    };

    public static blog = {

        [Schema.blog.showAll]: {
            ...FSAction.ajaxTypes(Schema.blog.moduleId, Schema.blog.showAll)
        },

        [Schema.blog.getPost]: {
            ...FSAction.ajaxTypes(Schema.blog.moduleId, Schema.blog.getPost),
            INVALIDATE: `${Schema.blog.moduleId}.${Schema.blog.getPost}.INVALIDATE`
        },

        [Schema.blog.deletePost]: {
            ...FSAction.ajaxTypes(Schema.blog.moduleId, Schema.blog.deletePost)
        },

        [Schema.blog.createNew]: {
            ...FSAction.ajaxTypes(Schema.blog.moduleId, Schema.blog.createNew)
        },

        [Schema.blog.updatePost]: {
            ...FSAction.ajaxTypes(Schema.blog.moduleId, Schema.blog.updatePost)
        }

    }

}



