class LocalStorageUtil {
    constructor() {
        this.keyName = 'goods';
    }

    getGoods() {
        const goodsLocalStorage = localStorage.getItem(this.keyName);
        if (goodsLocalStorage !==null ) {
            return JSON.parse(goodsLocalStorage);
        }
        return [];
    }

    putGoods(id) {
        let goods = this.getGoods();
        let pushGood = false;
        const index = goods.indexOf(id);

        if(index === -1) {
            goods.push(id);
            pushGood = true;
        } else {
            goods.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(goods));

        return { pushGood, goods}
    }
}

const localStorageUtil = new LocalStorageUtil();
