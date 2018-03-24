import _ = require("lodash");

export module Checks {
    export function throwIfNull(value: any, message: string): any {
        if (_.isNil(value)) {
            throw new Error(message);
        }
        return value;
    }

    export function throwIfNotUndefined(value: any, message: string): any {
        if (value !== undefined) {
            throw new Error(message);
        }
        return value;
    }
}
