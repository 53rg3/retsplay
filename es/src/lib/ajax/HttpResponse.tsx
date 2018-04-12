import {AjaxError, AjaxResponse} from "rxjs/Rx";
import {FSAction} from "../ear/FSAction";
import {HttpRequestStage} from "./HttpRequest";

export class HttpResponse<T> {
    readonly stage: HttpRequestStage;
    readonly body: T;
    readonly status: number;

    constructor(stage: HttpRequestStage, content: T, statusCode: number) {
        this.stage = stage;
        this.body = content;
        this.status = statusCode;
    }

    public static initial<T>(): HttpResponse<T> {
        return new HttpResponse(HttpRequestStage.INITIAL, null, 0);
    }

    public static loading<T>(state: HttpResponse<T>, action: FSAction<any>): HttpResponse<T> {
        return new HttpResponse(HttpRequestStage.LOADING, null, 0);
    }

    public static success<T>(state: HttpResponse<T>, action: FSAction<AjaxResponse>): HttpResponse<T> {
        return new HttpResponse(HttpRequestStage.SUCCESS, action.payload.response, action.payload.status);
    }

    public static error<T>(state: HttpResponse<T>, action: FSAction<AjaxError>): HttpResponse<T> {
        return new HttpResponse(HttpRequestStage.ERROR, action.payload.response, action.payload.status);
    }

}



