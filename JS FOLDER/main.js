

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



