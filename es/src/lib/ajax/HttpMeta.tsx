export enum Method {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    HEAD = "HEAD",
    CONNECT = "CONNECT",
    OPTIONS = "OPTIONS",
    TRACE = "TRACE",
    PATCH = "PATCH"
}

export enum MediaType {
    JSON = "application/json",
    PLAIN_TEXT = "text/plain",
    FORM_URLENCODED = "application/x-www-form-urlencoded",
    XML = "application/xml"
}

/**
 * See https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType for more info
 */
export enum ResponseType {
    JSON = "json",
    TEXT = "text",
    ARRAYBUFFER = "arraybuffer",
    BLOB = "blob",
    DOCUMENT = "document",
    MOZ_CHUNKED_ARRAYBUFFER = "moz-chunked-arraybuffer",
    MS_STREAM = "ms-stream",
}


// HTTP HEADERS?!
// Builder. Later.
// https://en.wikipedia.org/wiki/List_of_HTTP_header_fields
