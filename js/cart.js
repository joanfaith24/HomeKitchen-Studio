////////-------ADD AND REMOVE FROM CART--------------////////
let cartArray = JSON.parse(localStorage.getItem('myCart') || "[]");

// Safe element getter — prevents null crashes if element isn't on page
function el(selector) { return document.querySelector(selector); }

//---- OPEN and CLOSE CART modal --------////
function openCartPop(event) {
    if (event) event.stopPropagation();
    const cartSidePopUpPage = el('.cartSidePopUpPage');
    if (!cartSidePopUpPage) return;
    cartSidePopUpPage.style.display = "block";
    cartSidePopUpPage.classList.remove('hideCart');
    renderCart();
}

function closePop(event) {
    if (event) event.stopPropagation();
    const cartSidePopUpPage = el('.cartSidePopUpPage');
    if (cartSidePopUpPage) cartSidePopUpPage.classList.add('hideCart');
}
//////////////////////////////////////////////


// add (add item or increment quantity)
function addToCart(productName, price, image) {
    const existing = cartArray.find(item => item.name === productName);
    if (existing) {
        existing.quantity += 1;
    } else {
        cartArray.push({ name: productName, price: price, image: image, quantity: 1 });
    }
    saveCart();
    renderCart();
}

// save
function saveCart() {
    localStorage.setItem('myCart', JSON.stringify(cartArray));
}

// FIX: robust price parser — strips ALL non-numeric chars except dot, handles commas
function parsePrice(priceText) {
    const cleaned = priceText.replace(/[^\d.,]/g, '').replace(/,/g, '');
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? 0 : parsed;
}

