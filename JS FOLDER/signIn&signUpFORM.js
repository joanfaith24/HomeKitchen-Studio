
const signUpOverlay = document.getElementById('signUpOverlay');
const signInOverlay = document.getElementById('signInOverlay');
const closeSignInForm = document.getElementById('closeSignInFormButton');
const closeSignUpForm = document.getElementById('closeSignUpFormButton');
const signUp = document.querySelector('.signUp');
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');
const signInEye = document.querySelector('.mainEye');
const passwordSignIn = document.querySelector('.passwordSignIn');
const passwordSignUpFirst = document.querySelector('.password');
const passwordSignUpSecond = document.querySelector('.passwordSecond');
const email = document.getElementById('email');
const emailMessageResult = document.getElementById('emailMessageResult');
const passwordMessageResult = document.getElementById('passwordMessageResult');
const finalSignInMessage = document.getElementById("finalSignInMessage");
const firstEye = document.querySelector('.firstEye');
const secondEye = document.querySelector('.secondEye');



////////------------ SIGN IN------------------/////////

signInEye.addEventListener('click', ()=>{
    if(passwordSignIn.type === "password")
    {
        passwordSignIn.type = "text";
        signInEye.classList.replace('fa-eye', 'fa-eye-slash');
    }
    else
    {
        passwordSignIn.type= "password";
        signInEye.classList.replace('fa-eye-slash', 'fa-eye');
    }
});

//signin -EYE RESET
function resetSignInEye(){
    passwordSignIn.type = "password";
    signInEye.classList.remove('fa-eye-slash');
    signInEye.classList.add('fa-eye');
}

//signin - CLEAR EMAIL and PASSWORD WARNING
function clearAllError()
{
    emailMessageResult.textContent = "";
    passwordMessageResult.textContent = "";
    finalSignInMessage.textContent = "";
}

//signin - EMAIL & PASSWORD ERROR
function enterValidEmail()
{
    emailMessageResult.textContent = "Enter valid email";
    emailMessageResult.style.color = "red";
}

function emailError()
{
    emailMessageResult.textContent = "Enter your email";
    emailMessageResult.style.color = "red";
}

function passwordError()
{
    passwordMessageResult.textContent = "Enter your password";
    passwordMessageResult.style.color = "red";   
}

//signin - ALL RESET Function in ONE
function allReset()
{
    resetSignInEye();
    clearAllError();
    signInForm.reset();
}



//signin- OPEN MODAL
function openSignIn()
{   
    allReset();
    signInOverlay.style.display= "flex";
    signUpOverlay.style.display = "none";
}

//signin- CLOSE MODAL
closeSignInForm.addEventListener('click', ()=>{
    signInOverlay.style.display = "none";
    allReset();
})

//signin- SUCCESSFUL
function signInSuccessful()
{
const invalidEmail = "/~#$%^&*()_+/";

emailMessageResult.textContent = "";
passwordMessageResult.textContent = "";
finalSignInMessage.textContent = "";

if(email.value ==="" && passwordSignIn.value === "")
{
emailMessageResult.textContent = "Enter your email";
emailMessageResult.style.color = "red";
passwordMessageResult.textContent = "Enter your password";
passwordMessageResult.style.color = "red";

}
else if(email.value==="")
{
emailMessageResult.textContent = "Enter your email";
emailMessageResult.style.color = "red";
passwordMessageResult.textContent = "";
}

else if(passwordSignIn.value === "")
{
passwordMessageResult.textContent = "Enter your password";
passwordMessageResult.style.color = "red";
}
else if(!email.value.includes('@') && passwordSignIn.value==="")
{
passwordMessageResult.textContent = "Enter your password";
passwordMessageResult.style.color = "red";
emailMessageResult.textContent = "Enter valid email";
emailMessageResult.style.color = "red";
}
else if(email.value.includes(invalidEmail) || !email.value.includes('@'))
{
emailMessageResult.textContent = "Enter valid email";
emailMessageResult.style.color = "red";
}
else
{
finalSignInMessage.textContent = "Sign In Successful";
finalSignInMessage.style.color = "green";

email.value = "";
passwordSignIn.value = "";

const signInButton = document.getElementById('signInButton');
signInButton.disabled = true;
signInButton.style.opacity = "0.5";
signInButton.style.cursor = "not-allowed";

setTimeout(()=>{
signInOverlay.style.display = "none";

signInButton.disabled = false;
signInButton.style.opacity = "1";
signInButton.style.cursor = "pointer";
signInForm.reset();
}, 1500);

}
};








////////---------- SIGN UP -----------------///////////

firstEye.addEventListener('click', ()=>{
    if(passwordSignUpFirst.type === "password")
    {
        passwordSignUpFirst.type = "text";
        firstEye.classList.replace('fa-eye', 'fa-eye-slash');  
    }
    else
    {
        passwordSignUpFirst.type= "password";
        firstEye.classList.replace('fa-eye-slash', 'fa-eye');
    }
})


secondEye.addEventListener('click', ()=>{
    if(passwordSignUpSecond.type === "password")
    {
        passwordSignUpSecond.type = "text";
        secondEye.classList.replace('fa-eye', 'fa-eye-slash');
        
    }
    else
    {
        passwordSignUpSecond.type= "password";
        secondEye.classList.replace('fa-eye-slash', 'fa-eye');
        
    }
})

//signup-OPEN MODAL
signUp.addEventListener('click', ()=>{
    {
    signInOverlay.style.display = "none";
    signUpOverlay.style.display = "flex";
}
})


//signup-CLOSE MODAL

function clearForm()
{ 
    passwordSignUpFirst.type = "password";
    passwordSignUpSecond.type = "password";

    firstEye.classList.remove('fa-eye-slash');
    firstEye.classList.add('fa-eye');

    secondEye.classList.remove('fa-eye-slash');
    secondEye.classList.add('fa-eye');
}

closeSignUpForm.addEventListener('click', ()=>{
    signUpOverlay.style.display = "none";
    signUpForm.reset();
    clearForm();
})

function switchToSignIn()
{
    openSignIn();
}




/////// BOTH ----click OUTSIDE MODAL------//////

window.addEventListener('click', function(event)
{
    if(event.target == signInOverlay)
    {
        signInOverlay.style.display= "none";
        signInEye.classList.replace('fa-eye-slash', 'fa-eye');
        signInForm.reset();
    }
    if(event.target == signUpOverlay)
    {
        signUpOverlay.style.display= "none";
        signUpForm.reset();
        clearForm();
    }
});









