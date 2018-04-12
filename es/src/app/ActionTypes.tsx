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

}



