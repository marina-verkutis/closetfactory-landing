class Goods {
    render() {
        let htmlCatalog = '';
        CATALOG.forEach((good) => {
            htmlCatalog += `
                <li class="goods-list__item goods-list-item">
                    <img class="goods-list__image" src="${good.img}" alt="Фото товара ${good.name}"/>
                    <h3 class="goods-list__title">${good.name}</h3>
                    <div class="goods-list__description">
                        <p class="goods-list__size">Размер: ${good.size} см</p>
                        <p class="goods-list__material">Материал корпуса: ${good.material}</p>
                    </div>
                    <button class="button-like goods-list__button-like"></button>
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