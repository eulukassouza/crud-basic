// script.js
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function saveProduct() {
    const productName = document.getElementById('productName').value;
    const productValue = parseFloat(document.getElementById('productValue').value);
    const productQuantity = parseInt(document.getElementById('productQuantity').value);

    if (productName && !isNaN(productValue) && !isNaN(productQuantity) && productValue > 0 && productQuantity > 0) {
        const item = { name: productName, price: productValue, quantity: productQuantity };
        cartItems.push(item);
        updateCart();
        saveToLocalStorage();
        clearForm();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItemsElement.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.textContent = `${item.name} - R$${item.price.toFixed(2)} x ${item.quantity}`;
        cartItemsElement.appendChild(li);

        total += item.price * item.quantity;
    });

    totalElement.textContent = `Total: R$${total.toFixed(2)}`;
}

function saveProductsToLocalStorage() {
    localStorage.setItem('savedProducts', JSON.stringify(cartItems));
    alert('Produtos cadastrados foram salvos com sucesso!');
}

function clearForm() {
    document.getElementById('productName').value = '';
    document.getElementById('productValue').value = '';
    document.getElementById('productQuantity').value = '';
}

function saveToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
