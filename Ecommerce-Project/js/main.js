//JavaScript for home page
//Load featured products on home page
window.addEventListener('DOMContentLoaded', () => {
    const featuredContainer = document.getElementById('featured-products');
    if (featuredContainer) {
        loadFeaturedProducts();
    }
    updateCartCount();
});

//Load featured products (first 4 products)
function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    const featured = products.slice(0, 4);

    featured.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">₹${product.price}</p>
                <div class="product-actions">
                    <a href="product-details.html?id=${product.id}" class="btn btn-secondary">View Details</a>
                    <button onclick="addToCart(${product.id})" class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

//Filter by category (redirect to products page with filter)
function filterByCategory(category) {
    window.location.href = `products.html?category=${category}`;
}
