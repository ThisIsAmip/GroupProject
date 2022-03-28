
const menuicon = document.querySelector(".menu-icon");
const headerMenu = document.querySelector(".header-bottom-menu");

menuicon.addEventListener("click",()=>{
    if(headerMenu.className.includes("show"))
        headerMenu.classList.remove("show");
    else
        headerMenu.classList.add("show");
})


const footerTittle = document.querySelectorAll(".footer-mid-tittle");
const footerContent = document.querySelectorAll(".footer-mid-content");

footerTittle.forEach((e,i) =>{
    e.addEventListener("click",()=>{
        if(footerContent[i].className.includes("show"))   
            footerContent[i].classList.remove("show");
        else
            footerContent[i].classList.add("show")
    })
})