//ADD TO CART BUTTON-(shop now)SPECIAL DEALS//

const addtocartSpecial = document.querySelectorAll('.addtocart');

let mySpecialCart = getSpecialCart();

function getSpecialCart() {
return JSON.parse(localStorage.getItem('mySpecialCart')) || [];

}

function newSpecialCart(mySpecialCart)
{
    localStorage.setItem('mySpecialCart', JSON.stringify(mySpecialCart));
}

addtocartSpecial.forEach(button =>{
    button.addEventListener('click', () =>{

    let deals = button.closest('.dealsImg');
    let updateDisplay = deals.querySelector('.updateCart');

    let items = {
        id: deals.dataset.id,
        name: deals.dataset.name,
        oldPrice: Number(deals.dataset.oldPrice),
        newPrice: Number(deals.dataset.newPrice),
        quantity: 1
    }

    let alreadyInCart = mySpecialCart.find(item => item.id === items.id);

    if(alreadyInCart){
        alreadyInCart.quantity += 1;
    }else{
        mySpecialCart.push(items);
    }

    newSpecialCart(mySpecialCart);
    updateDisplay.textContent =  "Added to Cart!";
    console.log(mySpecialCart);
});
});