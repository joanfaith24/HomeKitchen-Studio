
//BACK TO TOP//

const backToTop = document.getElementById('backtotop');

window.onscroll = function()
{
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    {
        backToTop.style.display = "flex";
    }
    else
    {
        backToTop.style.display = "none";
    }
};

backToTop.onclick = function()
{
    window.scrollTo
    (
        {
        top: 0,
        behavior: 'smooth'
        }
    )
};