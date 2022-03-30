
const signInpannelBtn = document.querySelector(".signin-panel");
const signUpPannelBtn = document.querySelector(".signup-panel");
const loginForm = document.querySelector(".container-form-login");
const pannelForm = document.querySelector(".container-display");
const signInForm = document.querySelector(".sign-in-container");
const signUpForm = document.querySelector(".sign-up-container");
const pannelLeft = document.querySelector(".display-panel.left");
const pannelRight = document.querySelector("display-panel.right");

const translateX = (condition)=>{
    if(condition==0)
    {
        loginForm.classList.remove("right");
        pannelForm.classList.remove("left");
    }
    else if(condition==1)
    {
        loginForm.classList.add("right");
        pannelForm.classList.add("left");
    }
}

const translateY = (condition)=>{
    if(condition==0)
    {
        loginForm.classList.remove("top");
        pannelForm.classList.remove("bottom");
    }
    else if(condition==1)
    {
        loginForm.classList.add("top");
        pannelForm.classList.add("bottom");
    }
}

signUpPannelBtn.addEventListener("click",()=>{
    if (window.innerWidth <= 900) translateY(1);
    else translateX(1);
    
})

signInpannelBtn.addEventListener("click",()=>{
    if (window.innerWidth <= 900) translateY(0);
    else translateX(0);
})
// translate(0);