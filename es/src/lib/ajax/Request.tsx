import {AjaxRequest} from "rxjs/Rx";
import {GenericBuilder, GenericConfig} from "../helpers/GenericBuilder";
import {Checks} from "../helpers/Checks";
import {Method} from "./Http";





export interface HttpRequest {
    readonly method: Method;
    readonly url: string;
    readonly body?: any;
    readonly headers?: Object;
    // user?: string;
    // async?: boolean;
    // timeout?: number;
    // password?: string;
    // hasContent?: boolean;
    // crossDomain?: boolean;
    // withCredentials?: boolean;
    // createXHR?: () => XMLHttpRequest;
    // progressSubscriber?: Subscriber<any>;
    // responseType?: string;
}
export function Request(config:(cfg:GenericConfig<AjaxRequest>)=>GenericConfig<AjaxRequest>):AjaxRequest {

    const result = GenericBuilder.buildFromConfig(config);

    Checks.throwIfNil(result.method, "'method' must not be null.");
    Checks.throwIfNil(result.url, "'url' must not be null.");

    return result;
}

let ajaxRequest = Request(b=>b
    .url("http://www.test.de")
    .method("GET"));
console.log(ajaxRequest);
