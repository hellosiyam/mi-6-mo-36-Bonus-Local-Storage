// Find Product
const findProduct = () => {
    let cart = {};
    const storeCart = localStorage.getItem('cart');
    if (storeCart) {
        cart = JSON.parse(storeCart);
    }
    return cart;
};

// Local Storage (Renamed Function)
const saveToLocalStorage = (product, quantity) => {
    const storeCart = findProduct();
    storeCart[product] = quantity;
    const dataStringify = JSON.stringify(storeCart);
    localStorage.setItem('cart', dataStringify);
};

// Display Data
const displayStoreData = () => {
    const data = findProduct();
    for (const product in data) {
        const quantity = data[product];
        displayProduct(product, quantity);
    }
};
displayStoreData();
