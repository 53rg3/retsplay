import {RequestStage} from "./RequestStage";
import {AjaxError, AjaxResponse} from "rxjs/Rx";
import {FSAction} from "../ear/FSAction";

export class JsonResponse<T> {
    readonly stage: RequestStage;
    readonly body: T;
    readonly status: number;

    constructor(stage: RequestStage, content: T, statusCode: number) {
        this.stage = stage;
        this.body = content;
        this.status = statusCode;
    }

    public static initial<T>(): JsonResponse<T> {
        return new JsonResponse(RequestStage.INITIAL, null, 0);
    }

    public static loading<T>(state: JsonResponse<T>, action: FSAction<any>): JsonResponse<T> {
        return new JsonResponse(RequestStage.LOADING, null, 0);
    }

    public static success<T>(state: JsonResponse<T>, action: FSAction<AjaxResponse>): JsonResponse<T> {
        return new JsonResponse(RequestStage.SUCCESS, action.payload.response, action.payload.status);
    }

    public static error<T>(state: JsonResponse<T>, action: FSAction<AjaxError>): JsonResponse<T> {
        return new JsonResponse(RequestStage.ERROR, null, action.payload.status);
    }

}



