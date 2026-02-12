
// SIGN IN FORM //
const signUpOverlay = document.getElementById('signUpOverlay');
const signInOverlay = document.getElementById('signInOverlay');
const closeSignInForm = document.getElementById('closeSignInFormButton');
const closeSignUpForm = document.getElementById('closeSignUpFormButton');


function openSignIn()
{
    signInOverlay.style.display= "flex";
    signUpOverlay.style.display = "none";
}

function openSignUp()
{
    signInOverlay.style.display = "none";
    signUpOverlay.style.display = "flex";

}

closeSignInForm.onclick = function ()
{
    signInOverlay.style.display = "none";
}

closeSignUpForm.onclick = function ()
{
    signUpOverlay.style.display = "none";
}

function switchToSignIn()
{
    openSignIn();

}

window.addEventListener('click', function(event)
{
    if(event.target == signInOverlay)
    {
        signInOverlay.style.display= "none";
    }
    if(event.target == signUpOverlay)
    {
        signUpOverlay.style.display= "none";
    }
});

