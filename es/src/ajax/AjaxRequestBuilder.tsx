import {AjaxRequest} from "rxjs/Rx";
import {GenericBuilder, GenericConfig} from "../helpers/GenericBuilder";
import {Checks} from "../helpers/Checks";



export enum Method {
    GET = "GET",
    POST = "POST"
}

export interface HttpRequest {
    method: Method
}
export function AjaxRequestBuilder(config:(cfg:GenericConfig<AjaxRequest>)=>GenericConfig<AjaxRequest>):AjaxRequest {

    const result = GenericBuilder.buildFrom(config);

    let method = GenericBuilder.build<HttpRequest>()
        .method(Method.GET)
        .build();


    Checks.throwIfNull(result.method, "'method' must not be null.");
    Checks.throwIfNull(result.url, "'url' must not be null.");

    return result;
}

// let ajaxRequest = AjaxRequestBuilder(b=>b
//     .url("http://www.test.de")
//     .method("GET"));
// console.log(ajaxRequest);
