

//CART PAGE//

const cartItems = document.getElementById('cartItems');

function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function displayCart() {
  const cart = getCart();

  // if cart is empty
  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty</p>";
    return;
  }

  cartItems.innerHTML = "";

  cart.forEach(item => {
    const div = document.createElement('div');

    div.innerHTML = `
      <h4>${item.name}</h4>
      <p>Price: ₱${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
      <hr>
    `;

    cartItems.appendChild(div);
  });
}

// run when page loads
displayCart();