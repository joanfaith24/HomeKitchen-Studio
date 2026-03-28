// =============================================
// SESSION & USER HELPERS
// =============================================

let users = JSON.parse(localStorage.getItem('siteUsers') || '[]');

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
}
function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}
function clearCurrentUser() {
    localStorage.removeItem('currentUser');
}

// =============================================
// HEADER — update icon on every page
// =============================================

function updateHeaderUser() {
    const userIconDiv = document.querySelector('.headerGroup .signInIconDiv');
    const currentUser = getCurrentUser();
    if (!userIconDiv) return;

    if (currentUser) {
        userIconDiv.innerHTML = `
            <div class="userWelcomeGroup">
                <span class="userWelcomeText">Hi, <strong>${currentUser.username}</strong></span>
                <a href="javascript:void(0)" onclick="signOutUser()" class="signOutLink">Sign Out</a>
            </div>
        `;
    } else {
        userIconDiv.innerHTML = `
            <a href="javascript:void(0)" onclick="openSignIn()">
                <i class="fa-solid fa-user"></i>
            </a>
        `;
    }
}

function signOutUser() {
    // show confirmation modal
    const modal = document.createElement('div');
    modal.id = 'signOutConfirmModal';
    modal.style.cssText = `
        position:fixed; top:0; left:0; width:100%; height:100%;
        background:rgba(0,0,0,0.5); backdrop-filter:blur(2px);
        z-index:9999; display:flex; align-items:center; justify-content:center;
    `;
    modal.innerHTML = `
        <div id="signOutModalInner" style="
            background:whitesmoke; border-radius:10px; padding:30px 24px;
            max-width:300px; width:88%; text-align:center;
            box-shadow:0 8px 28px rgba(0,0,0,0.25);
            animation: popIn 0.25s ease-out forwards;
        ">
            <p style="font-size:1rem; font-weight:600; color:#222; margin:0 0 20px 0;">
                Are you sure you want to sign out?
            </p>
            <div style="display:flex; gap:10px;">
                <button id="signOutNo" style="
                    flex:1; padding:10px; background:#fff; color:#555;
                    border:1px solid #ccc; border-radius:8px;
                    font-size:0.95rem; font-weight:600; cursor:pointer;
                ">No</button>
                <button id="signOutYes" style="
                    flex:1; padding:10px; background:#e53935; color:white;
                    border:none; border-radius:8px;
                    font-size:0.95rem; font-weight:700; cursor:pointer;
                ">Yes, Sign Out</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // No — close modal
    document.getElementById('signOutNo').addEventListener('click', () => {
        modal.remove();
    });

    // Yes — show dots, then signed out message, then close
    document.getElementById('signOutYes').addEventListener('click', () => {
        clearCurrentUser();
        updateHeaderUser();
        injectDotStyles();

        const inner = document.getElementById('signOutModalInner');

        // step 1 — loading dots for 1s
        inner.innerHTML = getDotsHTML();

        // step 2 — signed out message for 2s
        setTimeout(() => {
            inner.innerHTML = `
                <div style="
                    display:flex; flex-direction:column;
                    align-items:center; justify-content:center;
                    gap:12px; padding:10px; text-align:center;
                ">
                    <div style="font-size:2.5rem;">👋</div>
                    <h3 style="margin:0; color:#e53935; font-size:1.1rem; background:none; border:none; padding:0;">You are signed out.</h3>
                    <p style="margin:0; font-size:0.88rem; color:#555;">See you next time!</p>
                </div>
            `;

            // step 3 — close after 2s
            setTimeout(() => { modal.remove(); }, 2000);
        }, 1000);
    });

    // click outside to cancel
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// =============================================
// SHARED: inject dot animation keyframes once
// =============================================

function injectDotStyles() {
    if (document.getElementById('authDotStyle')) return;
    const style = document.createElement('style');
    style.id = 'authDotStyle';
    style.textContent = `
        .authDot {
            width: 13px; height: 13px; border-radius: 50%;
            background: #28a745; opacity: 0.3;
            animation: authDotPulse 0.7s ease-in-out infinite alternate;
        }
        .authDot:nth-child(2) { animation-delay: 0.2s; }
        .authDot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes authDotPulse {
            from { opacity: 0.3; transform: scale(0.85); }
            to   { opacity: 1;   transform: scale(1.2); }
        }
    `;
    document.head.appendChild(style);
}

function getDotsHTML() {
    return `
        <div style="
            display:flex; flex-direction:column;
            align-items:center; justify-content:center;
            min-height:160px; gap:16px;
        ">
            <div style="display:flex; gap:12px;">
                <div class="authDot"></div>
                <div class="authDot"></div>
                <div class="authDot"></div>
            </div>
        </div>
    `;
}

function getSuccessHTML(title, message) {
    return `
        <div style="
            display:flex; flex-direction:column;
            align-items:center; justify-content:center;
            min-height:160px; gap:14px; text-align:center; padding:10px;
        ">
            <div style="font-size:3.5rem; color:#28a745; line-height:1;">&#10003;</div>
            <h3 style="margin:0; color:#28a745; font-size:1.15rem; background:none; border:none;">${title}</h3>
            <p style="margin:0; font-size:0.92rem; color:#333;">${message}</p>
        </div>
    `;
}

// =============================================
// SIGN IN HTML template
// =============================================

function getSignInInnerHTML() {
    return `
        <button id="closeSignInFormButton" class="closeSignInFormButton">&times;</button>
        <h2>Sign In</h2>
        <form id="signInForm">
            <div class="emailLabelGroup">
                <label>Email:</label>
                <input type="email" class="emailSignIn" placeholder="Enter Email">
                <p id="emailMessageResult"></p>
            </div>
            <div class="passwordLabelGroup">
                <label>Password:</label>
                <div class="passwordInput">
                    <div class="passwordInputAndEye">
                        <input type="password" class="passwordSignIn" placeholder="Enter Password">
                        <i class="mainEye fa-solid fa-eye"></i>
                    </div>
                    <p id="passwordMessageResult"></p>
                </div>
            </div>
            <button id="signInButton" type="button" onclick="signInSuccessful()">Sign In</button>
            <p id="finalSignInMessage"></p>
            <p class="noAccount">No account yet? <a href="#" class="signUp">Sign Up</a></p>
        </form>
    `;
}

// =============================================
// SIGN IN LOGIC
// =============================================

const signInOverlay = document.getElementById('signInOverlay');

function resetSignInModal() {
    const inner = document.querySelector('.signInForm');
    if (inner) inner.innerHTML = getSignInInnerHTML();
}

function openSignIn() {
    if (!signInOverlay) return;
    resetSignInModal();
    signInOverlay.style.display = 'flex';
    const su = document.getElementById('signUpOverlay');
    if (su) su.style.display = 'none';
}

// ALL sign-in events use delegation — survive innerHTML rebuilds
document.addEventListener('click', function(e) {

    // close button
    if (e.target.id === 'closeSignInFormButton') {
        signInOverlay.style.display = 'none';
        resetSignInModal();
    }

    // eye toggle
    if (e.target.classList.contains('mainEye')) {
        const pass = document.querySelector('.passwordSignIn');
        if (!pass) return;
        if (pass.type === 'password') {
            pass.type = 'text';
            e.target.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            pass.type = 'password';
            e.target.classList.replace('fa-eye-slash', 'fa-eye');
        }
    }

    // sign up link inside sign in modal
    if (e.target.classList.contains('signUp')) {
        e.preventDefault();
        signInOverlay.style.display = 'none';
        resetSignInModal();
        document.getElementById('signUpOverlay').style.display = 'flex';
    }
});

// click outside sign in overlay
window.addEventListener('click', function(e) {
    if (signInOverlay && e.target === signInOverlay) {
        signInOverlay.style.display = 'none';
        resetSignInModal();
    }
});

function signInSuccessful() {
    const emailVal = document.querySelector('.emailSignIn').value.trim();
    const passVal  = document.querySelector('.passwordSignIn').value;

    const emailErr = document.getElementById('emailMessageResult');
    const passErr  = document.getElementById('passwordMessageResult');
    const finalMsg = document.getElementById('finalSignInMessage');

    emailErr.textContent = '';
    passErr.textContent  = '';
    finalMsg.textContent = '';

    let hasError = false;

    if (!emailVal) {
        emailErr.textContent = 'Enter your email';
        emailErr.style.color = 'red';
        hasError = true;
    } else if (!emailVal.includes('@')) {
        emailErr.textContent = 'Enter a valid email';
        emailErr.style.color = 'red';
        hasError = true;
    }
    if (!passVal) {
        passErr.textContent = 'Enter your password';
        passErr.style.color = 'red';
        hasError = true;
    }
    if (hasError) return;

    users = JSON.parse(localStorage.getItem('siteUsers') || '[]');
    const matchedUser = users.find(u => u.email === emailVal && u.password === passVal);

    if (!matchedUser) {
        finalMsg.textContent = 'Incorrect email or password.';
        finalMsg.style.color = 'red';
        return;
    }

    setCurrentUser(matchedUser);
    injectDotStyles();

    const inner = document.querySelector('.signInForm');

    // step 1 — loading dots for 1s
    inner.innerHTML = getDotsHTML();

    // step 2 — success message for 2s
    setTimeout(() => {
        inner.innerHTML = getSuccessHTML(
            'Sign In Successful!',
            `Welcome back, <strong>${matchedUser.username}</strong>!`
        );

        // step 3 — close modal, restore form, update header
        setTimeout(() => {
            signInOverlay.style.display = 'none';
            resetSignInModal();
            updateHeaderUser();
        }, 2000);

    }, 1000);
}

// =============================================
// SIGN UP LOGIC — only runs if modals exist on page
// =============================================

const signUpOverlay   = document.getElementById('signUpOverlay');
const signUpFormEl    = document.getElementById('signUpForm');
const closeSignUpForm = document.getElementById('closeSignUpFormButton');
const signUpButton    = document.getElementById('signUpButton');
const firstEye        = document.querySelector('.firstEye');
const secondEye       = document.querySelector('.secondEye');
const passFirst       = document.querySelector('.password');
const passSecond      = document.querySelector('.passwordSecond');

// save sign up form's original HTML to restore later — guard against missing modal
const signUpOriginalHTML = document.querySelector('.signUpForm') ? document.querySelector('.signUpForm').innerHTML : '';

if (firstEye) firstEye.addEventListener('click', () => {
    if (passFirst.type === 'password') {
        passFirst.type = 'text';
        firstEye.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        passFirst.type = 'password';
        firstEye.classList.replace('fa-eye-slash', 'fa-eye');
    }
});

if (secondEye) secondEye.addEventListener('click', () => {
    if (passSecond.type === 'password') {
        passSecond.type = 'text';
        secondEye.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        passSecond.type = 'password';
        secondEye.classList.replace('fa-eye-slash', 'fa-eye');
    }
});

function clearSignUpErrors() {
    document.querySelectorAll('.signUpFieldError').forEach(e => e.remove());
}

function resetSignUpModal() {
    const inner = document.querySelector('.signUpForm');
    if (inner) inner.innerHTML = signUpOriginalHTML;
}

if (closeSignUpForm) closeSignUpForm.addEventListener('click', () => {
    signUpOverlay.style.display = 'none';
    resetSignUpModal();
});

window.addEventListener('click', function(e) {
    if (e.target === signUpOverlay) {
        signUpOverlay.style.display = 'none';
        resetSignUpModal();
    }
});

function switchToSignIn() {
    openSignIn();
}

if (signUpButton) signUpButton.addEventListener('click', () => {
    const usernameVal = document.querySelector('.usernameSignUp').value.trim();
    const emailVal    = document.querySelector('.emailSignUp').value.trim();
    const firstPass   = document.getElementById('firstPasswordSignUp').value;
    const secondPass  = document.getElementById('secondPasswordSignUp').value;
    const tcChecked   = document.querySelector('.tcGroup input[type="checkbox"]').checked;

    clearSignUpErrors();
    let hasError = false;

    function showErr(inputEl, msg) {
        const err = document.createElement('p');
        err.className = 'signUpFieldError';
        err.style.cssText = 'color:red; font-size:0.78rem; margin:3px 0 0 0;';
        err.textContent = msg;
        inputEl.parentNode.insertBefore(err, inputEl.nextSibling);
        hasError = true;
    }

    if (!usernameVal) showErr(document.querySelector('.usernameSignUp'), 'Please enter a username.');
    if (!emailVal) {
        showErr(document.querySelector('.emailSignUp'), 'Please enter your email.');
    } else if (!emailVal.includes('@')) {
        showErr(document.querySelector('.emailSignUp'), 'Enter a valid email.');
    }
    if (!firstPass) {
        showErr(document.getElementById('firstPasswordSignUp'), 'Please enter a password.');
    } else if (firstPass.length < 6) {
        showErr(document.getElementById('firstPasswordSignUp'), 'Password must be at least 6 characters.');
    }
    if (!secondPass) {
        showErr(document.getElementById('secondPasswordSignUp'), 'Please re-enter your password.');
    } else if (firstPass !== secondPass) {
        showErr(document.getElementById('secondPasswordSignUp'), 'Passwords do not match.');
    }
    if (!tcChecked) showErr(document.querySelector('.tcGroup input'), 'You must agree to the Terms and Conditions.');
    if (hasError) return;

    users = JSON.parse(localStorage.getItem('siteUsers') || '[]');
    if (users.find(u => u.email === emailVal)) {
        showErr(document.querySelector('.emailSignUp'), 'An account with this email already exists.');
        return;
    }

    const newUser = { username: usernameVal, email: emailVal, password: firstPass };
    users.push(newUser);
    localStorage.setItem('siteUsers', JSON.stringify(users));
    setCurrentUser(newUser);

    injectDotStyles();
    const inner = document.querySelector('.signUpForm');

    // step 1 — loading dots for 1s
    inner.innerHTML = getDotsHTML();

    // step 2 — success message for 2s
    setTimeout(() => {
        inner.innerHTML = getSuccessHTML(
            'Sign Up Successful!',
            `Welcome, <strong>${usernameVal}</strong>! Your account has been created.`
        );

        // step 3 — close modal, restore form, update header
        setTimeout(() => {
            signUpOverlay.style.display = 'none';
            resetSignUpModal();
            updateHeaderUser();
        }, 2000);

    }, 1000);
});

// =============================================
// ON PAGE LOAD
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    updateHeaderUser();
});
