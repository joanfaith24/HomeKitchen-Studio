
//BACK-TO-TOP BUTTON//
const backtotop = document.getElementById('backtotop');

window.onscroll = function scrollPage()
{
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    {
        backtotop.style.display = 'block'
    }
    else
    {
        backtotop.style.display = 'none';
    }
}

backtotop.onclick = function (){
    window.scrollTo
    ({
        top: 0,
        behavior: 'smooth'
    })
};



//ADD TO CART BUTTON-FEATURED//

const addtocart = document.querySelectorAll('.addtocartf');

let cart = getCart();

function getCart()
{
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function savetoCart(cart)
{
    localStorage.setItem('cart', JSON.stringify(cart));
}

addtocart.forEach(button => {
    button.addEventListener('click',()=>{
        const wholefeature = button.closest('.wholefeature');

        const product = {
            id: wholefeature.dataset.id,
            name: wholefeature.dataset.name,
            price: Number(wholefeature.dataset.id),
            quantity: 1
        }

        const existing = cart.find(item => item.id === product.id);

        if(existing){
            existing.quantity +=1;
        }
        else{
            cart.push(product);
        }

        savetoCart(cart);

        console.log(cart);
    }) ;
});


//ADD TO CART BUTTON-SPECIAL DEALS//

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



