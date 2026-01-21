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

