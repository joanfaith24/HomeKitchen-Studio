
let addToCart = document.querySelectorAll('.addToCart');
let cartBadge = document.querySelector('.cartBadge');
let cart = JSON.parse(localStorage.getItem('myCart')) || [];
let cartItems = document.querySelector('.itemsOnCartDetails');
let totalItems = document.querySelector('.totalItems');
let totalPrice = document.querySelector('.subTotalPrice');


function updateUI() {
    cartBadge.textContent = cart.length;
    if (totalItems) totalItems.textContent = cart.length;

    addToCart.forEach(button => {
        let eachProduct = button.closest('.eachProduct');
        let name = eachProduct.querySelector('.productCaption').textContent;
        let trashIcon = eachProduct.querySelector('.trash');

        const isInCart = cart.some(item => item.name === name);

        if (isInCart) {
            button.textContent = "Added to Cart";
            button.style.backgroundColor = "green";
            button.style.color = "white";
            if (trashIcon) {
                trashIcon.style.display = "inline-block";
            }
        } 
        else {
            button.textContent = "Add to Cart";
            button.style.backgroundColor = ""; 
            button.style.color = '';
            if (trashIcon)
            {
                trashIcon.style.display = "none";
            }
        }
    });
}


function renderCart() {
    let currentTotal = 0;

    if (cartItems) {
        cartItems.innerHTML = "";
        cart.forEach(item => {
            let priceNumber = parseFloat(item.price.replace(/[₱,]/g, ""));

            let qty = item.quantity || 1;

            let itemTotal = priceNumber * qty;
            currentTotal += itemTotal;
            const productRow = `
<div class="cart-item-row" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; gap: 10px; width: 100%;">
        <img src="${item.image}" style="width: 50px; flex-shrink: 0;">
        
        <div style="flex-grow: 1; min-width: 0;">
            <p style="margin: 0; font-weight: bold; font-size:10px;">${item.name}</p>
            <p style="margin: 0; color: #888; font-size:11px;">${item.price}</p>
        </div>

        <div style="display: flex; flex-direction: column; align-items: flex-end; flex-shrink: 0;">
            <div style="display: flex; align-items: center; gap: 5px; margin-bottom: 4px;">
                <button onclick="changeQty('${item.name}', -1)" style="padding: 0 5px; cursor: pointer;">-</button>
                <span style="min-width: 15px; text-align: center; font-size: 13px;">${qty}</span>
                <button onclick="changeQty('${item.name}', 1)" style="padding: 0 5px; cursor: pointer;">+</button>
                
                <div onclick="removeItem('${item.name}')" style="cursor:pointer; color: red; margin-left: 5px;">
                    <i class="fa-solid fa-trash" style="font-size: 12px;"></i>
                </div>
            </div>
            <p style="margin: 0; font-weight: 200; font-size: 12px; color: #333;">Subtotal
                ₱${itemTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
        </div>
    </div>`;
            cartItems.innerHTML += productRow;
        });
    }

    if (totalPrice) 
        {
        totalPrice.textContent = "₱" + currentTotal.toLocaleString('en-US', { minimumFractionDigits: 2 });
        }
    
    updateUI(); // Keep main page buttons in sync
}

function changeQty(name, amount) {
    let product = cart.find(item => item.name === name);

if (product) {
        // Only subtract if quantity is greater than 1
        if (amount === -1 && (product.quantity || 1) <= 1) {
            return; // Do nothing
        }

        product.quantity = (product.quantity || 1) + amount;
        
        localStorage.setItem('myCart', JSON.stringify(cart));
        renderCart();
    }
}

// --- 3. ACTIONS: Add and Remove ---
function addItem(product)
{
    // Check if item already exists in cart
    let existingItem = cart.find(item => item.name === product.name);

    if (existingItem)
    {
        existingItem.quantity += 1; // Increase quantity
    } 
    else
    {
        product.quantity = 1; // Give new item a starting quantity of 1
        cart.push(product);
    }
    localStorage.setItem('myCart', JSON.stringify(cart));
    renderCart();
}

function removeItem(product) {
    cart = cart.filter(item => item.name !== product);
    localStorage.setItem('myCart', JSON.stringify(cart));
    renderCart();
}

// --- 4. INITIAL SETUP: Listeners for buttons and trash ---
addToCart.forEach(button => {
    let eachProduct = button.closest('.eachProduct');
    let trashIcon = eachProduct.querySelector('.trash');
    
    // Get product data
    let product = {
        name: eachProduct.querySelector('.productCaption').textContent,
        price: eachProduct.querySelector('.price').textContent,
        image: eachProduct.querySelector('img').src
    };

    // Button Click Logic
    button.addEventListener('click', () => {
        if (!cart.some(item => item.name === product.name)) {
            addItem(product);
        }
    });

    // Trash Icon Click Logic (Main Page)
    if (trashIcon) {
        trashIcon.addEventListener('click', () => {
            removeItem(product.name);
        });
    }
});

// Run on load
renderCart();


//ADD TO CART POP UP

let added = document.querySelector('.addToCartPopUp');

addToCart.forEach(button=>{
button.addEventListener('click', ()=>
{
    
    
        added.style.display = "flex";
        added.classList.add('fadePop');

        setTimeout(()=>{
            added.style.display = 'none';
            added.classList.remove('fadePop');
        }, 1000);
});
});
