import News from './news/news';
import Sources from './sources/sources';
import type { NewsResponse, SourcesResponse } from '../types/types';
export declare class AppView {
    news: News;
    sources: Sources;
    constructor();
    drawNews(data: NewsResponse): void;
    drawSources(data: SourcesResponse): void;
}
export default AppView;
//# sourceMappingURL=appView.d.ts.map