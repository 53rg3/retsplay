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

    const result = GenericBuilder.buildFromConfig(config);

    let method = GenericBuilder.of<HttpRequest>()
        .method(Method.GET)
        .build();


    Checks.throwIfNil(result.method, "'method' must not be null.");
    Checks.throwIfNil(result.url, "'url' must not be null.");

    return result;
}

// let ajaxRequest = AjaxRequestBuilder(b=>b
//     .url("http://www.test.de")
//     .method("GET"));
// console.log(ajaxRequest);
