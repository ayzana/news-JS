import AppLoader from './appLoader';
import type { SourcesCallback, NewsCallback } from '../types/types';
declare class AppController extends AppLoader {
    getSources(callback: SourcesCallback): void;
    getNews(e: Event, callback: NewsCallback): void;
}
export default AppController;
//# sourceMappingURL=controller.d.ts.map