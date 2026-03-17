// Function to add items to the shared storage
function addToCart(name, price) {
    // 1. Get existing cart from LocalStorage or create empty array
    let cart = JSON.parse(localStorage.getItem('tara_cart')) || [];

    // 2. Add the new item
    cart.push({ name, price });

    // 3. Save back to LocalStorage
    localStorage.setItem('tara_cart', JSON.stringify(cart));

    alert(`${name} has been added to your selection.`);
    updateCartCount();
}

// Function to load and display items on the Cart Page
function displayCart() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('cart-total');
    let cart = JSON.parse(localStorage.getItem('tara_cart')) || [];
    
    if (!cartList) return; // Exit if not on the cart page

    cartList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartList.innerHTML += `
            <div style="display:flex; justify-content:space-between; padding:1rem 0; border-bottom:1px solid #333;">
                <span>${item.name}</span>
                <span>$${item.price} <button onclick="removeFromCart(${index})" style="color:red; margin-left:10px; background:none; border:none; cursor:pointer;">&times;</button></span>
            </div>
        `;
    });

    totalDisplay.innerText = `$${total}`;
}

// Function to remove an item
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('tara_cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('tara_cart', JSON.stringify(cart));
    displayCart();
}

// Run when page loads
window.onload = displayCart;
