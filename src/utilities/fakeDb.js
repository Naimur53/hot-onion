// use local storage as your db for now
const addToDb = (data, value) => {
    const exists = getDb();
    data["quantity"] = value;
    let shopping_cart = [];
    if (!exists) {
        console.log('his');
        shopping_cart.push(data);
        console.log(shopping_cart);
    }
    else {
        shopping_cart = JSON.parse(exists);
        const check = shopping_cart.filter(singleData => singleData._id === data._id);
        if (check) {
            check[0] = data;
            const remove = shopping_cart.filter(singleData => singleData._id !== data._id);
            remove.push(check[0])
            shopping_cart = remove;

        }
        else {
            shopping_cart.push(data);
        }
    }
    updateDb(shopping_cart);
    console.log(JSON.parse(getDb()));

}

const getDb = () => localStorage.getItem('shopping_cart');

const updateDb = cart => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
}

const removeOrders = () => {
    localStorage.removeItem('shopping_cart');
}

const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
    localStorage.removeItem('shopping_cart');
}

export { addToDb, removeOrders, clearTheCart, getStoredCart }