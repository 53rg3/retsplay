import {HttpResponse} from "../ajax/HttpResponse";
import {HttpRequestStage} from "../ajax/HttpRequest";
import {GenericBuilder, GenericConfig} from "./GenericBuilder";
import {Checks} from "./Checks";
import {Html} from "./Html";

class ResponseRendererConfig<T> {
    public readonly ifResponseIsNull:(response:HttpResponse<T>) => JSX.Element;
    public readonly initial:(response:HttpResponse<T>) => JSX.Element;
    public readonly loading:(response:HttpResponse<T>) => JSX.Element;
    public readonly success:(response:HttpResponse<T>) => JSX.Element;
    public readonly error:(response:HttpResponse<T>) => JSX.Element;
}

export class ResponseRenderer<T> {

    public readonly ifResponseIsNull:(response:HttpResponse<T>) => JSX.Element;
    private readonly initial:(response:HttpResponse<T>) => JSX.Element;
    private readonly loading:(response:HttpResponse<T>) => JSX.Element;
    private readonly success:(response:HttpResponse<T>) => JSX.Element;
    private readonly error:(response:HttpResponse<T>) => JSX.Element;

    constructor(cfg:(cfg:GenericConfig<ResponseRendererConfig<T>>)=>GenericConfig<ResponseRendererConfig<T>>) {
        const config = GenericBuilder.buildFromConfig(cfg);
        this.initial = Checks.throwIfNil(config.initial, "'initial' must not be null.");
        this.loading = Checks.throwIfNil(config.loading, "'loading' must not be null.");
        this.success = Checks.throwIfNil(config.success, "'success' must not be null.");
        this.error = Checks.throwIfNil(config.error, "'error' must not be null.");
        config.ifResponseIsNull ? this.ifResponseIsNull = config.ifResponseIsNull : ()=>Html.emptySpan();
    }

    from(response:HttpResponse<T>) {

        if(!response) {
            return this.ifResponseIsNull;
        }

        switch(response.stage) {
            case HttpRequestStage.INITIAL:
                return this.initial(response);
            case HttpRequestStage.LOADING:
                return this.loading(response);
            case HttpRequestStage.SUCCESS:
                return this.success(response);
            case HttpRequestStage.ERROR:
                return this.error(response);
            default:
                throw new Error("Unrecognized HttpRequestStage. Got "+response.stage);
        }

    }

}
