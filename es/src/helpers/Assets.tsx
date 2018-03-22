import {Routes} from "../app/Router";


export class Assets {

    public static image(fileName: string):string {
        return Routes.assets.IMAGES+"/"+fileName;
    }

    public static getLogo():string {
        return Assets.image("logo.png");
    }

}
