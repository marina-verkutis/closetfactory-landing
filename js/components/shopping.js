class Shopping {
    
    handleClear() {
        document.getElementById('modal-shopping').innerHTML = '';
        document.querySelector('body').classList.remove(like.classScroll);
        like.clickCount = false;
    }

    handleSetLocationStorage(element, id) {

        const { pushGood, goods } = localStorageUtil.putGoods(id);
        like.render(goods.length);

        if (window.location.pathname === '/index.html') {
            prevGoods.render();
        }
        else if (window.location.pathname === '/goods.html')
            goodsPage.render();
        shopping.render();
    }

    render () {
        let htmlCatalog = '';     

        const goodsStore = localStorageUtil.getGoods();

        CATALOG.forEach((good) => {

            if (goodsStore.indexOf(good.id) !== -1) {
                htmlCatalog += `
                    <div class="shopping-block__item">
                        <img class="shopping-block__image" src="${good.img}" alt="${good.name}">
                    </div>
                    <div class="shopping-block__item">
                        <p class="shopping-block__name">${good.name}</p>
                    </div>
                    <div class="shopping-block__item">
                        <span class="shopping-block__price">${good.price.toLocaleString()} руб.</span>
                    </div>
                    <div class="shopping-block__item">
                        <span class="shopping-block__delete" onclick="shopping.handleSetLocationStorage(this, '${good.id}');"></span>
                    </div>
                `;
            }
        });

        let offer = `<p>В избранном пока нет товаров!</p>`;

        if (htmlCatalog !== '')
        offer = `
        <div class="shopping-block-button">
            <button class="button shopping-block__button">Заказать</button>
        </div>
        `;

        const html =`
        <div class="overlay">
            <div class="shopping-block">
                <h3 class="shopping-block__title">Избранные товары</h3>
                <span class="close shopping-block__close" onclick="shopping.handleClear();"></span>
                <div class="shopping-scroll">
                    <div class="shopping-block__items">
                        ${htmlCatalog}
                    </div>
                </div>
                ${offer}
            </div>
        </div>
        `;

        document.getElementById('modal-shopping').innerHTML = html;
    }
}

const shopping = new Shopping();