//import './sources.css';
import type { Source } from '../../types/types';

class Sources {
    public draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        if (!sourceItemTemp) return;

        data.forEach((item: Source) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const nameElem = sourceClone.querySelector('.source__item-name');
            if (nameElem) {
                nameElem.textContent = item.name;
            }

            const itemElem = sourceClone.querySelector('.source__item');
            if (itemElem) {
                itemElem.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.innerHTML = '';
            sourcesContainer.appendChild(fragment);
        }
    }
}

export default Sources;