// render (show list in cart popup)
function renderCart() {
    const cartItemsContainer = el('.itemsOnCartDetails');
    const cartTotalCost = el('.subTotalPrice');
    const cartQty = el('.totalItems');
    const cartBadge = el('.cartBadge');
    const checkoutButton = el('#checkoutSideCartButton');

    // Always update badge regardless of whether popup exists
    let totalQty = cartArray.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) cartBadge.textContent = totalQty;
    if (cartQty) cartQty.textContent = totalQty;

    if (!cartItemsContainer) return; // popup doesn't exist on this page, stop here

    // FIX: save which checkboxes were checked before rebuilding HTML
    const checkedBefore = new Set();
    cartItemsContainer.querySelectorAll('.removeCheckbox:checked').forEach(cb => {
        checkedBefore.add(cb.dataset.name);
    });

    cartItemsContainer.innerHTML = "";
    let total = 0;

    // ✅ EMPTY CART STATE
    if (cartArray.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="emptyCartMessage">
                <span class="emptyCartIcon">🛒</span>
                <p class="emptyCartText">Your cart is empty.</p>
                <p class="emptyCartSub">Browse our products and add something you love!</p>
                <button class="emptyCartBrowseBtn" onclick="closePop(event)">Browse Products</button>
            </div>
        `;
        if (cartTotalCost) cartTotalCost.textContent = '0.00';
        if (checkoutButton) checkoutButton.style.display = 'none';
        return;
    }

    // cart has items — make sure checkout button is visible
    if (checkoutButton) checkoutButton.style.display = '';

    cartArray.forEach(item => {
        total += item.price * item.quantity;
        cartItemsContainer.innerHTML +=
            `<div class="cartItems">
                <div class="eachCartOnPopUp">
                    <input type="checkbox" class="removeCheckbox" data-name="${item.name}">
                    <img src="${item.image}">
                </div>
                <div class="cartPopDetails">
                    <p class="eachCartLabel">${item.name}</p>
                    <p class="eachCartPrice">₱${item.price.toFixed(2)}</p>
                    <div class="cartAddSubtractButtons">
                        <button class="plusBtn" data-name="${item.name}">+</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="minusBtn" data-name="${item.name}">-</button>
                        <span class="eachItemTotal">= ₱${(item.price * item.quantity).toFixed(2)}</span><i class="fa-solid fa-trash removeTrash" data-name="${item.name}"></i>
                    </div>
                </div>
            </div>`;
    });

    if (cartTotalCost) cartTotalCost.textContent = total.toFixed(2);

    // FIX: restore previously checked checkboxes after re-render
    cartItemsContainer.querySelectorAll('.removeCheckbox').forEach(cb => {
        if (checkedBefore.has(cb.dataset.name)) {
            cb.checked = true;
        }
    });

    // FIX: also update checkout button color to reflect restored checkboxes
    if (checkoutButton) {
        const anyChecked = cartItemsContainer.querySelectorAll('.removeCheckbox:checked').length > 0;
        checkoutButton.style.backgroundColor = anyChecked ? "green" : "";
    }
}


// Delegated listener for dynamically rendered cart popup buttons
document.addEventListener('click', function (e) {

    if (e.target.classList.contains('plusBtn')) {
        const name = e.target.dataset.name;
        const item = cartArray.find(i => i.name === name);
        if (item) { item.quantity += 1; saveCart(); renderCart(); syncPageButtons(); }
    }

    if (e.target.classList.contains('minusBtn')) {
        const name = e.target.dataset.name;
        const item = cartArray.find(i => i.name === name);
        if (item) {
            item.quantity -= 1;
            if (item.quantity <= 0) cartArray = cartArray.filter(i => i.name !== name);
            saveCart(); renderCart(); syncPageButtons();
        }
    }

    if (e.target.classList.contains('removeTrash')) {
        const name = e.target.dataset.name;
        cartArray = cartArray.filter(i => i.name !== name);
        saveCart(); renderCart(); syncPageButtons();
    }

    if (e.target.classList.contains('removeCheckbox')) {
        const checkoutButton = el("#checkoutSideCartButton");
        if (checkoutButton) {
            const anyChecked = document.querySelectorAll('.removeCheckbox:checked').length > 0;
            checkoutButton.style.backgroundColor = anyChecked ? "green" : "";
            checkoutButton.style.color = anyChecked ? "whitesmoke" : "";
        }
    }
});


// -------FLOATING POPUP FUNCTION-------
// Injects a floating message above the clicked button, floats up and fades out
function showFloatingPopup(anchorEl, message, type) {
    // Remove any existing popup on this anchor first
    const existing = anchorEl.querySelector('.floatingPopupMsg');
    if (existing) existing.remove();

    // Inject keyframes once
    if (!document.getElementById('floatUpStyle')) {
        const style = document.createElement('style');
        style.id = 'floatUpStyle';
        style.textContent = `
            @keyframes floatUp {
                0%   { opacity: 1; transform: translateX(-50%) translateY(0px); }
                70%  { opacity: 1; transform: translateX(-50%) translateY(-20px); }
                100% { opacity: 0; transform: translateX(-50%) translateY(-30px); }
            }
            .floatingPopupMsg {
                position: absolute;
                bottom: 110%;
                left: 50%;
                transform: translateX(-50%);
                padding: 6px 14px;
                border-radius: 4px;
                font-size: 12px;
                font-weight: 600;
                white-space: nowrap;
                pointer-events: none;
                z-index: 99;
                animation: floatUp 1s ease-out forwards;
            }
            .floatingPopupMsg.added   { background-color: #28a745; color: #fff; }
            .floatingPopupMsg.removed { background-color: #c0392b; color: #fff; }
        `;
        document.head.appendChild(style);
    }

    const popup = document.createElement('div');
    popup.classList.add('floatingPopupMsg', type);
    popup.textContent = message;

    anchorEl.appendChild(popup);
    setTimeout(() => popup.remove(), 1000);
}


// Add to Cart buttons on the page
const AllAddButtons = document.querySelectorAll('.addToCart');
const AllTrashButtons = document.querySelectorAll('.fa-trash-can');

AllAddButtons.forEach(add => {
    add.addEventListener('click', (e) => {
        const eachProduct = add.closest('.eachProduct');
        let productName = eachProduct.querySelector('.productCaption').innerText.trim();
        let eachPriceText = eachProduct.querySelector('.price').innerText;

        // FIX: parsePrice handles ₱1,249.00 correctly on all devices/browsers
        let price = parsePrice(eachPriceText);
        let image = eachProduct.querySelector('img').src;

        addToCart(productName, price, image);
        syncPageButtons();

        // Floating popup above the Add to Cart button
        const wrapper = add.closest('.addandTrashSection');
        if (wrapper) showFloatingPopup(wrapper, '✓ Added to Cart', 'added');
    });
});


// Trash buttons on the page
AllTrashButtons.forEach(trash => {
    trash.addEventListener('click', () => {
        const eachProduct = trash.closest('.eachProduct');
        const productName = eachProduct.querySelector('.productCaption').innerText.trim();
        const eachAdd = eachProduct.querySelector('.addToCart');
        const eachTrash = eachProduct.querySelector('.fa-trash-can');

        eachAdd.textContent = "Add to Cart";
        eachAdd.style.backgroundColor = "";
        eachAdd.style.color = "";
        if (eachTrash) eachTrash.style.visibility = "hidden";

        // Floating popup above the trash button
        const wrapper = trash.closest('.addandTrashSection');
        if (wrapper) showFloatingPopup(wrapper, '✕ Removed from Cart', 'removed');

        cartArray = cartArray.filter(item => item.name !== productName);
        saveCart();
        renderCart();
    });
});


// SYNC PAGE BUTTONS — reflect cartArray state on all visible product buttons
function syncPageButtons() {
    AllAddButtons.forEach(add => {
        const eachProduct = add.closest('.eachProduct');
        const productName = eachProduct.querySelector('.productCaption').innerText.trim();
        const eachAddButton = eachProduct.querySelector('.addToCart');
        let eachTrash = eachProduct.querySelector('.fa-trash-can');

        if (cartArray.some(item => item.name === productName)) {
            eachAddButton.style.backgroundColor = "#2B2B2B";
            eachAddButton.style.color = "#ffffff";
            eachAddButton.textContent = "Added to Cart";
            if (eachTrash) eachTrash.style.visibility = "visible";
        } else {
            eachAddButton.style.backgroundColor = "";
            eachAddButton.textContent = "Add to Cart";
            if (eachTrash) eachTrash.style.visibility = "hidden";
        }
    });
}


// PROCEED TO CHECKOUT — shows fullscreen overlay of checked items only
function proceedToCheckout() {
    const checkedBoxes = document.querySelectorAll('.removeCheckbox:checked');

    // if none checked, checkout all items
    let checkedNames = [];
    if (checkedBoxes.length === 0) {
        checkedNames = cartArray.map(item => item.name);
    } else {
        checkedBoxes.forEach(cb => checkedNames.push(cb.dataset.name));
    }

    const checkedItems = cartArray.filter(item => checkedNames.includes(item.name));
    if (checkedItems.length === 0) return;

    const overallTotal = checkedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // build item rows
    let rowsHTML = checkedItems.map(item => `
        <div class="checkoutItem">
            <img src="${item.image}" alt="${item.name}">
            <div class="checkoutItemDetails">
                <p class="checkoutItemName">${item.name}</p>
                <p class="checkoutItemPrice">&#8369;${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <p class="checkoutItemTotal">&#8369;${(item.price * item.quantity).toFixed(2)}</p>
        </div>
    `).join('');

    // inject overlay
    const overlayHTML = `
        <div class="checkoutOverlay" id="checkoutOverlay">
            <div class="checkoutPage">
                <div class="checkoutHeader">
                    <h2>Order Summary</h2>
                    <button class="closeCheckoutBtn" id="closeCheckoutBtn">&times;</button>
                </div>

                <div class="checkoutItemsList">
                    ${rowsHTML}

                    <div class="checkoutFormSection">
                        <h3 class="checkoutFormTitle">Delivery Details</h3>

                        <div class="checkoutField">
                            <label>Customer Name</label>
                            <input type="text" id="checkoutName" placeholder="Enter your full name">
                            <p class="checkoutFieldError" id="checkoutNameError"></p>
                        </div>

                        <div class="checkoutField">
                            <label>Contact Number</label>
                            <input type="tel" id="checkoutContact" placeholder="e.g. 09XX XXX XXXX">
                            <p class="checkoutFieldError" id="checkoutContactError"></p>
                        </div>

                        <div class="checkoutField">
                            <label>Delivery Address</label>
                            <textarea id="checkoutAddress" placeholder="House No., Street, Barangay, City, Province"></textarea>
                            <p class="checkoutFieldError" id="checkoutAddressError"></p>
                        </div>

                        <div class="checkoutField">
                            <label>Payment Method</label>
                            <select id="checkoutPayment">
                                <option value="">-- Select Payment Method --</option>
                                <option value="Cash on Delivery">Cash on Delivery</option>
                                <option value="GCash">GCash</option>
                                <option value="Maya">Maya</option>
                                <option value="Credit/Debit Card">Credit/Debit Card</option>
                                <option value="Bank Transfer">Bank Transfer</option>
                            </select>
                            <p class="checkoutFieldError" id="checkoutPaymentError"></p>
                        </div>
                    </div>
                </div>

                <div class="checkoutFooter">
                    <p class="checkoutOverallLabel">Overall Total: <strong>&#8369;${overallTotal.toFixed(2)}</strong></p>
                    <button class="confirmCheckoutBtn" id="confirmCheckoutBtn">Confirm Order</button>
                    <button class="cancelCheckoutBtn" id="cancelCheckoutBtn">Back to Cart</button>
                </div>
            </div>
        </div>
    `;

    // remove existing overlay if any
    const existing = document.getElementById('checkoutOverlay');
    if (existing) existing.remove();

    document.body.insertAdjacentHTML('beforeend', overlayHTML);

    // close / back to cart
    document.getElementById('closeCheckoutBtn').addEventListener('click', closeCheckout);
    document.getElementById('cancelCheckoutBtn').addEventListener('click', closeCheckout);

    // confirm order — validate fields first, then remove checked items
    document.getElementById('confirmCheckoutBtn').addEventListener('click', () => {
        const name    = document.getElementById('checkoutName').value.trim();
        const contact = document.getElementById('checkoutContact').value.trim();
        const address = document.getElementById('checkoutAddress').value.trim();
        const payment = document.getElementById('checkoutPayment').value;

        // clear previous errors
        document.getElementById('checkoutNameError').textContent    = '';
        document.getElementById('checkoutContactError').textContent = '';
        document.getElementById('checkoutAddressError').textContent = '';
        document.getElementById('checkoutPaymentError').textContent = '';

        let hasError = false;

        if (!name) {
            document.getElementById('checkoutNameError').textContent = 'Please enter your full name.';
            hasError = true;
        }
        if (!contact) {
            document.getElementById('checkoutContactError').textContent = 'Please enter your contact number.';
            hasError = true;
        } else if (!/^[0-9+\s\-]{7,15}$/.test(contact)) {
            document.getElementById('checkoutContactError').textContent = 'Please enter a valid contact number.';
            hasError = true;
        }
        if (!address) {
            document.getElementById('checkoutAddressError').textContent = 'Please enter your delivery address.';
            hasError = true;
        }
        if (!payment) {
            document.getElementById('checkoutPaymentError').textContent = 'Please select a payment method.';
            hasError = true;
        }

        if (hasError) return;

        // all valid — show confirmation popup first
        showConfirmDetailsPopup(name, contact, address, payment, overallTotal, checkedNames);
    });
}

function closeCheckout() {
    const overlay = document.getElementById('checkoutOverlay');
    if (overlay) overlay.remove();
}

function showConfirmDetailsPopup(name, contact, address, payment, total, checkedNames) {
    const popup = document.createElement('div');
    popup.id = "confirmDetailsOverlay";
    popup.style.cssText = `
        position:fixed; top:0; left:0; width:100%; height:100%;
        background:rgba(0,0,0,0.6); z-index:10000;
        display:flex; align-items:center; justify-content:center;
    `;
    popup.innerHTML = `
        <div style="
            background:#fff; border-radius:14px; padding:28px 24px;
            max-width:340px; width:90%; text-align:left;
            box-shadow:0 8px 32px rgba(0,0,0,0.3);
        ">
            <h3 style="margin:0 0 14px; font-size:1rem; color:#222; text-align:center;">
                Are these details correct?
            </h3>
            <div style="font-size:0.87rem; color:#444; line-height:1.7; margin-bottom:20px; background:#f5f5f5; padding:12px; border-radius:8px;">
                <p style="margin:0;"><strong>Name:</strong> ${name}</p>
                <p style="margin:0;"><strong>Contact:</strong> ${contact}</p>
                <p style="margin:0;"><strong>Address:</strong> ${address}</p>
                <p style="margin:0;"><strong>Payment:</strong> ${payment}</p>
                <p style="margin:0;"><strong>Total:</strong> &#8369;${total.toFixed(2)}</p>
            </div>
            <div style="display:flex; flex-direction:column; gap:10px;">
                <button id="confirmDetailsYes" class="confirmCheckoutBtn">Yes, Place Order</button>
                <button id="confirmDetailsNo" class="cancelCheckoutBtn">No, Edit</button>
            </div>
        </div>
    `;
    document.body.appendChild(popup);

    document.getElementById('confirmDetailsNo').addEventListener('click', () => {
        popup.remove();
    });

    document.getElementById('confirmDetailsYes').addEventListener('click', () => {
        popup.remove();
        cartArray = cartArray.filter(item => !checkedNames.includes(item.name));
        saveCart();
        renderCart();
        syncPageButtons();
        closeCheckout();
        showOrderLoading(name, payment, total);
    });
}

function showOrderLoading(name, payment, total) {
    const loader = document.createElement('div');
    loader.id = "orderLoadingOverlay";
    loader.style.cssText = `
        position:fixed; top:0; left:0; width:100%; height:100%;
        background:rgba(0,0,0,0.55); z-index:10000;
        display:flex; align-items:center; justify-content:center;
    `;
    loader.innerHTML = `
        <div style="
            background:#fff; border-radius:14px; padding:36px 28px;
            max-width:320px; width:90%; text-align:center;
            box-shadow:0 8px 32px rgba(0,0,0,0.25);
        ">
            <p style="margin:0 0 20px; font-size:1rem; font-weight:600; color:#333;">Processing your order...</p>
            <div style="display:flex; justify-content:center; gap:10px;" id="loadingDots">
                <div class="loadingDot"></div>
                <div class="loadingDot"></div>
                <div class="loadingDot"></div>
            </div>
        </div>
    `;
    document.body.appendChild(loader);

    const dots = loader.querySelectorAll('.loadingDot');
    dots.forEach((dot, i) => {
        dot.style.cssText = `
            width:14px; height:14px; border-radius:50%;
            background:#28a745; opacity:0.3;
            animation: dotPulse 0.8s ease-in-out ${i * 0.25}s infinite alternate;
        `;
    });

    if (!document.getElementById('dotPulseStyle')) {
        const style = document.createElement('style');
        style.id = 'dotPulseStyle';
        style.textContent = `
            @keyframes dotPulse {
                from { opacity: 0.3; transform: scale(0.85); }
                to   { opacity: 1;   transform: scale(1.2); }
            }
        `;
        document.head.appendChild(style);
    }

    setTimeout(() => {
        loader.remove();
        showOrderConfirmed(name, payment, total);
    }, 1500);
}

function showOrderConfirmed(name, payment, total) {
    const confirmed = document.createElement('div');
    confirmed.id = "orderSuccessOverlay";
    confirmed.style.cssText = `
        position:fixed; top:0; left:0; width:100%; height:100%;
        background:rgba(0,0,0,0.55); z-index:9999;
        display:flex; align-items:center; justify-content:center;
    `;
    confirmed.innerHTML = `
        <div style="
            background:#fff; border-radius:14px; padding:36px 28px;
            max-width:340px; width:90%; text-align:center;
            box-shadow:0 8px 32px rgba(0,0,0,0.25);
        ">
            <div style="font-size:3rem; margin-bottom:10px;">&#10003;</div>
            <h2 style="margin:0 0 8px; color:#28a745; font-size:1.3rem;">Order Successfully Placed!</h2>
            <p style="margin:0 0 6px; font-size:0.95rem; color:#333;">Thank you, <strong>${name}</strong>!</p>
            <p style="margin:0 0 6px; font-size:0.9rem; color:#555;">Payment: <strong>${payment}</strong></p>
            <p style="margin:0 0 20px; font-size:0.9rem; color:#555;">Total: <strong>&#8369;${total.toFixed(2)}</strong></p>
            <button id="closeOrderSuccess" class="confirmCheckoutBtn">Done</button>
        </div>
    `;
    document.body.appendChild(confirmed);
    document.getElementById('closeOrderSuccess').addEventListener('click', () => {
        confirmed.remove();
        const checkoutButton = el('#checkoutSideCartButton');
        if (checkoutButton) { checkoutButton.style.backgroundColor = ""; checkoutButton.style.color = ""; }
    });
}


// DOMContentLoaded — sync everything from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('cart loaded');
    renderCart();
    syncPageButtons();
});
