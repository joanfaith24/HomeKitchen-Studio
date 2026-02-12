
// OPEN CART-CONTENTS //

let cartSidePopUpPage = document.querySelector('.cartSidePopUpPage');

let closeCartPop = document.getElementById('closeCartPop');



function openCartPop(event)
{
    event.stopPropagation();
    cartSidePopUpPage.classList.remove('hideCart');
}

function closePop(event)
{
    if(event) event.stopPropagation();
    cartSidePopUpPage.classList.add('hideCart');
}

const sideItemContainer = document.querySelector('.itemsOnCartDetails');

function displayCart()
{
    sideItemContainer.innerHTML = "";

    cart.forEach((item, index) =>{

        const itemRow = `
            <div class="cartItem">
                <img src="${item.image}">
                <span>${item.name}</span>
                <span>${item.price}</span>
                <button onclick="removeItem(${index})"><i class="fa-solid fa-trash-can deleteItem" id="trashCan"></i></button>
            </div>

        `;
        sideItemContainer.innerHTML += itemRow;
    });
}





// SEARCH INPUT //


function filterProducts() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();

    const filtered = allProducts.filter(product => {
        return product.name.toLowerCase().includes(searchValue);
    });

    renderCart(filtered);
}