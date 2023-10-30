class Like {

    constructor() {
        this.clickCount = false;
        this.classScroll = 'no_scroll';
    }

    handlerOpenShoppingPage() {
        if(!this.clickCount){
            this.clickCount = true;
            $('body').toggleClass(this.classScroll);
            shopping.render();
        }
        else{
            shopping.handleClear();
        }
    }

    render(count) {
        const html = `
            <div class="navbar-counter" onclick="like.handlerOpenShoppingPage();">
                <span class="navbar-counter__text">${count}</span>
                <span class="navbar-counter__like"></span>
            </div>
        `;

        document.getElementById('navbar-like').innerHTML = html;
    }
}

const like = new Like();

const goodsStore = localStorageUtil.getGoods();

like.render(goodsStore.length);