export module Schema {

    export enum counter {
        moduleId = "counter",
        state = "counterModel"
    }

    export enum ajaxRequests {
        moduleId = "ajaxRequests",
        getSuccess = "getSuccess",
        getError = "getError",
        postSuccess = "postSuccess",
        postError = "postError"
    }

    export enum blog {
        moduleId = "blog",
        showAll = "showAll",
        getPost = "getPost",
        deletePost = "deletePost",
        createNew = "createNew",
        updatePost = "updatePost"
    }

}
