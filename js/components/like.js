class Like {
    render(count) {
        const html = `
            <div class="navbar-counter">
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