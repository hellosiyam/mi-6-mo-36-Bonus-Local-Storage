// Add Product
const addProduct = () => {
    const productInput = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');

    const product = productInput.value;
    const quantity = productQuantity.value;

    productInput.value = '';
    productQuantity.value = '';

    console.log(product, quantity);
    displayProduct(product, quantity)
    localDataStore(product, quantity)

    
}
// Display Product
const displayProduct = (product, quantity) => {
    const ul = document.getElementById('productContainer');

    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;

    ul.appendChild(li)
}

// Find Product
const findProduct = () => {
    let cart = {};
    const storeCart = localStorage.getItem('cart');
    if(storeCart){
        cart = JSON.parse(storeCart);
    }
    return cart;
}

//Local data store
const localDataStore = (product, quantity) => {
    const dataStore = findProduct();
    dataStore[product] = quantity;
    const dataStringify = JSON.stringify(dataStore);
    localStorage.setItem('cart', dataStringify);
}

//Display local Data
const displayLocalData = () => {
    const localData = findProduct();
    for(const product in localData){
        const quantity = localData[product];
        displayProduct(product, quantity)
    }
}
displayLocalData()

