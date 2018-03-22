export type GenericConfig<T> = {
        [k in keyof T]: (arg: T[k]) => GenericConfig<T>
        }
    & {
    build(): T
};

export class GenericBuilder {
    public static build<T>(): GenericConfig<T> {
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

    public static buildFrom<T>(genericConfig:(cfg:GenericConfig<T>)=>GenericConfig<T>): T {
        return genericConfig(GenericBuilder.build()).build();
    }

}


