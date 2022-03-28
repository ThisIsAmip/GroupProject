
// details page js 
let mainImg = document.getElementById("main-img");
let smallImg = document.querySelectorAll(".small-img");

for(let i =0;i<smallImg.length;i++)
    smallImg[i].addEventListener("click",()=>{
   
        mainImg.src= smallImg[i].src;
    })

// INPUT Quantity

 const IncreaseQuantity = document.querySelector(".quantity-btn-up");
 const decreaseQuantity = document.querySelector(".quantity-btn-down");

 
 IncreaseQuantity.addEventListener("click",()=>{
    document.getElementById("Quantity").value++;
 })

 decreaseQuantity.addEventListener("click",()=>{
    document.getElementById("Quantity").value--;
     if(document.getElementById("Quantity").value <=1)
        document.getElementById("Quantity").value=1
    
 })

//  Tab description

const tab = document.querySelectorAll(".bottom-tittle-items");

for(let i = 0 ; i< tab.length;i++)
{
   tab[i].addEventListener("click",()=>{
      changeTab(i);      
   })
}

function changeTab (i) {
   for(let j = 0 ;j<tab.length;j++)
            tab[j].classList.remove("active");
      tab[i].classList.add("active");
   if (i==0)
   {
      
      document.querySelector(".bottom-description").style.display="flex";
      document.querySelector(".bottom-reviews").style.display="none";
   }     
   else if(i==1)
   {
      document.querySelector(".bottom-description").style.display="none";
      document.querySelector(".bottom-reviews").style.display="flex";
   } 
}

 changeTab(0);


const scrolltab = document.querySelectorAll(".review-button span");


for(let i = 0 ; i<scrolltab.length;i++)
{  
    
   scrolltab[i].addEventListener("click",()=>{
      changeTab(1); 
      window.scrollTo({
         top: 800,
         behavior: 'smooth'
       });
   })
}



// Related product navigation

const btnLeft =  document.querySelector(".navigation-btn-left");
const btnRight =  document.querySelector(".navigation-btn-right");
const items = document.querySelectorAll(".related-product-wrapper");


const main = document.querySelector(".related-product-details");


let index = 0;
let translated = 0;

const translatedXPC = (condition,width,column) =>{
   if(condition==0) //btn phải
   {     
      let length = items.length-column; 
      if(index >= length  )
         {
            index=length ;
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
   let width= document.querySelector(".related-product-wrapper").offsetWidth;
   console.log(window.innerWidth);
   if(window.innerWidth >= 1536)
   translatedXPC(1,width,4);
   else if(window.innerWidth >500 && window.innerWidth <= 900 )
   translatedXPC(1,width,2);
   else
      translatedXPC(1,width,1);
})
btnRight.addEventListener("click",()=>{
   let width= document.querySelector(".related-product-wrapper").offsetWidth;
   if(window.innerWidth >= 1536)
      translatedXPC(0,width,4);
   else if(window.innerWidth >500 && window.innerWidth <= 900 )
      translatedXPC(0,width,2);
      else
      translatedXPC(0,width,1);
})

// Star product
const Starbtn = document.querySelectorAll(".reviews-star-box");
const GoodRating = document.querySelector(".rating-good");
const BadRating = document.querySelector(".rating-bad");

const removeAllShow = () =>{
   GoodRating.classList.remove("show");
   BadRating.classList.remove("show");
   for(let i = 0 ;i<Starbtn.length;i++)
      Starbtn[i].classList.remove("show")
}


const ratingStar = () =>{
   for(let i =0;i< Starbtn.length;i++)
      Starbtn[i].addEventListener("click",()=>{
         
         if(Starbtn[i].className.includes("show"))
         {
            removeAllShow();
            return;
         }
         else
         {
            removeAllShow();
         for(let j =0; j<=i;j++)
         {
            if(i==0) BadRating.classList.add("show");
            else if(i==Starbtn.length-1) GoodRating.classList.add("show");
            Starbtn[j].classList.add("show");
         }
      }
      })
}

ratingStar();

const quickViewbtn = document.querySelectorAll(".bxs-bullseye");
const quickViewForm = document.querySelector(".quickview");
const quickviewClose = document.querySelector(".quickview-close")
quickViewbtn[0].addEventListener("click",()=>{
    quickViewForm.classList.add("show");
})

quickviewClose.addEventListener("click",()=>{
    quickViewForm.classList.remove("show");
})