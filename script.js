
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



//ADD TO CART BUTTON//

const addtocartf = document.querySelectorAll('.addtocartf');

let cart = getCart();

function getCart(){
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveToCart(cart)
{
    localStorage.setItem('cart', JSON.stringify(cart));
}

addtocartf.forEach(button=>{
    button.addEventListener('click',()=>{
        const wholefeature= button.closest('.wholefeature');

        const product = 
        {
            id: wholefeature.dataset.id,
            name: wholefeature.dataset.name,
            price: Number(wholefeature.dataset.price),
            quantity: 1
        }

        const existing = cart.find(item=> item.id === product.id);

        if(existing){
            existing.quantity += 1;
        }
        else
        {
            cart.push(product);
        }

        saveToCart(cart);
        console.log(cart);
    });
});
