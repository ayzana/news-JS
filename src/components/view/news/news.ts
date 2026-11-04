//import './news.css';
import type { Article } from '../../types/types';

class News {
    draw(data: Article[]): void {
        const news = data.length >= 10 ? data.filter((_item: Article, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        if (!newsItemTemp) return;

        news.forEach((item: Article, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
            if (idx % 2) {
                const newsItemElement = newsClone.querySelector('.news__item');
                if (newsItemElement) newsItemElement.classList.add('alt');
            }

            const photoElem = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            if (photoElem) {
                photoElem.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }
            const authorElem = newsClone.querySelector('.news__meta-author') as HTMLElement;
            if (authorElem) {
                authorElem.textContent = item.author || item.source.name;
            }
            const dateElem = newsClone.querySelector('.news__meta-date') as HTMLElement;
            if (dateElem) {
                dateElem.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }
            const titleElem = newsClone.querySelector('.news__description-title') as HTMLElement;
            if (titleElem) titleElem.textContent = item.title;

            const sourceElem = newsClone.querySelector('.news__description-source') as HTMLElement;
            if (sourceElem) sourceElem.textContent = item.source.name;

            const descElem = newsClone.querySelector('.news__description-content') as HTMLElement;
            if (descElem) descElem.textContent = item.description;

            const linkElem = newsClone.querySelector('.news__read-more a') as HTMLAnchorElement;
            if (linkElem) linkElem.setAttribute('href', item.url);
            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
