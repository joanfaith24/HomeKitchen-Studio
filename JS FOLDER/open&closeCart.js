
// OPEN CART-CONTENTS //

let cartSidePopUpPage = document.querySelector('.cartSidePopUpPage');

let closeCartPop = document.getElementById('closeCartPop');



function openCartPop(event)
{
if (event) event.stopPropagation();

    cartSidePopUpPage.style.display = "block"; 
    cartSidePopUpPage.classList.remove('hideCart');
}

function closePop(event)
{
    if(event) event.stopPropagation();
    cartSidePopUpPage.classList.add('hideCart');
}

