import _ = require("lodash");

export module Checks {
    export function throwIfNull(value: any, message: string): any {
        if (_.isNil(value)) {
            throw new Error(message);
        }
        return value;
    }
}
