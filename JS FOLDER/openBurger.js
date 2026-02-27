



let categories  = document.getElementById('categories');
let burgerIcon = document.getElementById('burgerIcon');


function openBurger()
{
    categories.classList.toggle('active');
}


window.addEventListener('click', function(event){
if(
    !categories.contains(event.target) &&
    !burgerIcon.contains(event.target)
    )
{
    categories.classList.remove('active');
}
});



function closeCatPop(event)
{
    if(event) event.stopPropagation();
    categories.classList.remove('active');
}






// EACH CATEGORY DROPDOWN

let storageSub = document.querySelector('.eachCategorySubStorage');
let glasswaresSub = document.querySelector('.eachCategorySubGlasses');
let knivesSub = document.querySelector('.eachCategorySubKnife');
let cookwaresSub = document.querySelector('.eachCategorySubCookwares');
let utensilsSub = document.querySelector('.eachCategorySubUtensils');


function storage()
{
    if(storageSub.style.display === "flex")
    {
        storageSub.style.display = "none";
    }
    else
    {
        storageSub.style.display = "flex";        
        glasswaresSub.style.display = "none";        
        knivesSub.style.display = "none";        
        cookwaresSub.style.display = "none";        
        utensilsSub.style.display = "none";        

    }
}

function glasswares()
{
    if(glasswaresSub.style.display === "flex")
    {
        glasswaresSub.style.display = "none";
    }
    else
    {
        glasswaresSub.style.display = "flex";
        storageSub.style.display = "none";                
        knivesSub.style.display = "none";        
        cookwaresSub.style.display = "none";        
        utensilsSub.style.display = "none";  
    }
}

function knives()
{
    if(knivesSub.style.display === "flex")
    {
        knivesSub.style.display = "none";
    }
    else
    {
        knivesSub.style.display = "flex";
        glasswaresSub.style.display = "none";
        storageSub.style.display = "none";                        
        cookwaresSub.style.display = "none";        
        utensilsSub.style.display = "none"; 
    }
}

function cookwares()
{
    if(cookwaresSub.style.display === "flex")
    {
        cookwaresSub.style.display = "none";
    }
    else
    {
        cookwaresSub.style.display = "flex";
        glasswaresSub.style.display = "none";
        storageSub.style.display = "none";                
        knivesSub.style.display = "none";            
        utensilsSub.style.display = "none"; 
    }
}

function utensils()
{
    if(utensilsSub.style.display === "flex")
    {
        utensilsSub.style.display = "none";
    }
    else
    {
        utensilsSub.style.display = "flex";
        glasswaresSub.style.display = "none";
        storageSub.style.display = "none";                
        knivesSub.style.display = "none";        
        cookwaresSub.style.display = "none";       
    }
}




