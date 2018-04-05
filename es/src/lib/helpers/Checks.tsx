import _ = require("lodash");

export module Checks {
    export function throwIfNil(value: any, message: string): any {
        if (_.isNil(value)) {
            throw new Error(message);
        }
        return value;
    }

    export function throwIfNotNil(value: any, message: string): any {
        if (!_.isNil(value)) {
            throw new Error(message);
        }
        return value;
    }

    export function throwIfWrongType(value: any, expectedType:string, message: string): any {
        if (typeof value !== expectedType) {
            throw new Error(message+ " Got type: '"+typeof value+"', expected "+expectedType);
        }
        return value;
    }
}
