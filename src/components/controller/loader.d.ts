import type { Endpoint, RequestOptions, GeneralCallback } from '../types/types';
declare class Loader {
    baseLink: string;
    options: Record<string, string>;
    constructor(baseLink: string, options: Record<string, string>);
    getResp(
        {
            endpoint,
            options,
        }: {
            endpoint: Endpoint;
            options?: RequestOptions;
        },
        callback?: GeneralCallback
    ): void;
    errorHandler(res: Response): Response;
    makeUrl(options: RequestOptions, endpoint: Endpoint): string;
    load(method: string, endpoint: Endpoint, callback: GeneralCallback, options?: RequestOptions): void;
}
export default Loader;
//# sourceMappingURL=loader.d.ts.map
