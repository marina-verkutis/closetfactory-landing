const CATALOG_PREVIEW = CATALOG.slice(0,8);

class PreviewGoods {
    constructor() {
        this.ClassNameActive = 'button-like_active';
    }

    handleSetLocationStorage(element, id) {
        
        const { pushGood, goods } = localStorageUtil.putGoods(id);

        if ( pushGood ) {
            element.classList.add(this.ClassNameActive);
        } else {
            element.classList.remove(this.ClassNameActive);
        }
        like.render(goods.length);
    }

    render() {
        const goodsStore = localStorageUtil.getGoods();

        let htmlCatalog = '';
        CATALOG_PREVIEW.forEach((good) => {

            let activeClass = '';

            if(goodsStore.indexOf(good.id) !== -1)
                activeClass = this.ClassNameActive;

            htmlCatalog += `
            <div class="catalog-card catalog__card">
                <img src="${good.img}" alt="${good.name}" class="catalog-card__image">
                <span class="catalog-card__tag">${good.name}</span>
                <div class="catalog-card__buttons">
                    <button class="button-add catalog-card__button">Заказать</button>
                    <button class="button-like catalog-card__button ${activeClass}" onclick="prevGoods.handleSetLocationStorage(this, '${good.id}');"></button>
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