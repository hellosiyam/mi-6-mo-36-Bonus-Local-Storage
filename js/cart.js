const addProduct = () => {
    const productInput = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');

    const product = productInput.value;
    const quantity = productQuantity.value;

    productInput.value = '';
    productQuantity.value = '';

    console.log(product, quantity);
    showProduct(product, quantity)
    
}

const showProduct = (product, quantity) => {
    const ul = document.getElementById('productContainer');

    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;

    ul.appendChild(li)
}