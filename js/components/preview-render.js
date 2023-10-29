const CATALOG_PREVIEW = CATALOG.slice(0,8);

class PreviewGoods {
    render() {
        let htmlCatalog = '';
        CATALOG_PREVIEW.forEach((good) => {
            htmlCatalog += `
            <div class="catalog-card catalog__card">
                <img src="${good.img}" alt="${good.name}" class="catalog-card__image">
                <span class="catalog-card__tag">${good.name}</span>
                <div class="catalog-card__buttons">
                    <button class="button-add catalog-card__button">Заказать</button>
                    <button class="button-like catalog-card__button"></button>
                </div>
            </div>
            `;
        });

        const html = `${htmlCatalog}`;

        document.getElementById('catalog-block').innerHTML = html;
    }

}

const prevGoods = new PreviewGoods();
prevGoods.render();