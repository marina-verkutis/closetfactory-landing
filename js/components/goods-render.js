class Goods {
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
        CATALOG.forEach((good) => {
            let activeClass = '';

            if(goodsStore.indexOf(good.id) !== -1)
                activeClass = this.ClassNameActive;

            htmlCatalog += `
                <li class="goods-list__item goods-list-item">
                    <img class="goods-list__image" src="${good.img}" alt="Фото товара ${good.name}"/>
                    <h3 class="goods-list__title">${good.name}</h3>
                    <div class="goods-list__description">
                        <p class="goods-list__size">Размер: ${good.size} см</p>
                        <p class="goods-list__material">Материал корпуса: ${good.material}</p>
                    </div>
                    <button class="button-like goods-list__button-like ${activeClass}" onclick="goods.handleSetLocationStorage(this, '${good.id}');"></button>
                    <div class="goods-list__offer">
                        <span class="goods-list__price">${good.price.toLocaleString()} руб.</span>
                        <button class="button goods-list__button">Заказать</button>
                    </div>
                </li>
            `;
        });

        const html = `
            <ul class="goods-list">
                ${htmlCatalog}
            </ul>
        `;

        document.getElementById('goods-block').innerHTML = html;
    }

}

const goods = new Goods();
goods.render();