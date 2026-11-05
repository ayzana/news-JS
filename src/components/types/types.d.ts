export interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}
export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}
export interface SourcesResponse {
    status: string;
    sources: Source[];
}
export type Endpoint = 'sources' | 'everything';
export interface RequestOptions {
    sources?: string;
    [key: string]: string | undefined;
}
export interface GetRespParams {
    endpoint: Endpoint;
    options?: RequestOptions;
}
export type NewsCallback = (data: NewsResponse) => void;
export type SourcesCallback = (data: SourcesResponse) => void;
export type GeneralCallback = (data: NewsResponse & SourcesResponse) => void;
//# sourceMappingURL=types.d.ts.map