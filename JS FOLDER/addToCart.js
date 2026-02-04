
//ADD TO CART//

let addToCart = document.getElementById('addToCart');
let addToCartPopUp = document.getElementById('addToCartPopUp');
let allAddToCartButtons = document.querySelectorAll('.addToCart');
let cartBadge = document.getElementById('cartBadge');
let count = parseInt(localStorage.getItem("myCart")) || 0;
cartBadge.textContent = count;


function addNewItem()
{
    count++;
    cartBadge.textContent = count;
    localStorage.setItem("myCart", count);
}




allAddToCartButtons.forEach(button=> {
    button.onclick = function()
{
    addNewItem();

    addToCartPopUp.style.display = "flex";
    addToCartPopUp.style.opacity = "1";
    addToCartPopUp.style.transition = "none";
    addToCartPopUp.style.transform = "translateY(0)";



    setTimeout(()=>{
        addToCartPopUp.style.transition = "transform 1s ease, opacity 1s ease";
        addToCartPopUp.style.transform = "translateY(-30px)";
        addToCartPopUp.style.opacity = "0";
    },900);

    setTimeout(()=>{
        addToCartPopUp.style.display = "none";
    }, 1500);
};
});



