import {FormField} from "../form/FormField";


export type GenericConfig<T> = {
        [k in keyof T]: (arg: T[k]) => GenericConfig<T>
        }
    & {
    build(): T
};

export type GenericConfigWithFormField<T> = {
        [k in keyof T]: (arg: T[k]) => GenericConfigWithFormField<T>
        }
    & {
    formField(formField:FormField<any>):GenericConfigWithFormField<T>,
    build(): T
};

export class GenericBuilder {
    public static of<T>(): GenericConfig<T> {
        const built: any = {};

        const builder = new Proxy(
            {},
            {
                get(target, prop, receiver) {
                    if ('build' === prop) {
                        return () => built;
                    }

                    return (x: any): any => {
                        built[prop] = x;
                        return builder;
                    };
                }
            }
        );

        return builder as any;
    }

    public static buildFromConfig<T>(genericConfig: (cfg: GenericConfig<T>) => GenericConfig<T>): T {
        return genericConfig(GenericBuilder.of()).build();
    }

}


