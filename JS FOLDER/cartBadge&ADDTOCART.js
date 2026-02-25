
//ADD TO CART

const cartButtons = document.querySelectorAll('.addToCart');
const trashButtons = document.querySelectorAll('.fa-trash-can');

cartButtons.forEach(cart=>{
    cart.addEventListener('click', ()=>{
        const product = cart.closest('.eachProduct');
        const eachCart = product.querySelector('.addToCart');
        const eachTrash = product.querySelector('.fa-trash-can');

        eachCart.textContent = "Added to Cart";
        eachCart.style.backgroundColor = "#d4af37";
        eachTrash.style.visibility = "visible";
    })
})

trashButtons.forEach(trash=>{
    trash.addEventListener('click',()=>{
        const product = trash.closest('.eachProduct');
        const eachCart = product.querySelector('.addToCart');
        const eachTrash = product.querySelector('.fa-trash-can');

        eachCart.textContent = "Add to Cart";
        eachCart.style.backgroundColor = "";
        eachTrash.style.visibility = "hidden";

    })
})





