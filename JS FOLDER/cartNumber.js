
//UPDATE CART QUANTITY//


let cartNumber = document.getElementById('cartNumber');
let cartTotal = document.querySelectorAll('.addtocart, .addtocartf');

function getCart()
{
    return Number(localStorage.getItem('all')) || 0 ;
}

function saveCart(myCart)
{
    localStorage.setItem("all", myCart);
}

cartNumber.textContent = getCart();
cartTotal.forEach(button =>
{
    button.addEventListener('click', () =>
    {
        let myCart= getCart();
        myCart ++;

        saveCart(myCart);
    cartNumber.textContent = myCart;
    })
})









