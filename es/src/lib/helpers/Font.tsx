import * as React from "react";

export class Font {

    public static color(text: string, colorCode: string) {
        return <span style={{color: colorCode}}>{text}</span>
    }

    public static red(text: string) {
        return <span style={{color: "red"}}>{text}</span>
    }

    public static green(text: string) {
        return <span style={{color: "green"}}>{text}</span>
    }

    public static yellow(text: string) {
        return <span style={{color: "yellow"}}>{text}</span>
    }


}
