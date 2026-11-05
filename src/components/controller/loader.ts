import type { Endpoint, RequestOptions, GeneralCallback } from '../types/types';
class Loader {
    baseLink: string;
    options: Record<string, string>;

    constructor(baseLink: string, options: Record<string, string>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: Endpoint; options?: RequestOptions },
        callback: GeneralCallback = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: RequestOptions, endpoint: Endpoint): string {
        const urlOptions: Record<string, string> = {
            ...this.options,
            ...(Object.fromEntries(Object.entries(options).filter(([, value]) => value !== undefined)) as Record<
                string,
                string
            >),
        };
        let url = `${this.baseLink}/${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: Endpoint, callback: GeneralCallback, options: RequestOptions = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler.bind(this))
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
