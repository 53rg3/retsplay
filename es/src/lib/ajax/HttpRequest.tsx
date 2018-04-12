import {GenericBuilder, GenericConfig} from "../helpers/GenericBuilder";
import {Checks} from "../helpers/Checks";
import {Method} from "./HttpMeta";

export enum HttpRequestStage {
    INITIAL = "INITIAL",
    LOADING = "LOADING",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR"
}

export interface HttpRequestActionTypes {
    SEND: any;
    SUCCESS: any;
    ERROR: any;
}

export interface HttpRequestConfig {
    readonly method: Method;
    readonly url: string;
    readonly body?: any;
    readonly headers?: Object;
    // readonly user?: string;
    // readonly async?: boolean;
    // readonly timeout?: number;
    // readonly password?: string;
    // readonly hasContent?: boolean;
    // readonly crossDomain?: boolean;
    // readonly withCredentials?: boolean;
    // readonly createXHR?: () => XMLHttpRequest;
    // readonly progressSubscriber?: Subscriber<any>;
    readonly responseType?: string;
}
export class HttpRequest {

    readonly method: Method;
    readonly url: string;
    body?: any;
    readonly headers?: Object;
    readonly responseType?: string;

    constructor(cfg:(cfg:GenericConfig<HttpRequestConfig>)=>GenericConfig<HttpRequestConfig>) {
        const config = GenericBuilder.buildFromConfig(cfg);

        this.method = Checks.throwIfNil(config.method, "'method' must not be null.");
        this.url = Checks.throwIfNil(config.url, "'url' must not be null.");
        this.responseType = Checks.throwIfNil(config.responseType, "'responseType' must not be null.");
        this.body = config.body;
        this.headers = config.headers;
    }

}
