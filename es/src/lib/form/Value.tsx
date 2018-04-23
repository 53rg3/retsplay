import _ = require("lodash");

export class Value {

    public static isRequired(value: any): boolean {
        switch (typeof value) {
            case "string":
                return value !== undefined && value !== null && value.trim() != "";
            case "undefined":
                return false;
            case "object":
                return !_.isEmpty(value);
            case "boolean":
                return value;
            default:
                throw new Error("Value.isRequired has no case to validate the type: '"+typeof value+"'");
        }
    }

    // The item must be a number between the given `min` and `max` values.
    public static between(val: number, min: number, max: number) {
        return (this.isGreaterThan(val, min) &&
            this.isLessThan(val, max));
    };

    // The item must be a number equal or larger than the given `min` and
    // equal or smaller than the given `max` value.
    public static range(val: number, min: number, max: number) {
        return (this.greaterThanEqualTo(val, min) &&
            this.isLessThanOrEqualTo(val, max));
    };

    // Check that an item contains another item, either a string,
    // array, or object.
    public static contains(val: string, item: string) {
        return val.includes(item);

    };

    // The current value should be different than another field in the current
    // validation object.
    public static different(val: number | string, field: number | string) {
        return !(val == field);
    };

    // Check that an item is a minimum length
    public static hasMinLength(val: string, length: number) {
        return val.length >= length;
    };

    // Check that an item is a minimum length
    public static isStrongPassword(val: string, length: number) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{12,})/;
        return val.length >= length;
    };

    // Check that an item is less than a length
    public static hasMaxLength(val: string, length: number) {
        return val.length <= length;
    };

    // Check if one items is greater than another
    public static isGreaterThan(val: number, param: number) {
        return val > param;
    };

    // Check if one items is greater than or equal to another
    public static greaterThanEqualTo(val: number, param: number) {
        return val >= param;
    };

    // Check if one item is less than another
    public static isLessThan(val: number, param: number) {
        return val < param;
    };

    // Check if one item is less than or equal to another
    public static isLessThanOrEqualTo(val: number, param: number) {
        return val <= param;
    };

    public static regex = {
        alpha: /^[a-z]+$/i,
        alphaDash: /^[a-z0-9_\-]+$/i,
        alphaNumeric: /^[a-z0-9]+$/i,
        alphaUnderscore: /^[a-z0-9_]+$/i,
        base64: /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/,
        email:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
        integer: /^\-?[0-9]+$/,
        ipv4: /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
        ipv6: /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
        luhn: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
        natural: /^[0-9]+$/i,
        naturalNonZero: /^[1-9][0-9]*$/i,
        url:/https?:\/\/([\w\d-].?)[\w\d-].[\w\d-]{2,10}(\/[\w\d$-_.+!'(),;\/\?:@=&])?/gi,
        uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    };
}
