
//SHOW OR HIDE PASSWORD //

let password = document.getElementById('password');
let passwordToggle = document.getElementById('togglePassword');

passwordToggle.onclick = function ()
{
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




//SIGN IN BUTTON//

let email = document.getElementById('email');
let emailMessageResult = document.getElementById('emailMessageResult');
let passwordMessageResult = document.getElementById('passwordMessageResult');
let finalSignInMessage = document.getElementById("finalSignInMessage");




function resetForm()
{
    email.value="";
    password.value="";


    emailMessageResult.textContent = "";
    passwordMessageResult.textContent = "";
    finalSignInMessage.textContent = "";

    password.type = "password";
    passwordToggle.classList.replace('fa-eye-slash', 'fa-eye');
}

function signInSuccessful()
{
    emailMessageResult.textContent = "";
    passwordMessageResult.textContent = "";
    finalSignInMessage.textContent = "";

    if(email.value ==="" && password.value === "")
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
    else if(password.value==="")
    {
        passwordMessageResult.textContent = "Enter your password";
        passwordMessageResult.style.color = "red";
        emailMessageResult.textContent = "";
    }
    else
    {
        finalSignInMessage.textContent = "Sign In Successful";
        finalSignInMessage.style.color = "green";

        email.value = "";
        password.value = "";

        setTimeout(()=>{
            signInOverlay.style.display = "none";
            resetForm();
        }, 1500);
        
    }
};




const closeSignIn = document.getElementById('closeSignInFormButton');

closeSignIn.onclick = function() {
    resetForm();
    signInOverlay.style.display = "none";
};


window.addEventListener('click', function(event) {
    if (event.target == signInOverlay) {
        resetForm();
        signInOverlay.style.display = "none";
    }
});
