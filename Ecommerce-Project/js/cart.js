//JavaScript for Cart Management
//Initialize cart on page load
function initCart() {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
}

//Get cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

//Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

//Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cart = getCart();
        cart.push(product);
        saveCart(cart);
        updateCartCount();
        showNotification('Product added to cart!');
    }
}

//Add to cart without notification (for quantity increase)
function addToCartSilent(product) {
    const cart = getCart();
    cart.push(product);
    saveCart(cart);
}

//Clear cart
function clearCart() {
    localStorage.setItem('cart', JSON.stringify([]));
    updateCartCount();
}

//Update cart count in navbar
function updateCartCount() {
    const cart = getCart();
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.textContent = cart.length;
    }
}

//Codes for Notifications
function showNotification(message) {
    //Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    //Notification Popup
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    //For hiding and removing notifications
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}
initCart();