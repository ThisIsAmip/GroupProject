
const btnLeft =  document.querySelector(".ourcategory-navigation-left");
const btnRight =  document.querySelector(".ourcategory-navigation-right");
const items = document.querySelectorAll(".ourcategory-items");


const main = document.querySelector(".ourcategory-details");


let index = 0;
let translated = 0;
const translatedX = (condition,width,column) =>{
    let length = items.length-column;
    if(condition==0) //btn phải
    {       
        if(index >= length)
        {
            index=length;
            return;
        }
        
        translated= translated-width;
        main.style = `transform:translateX(${translated}px)`;
        index++;
    }
    else if ( condition==1) //btn trái
    {
        if(index <= 0)
        {
            index=0;
            return;
        }
        
        translated = translated+width;
        main.style = `transform:translateX(${translated}px)`;
        index--;
    }
}


btnLeft.addEventListener("click",()=>{
    let width= document.querySelector(".ourcategory-items").offsetWidth;
    if(window.innerWidth >500 && window.innerWidth <= 900 )
    translatedX(1,width,3);
    else if(window.innerWidth <=500 )
    translatedX(1,width,2);
})
btnRight.addEventListener("click",()=>{
    let width= document.querySelector(".ourcategory-items").offsetWidth;
    if(window.innerWidth >500 && window.innerWidth <= 900 )
    translatedX(0,width,3);
    else if(window.innerWidth <=500 )
    translatedX(0,width,2);
})

const serviceTittle = document.querySelector(".service-tittle");
const serviceDetails = document.querySelector(".service-details");
const bestsellerTittle = document.querySelector(".bestseller-tittle");
const bestsellerDetails = document.querySelector(".bestseller-details");
const categorytittle = document.querySelector(".category-header");
const categorycontent= document.querySelector(".category-content");



serviceTittle.addEventListener("click",()=>{
    if(serviceDetails.className.includes("show"))
    serviceDetails.classList.remove("show")
    else
    serviceDetails.classList.add("show")
})

bestsellerTittle.addEventListener("click",()=>{
    if(bestsellerDetails.className.includes("show"))
    bestsellerDetails.classList.remove("show")
    else
    bestsellerDetails.classList.add("show")
})
categorytittle.addEventListener("click",()=>{
    if(categorycontent.className.includes("show"))
    categorycontent.classList.remove("show")
    else
    categorycontent.classList.add("show")
})

const quickViewbtn = document.querySelectorAll(".bxs-bullseye");
const quickViewForm = document.querySelector(".quickview");
const quickviewClose = document.querySelector(".quickview-close")
quickViewbtn[0].addEventListener("click",()=>{
    quickViewForm.classList.add("show");
})

quickviewClose.addEventListener("click",()=>{
    quickViewForm.classList.remove("show");
})