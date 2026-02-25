
// SIGN IN FORM //
const signUpOverlay = document.getElementById('signUpOverlay');
const signInOverlay = document.getElementById('signInOverlay');
const closeSignInForm = document.getElementById('closeSignInFormButton');
const closeSignUpForm = document.getElementById('closeSignUpFormButton');



function togglePasswordSignUp()
{
    let email = document.querySelector('#email');
    let password = document.querySelector('.password');
    let passwordToggle = document.querySelector('.togglePasswordSignUp');

    if(password.type === "password")
    {
        password.type = "text";
        passwordToggle.classList.replace('fa-eye', 'fa-eye-slash');
    }
    else
    {
        password.type= "password";
        passwordToggle.classList.replace('fa-eye-slash', 'fa-eye');
    }
};


function openSignIn()
{
    signInOverlay.style.display= "flex";
    signUpOverlay.style.display = "none";
}

function openSignUp()
{
    signInOverlay.style.display = "none";
    signUpOverlay.style.display = "flex";



    togglePasswordSignUp();
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

