
// category page js

const closeAllActive = () =>{
    const allActive = document.querySelectorAll(".active");
          for(i=0;i<allActive.length;i++)
             allActive[i].classList.remove("active");
}

// Show filter 
const backgroundBlur = () =>{
       background.addEventListener("click",()=>{
          closeAllActive();
       })
    }
 
 const background = document.querySelector(".background-blur");
 const filterTotal = document.querySelector(".filter-total-tittle");
 const filterArrow = document.querySelectorAll(".filter-total-arrow");
 const filterTotalShow = document.querySelector(".filter-show");
 const filterItems = document.querySelectorAll(".filter-items-tittle");
 const filterItemShow = document.querySelectorAll(".filter-items-show");
 const closeFilterShow = document.querySelector(".filter-close-btn");
 closeFilterShow.addEventListener("click",()=>{
     closeAllActive();
 })
 filterTotal.addEventListener("click",()=>{
     if(filterTotal.className.includes("active"))
     {
        closeAllActive();
     }
     else{
        window.scrollTo({
            top:195.1999969482422,
            behavior:"auto"
        })
        filterTotal.classList.add("active")
        filterArrow[0].classList.add("active");
        filterTotalShow.classList.add("active");
        background.classList.add("active");
        backgroundBlur();
     }
     
    
 }) 

const showFilter = ()=>{
    for(let i = 0 ; i< filterItems.length;i++)
        filterItems[i].addEventListener("click",()=>{
            
            if(filterItems[i].className.includes("active") )
              {                  
                closeAllActive();   
              } 
            else
            {
                window.scrollTo({
                    top:195.1999969482422,
                    behavior:"auto"
                })
            filterItems[i].classList.add("active");
            filterArrow[i+1].classList.add("active");
            filterItemShow[i].classList.add("active");
            background.classList.add("active");
            backgroundBlur();
        }
        })
}
showFilter();


// Show filter ends


// Click filter-box

const filterBox = document.querySelectorAll(".filter-box");
const filterList = document.querySelector(".filter-list-checked");
const filterRowItems = document.querySelectorAll(".filter-row-box");

for(let i = 0 ; i < filterBox.length;i++)
filterBox[i].addEventListener("click",()=>{
    innerFilterBox(filterBox[i].innerHTML);
})

// Click filterList
const innerFilterList = () =>{
    for(let i = 0 ; i < filterRowItems.length;i++)
    filterRowItems[i].addEventListener("click",()=>{
        if(filterRowItems[i].className.includes("filter-box-img"))
            innerFilterBox(filterRowItems[i].innerHTML);
        else
            innerFilterText(filterRowItems[i].innerHTML);
    })
}

innerFilterList();

// render FilterBox into Filter List
const innerFilterBox = (items) =>{
    let List = document.querySelector(".list-box").innerHTML;
    if(List.includes(items.trim()))
    {
    }
    else
    {
        
    List +=  `
    <div class="filter-list-box">
        ${items.trim()}
        <div class="filter-close-list">
            <i class='bx bx-x'></i>
        </div>
    </div>
    ` ;
    document.querySelector(".list-box").innerHTML = List;
    renderFilterBtn();
    FilterTotalCount();
    let filterListBox = document.querySelectorAll(".filter-list-box");
    for(let i=0;i<filterListBox.length;i++)
            filterListBox[i].addEventListener("click",()=>{                
                if(filterListBox.length==1){
                document.querySelector(".list-box").innerHTML = ``;
                }
                else
                filterListBox[i].parentNode.removeChild(filterListBox[i]);  
                FilterTotalCount();
    })
    }
}


// Render FilterText into Filter List
const innerFilterText = (items) =>{
    let List = document.querySelector(".list-text").innerHTML;
    
    if(List.includes(items))
    {   
    }
    else
    {
        
     List +=  `
    <div class="filter-list-text">
        ${items}
        <div class="filter-close-list">
        <i class='bx bx-x'></i>
        </div> 
    </div>
    ` ;
    document.querySelector(".list-text").innerHTML = List;
    renderFilterBtn();
    FilterTotalCount();
    let FilterText = document.querySelectorAll(".filter-list-text");
    for(let i=0,a=FilterText.length;i<a;i++)
        FilterText[i].addEventListener("click",()=>{ 
            if(FilterText.length==1)
                document.querySelector(".list-text").innerHTML = ``;
            else
                FilterText[i].parentNode.removeChild(FilterText[i]);  
            FilterTotalCount();           
    })
    }
} 


// Show Btn reset and xem kết quả
const ShowBtn = document.querySelectorAll(".filter-show-btn");
const renderFilterBtn = ()=>{
    const listText = document.querySelectorAll(".filter-list-text");
    const listBox = document.querySelectorAll(".filter-list-box");
    if(listText.length != 0 || listBox.length != 0)
        ShowBtn.forEach((e) =>{
            e.classList.add("open");
        })
}

// Show FilterTotalCount
const FilterTotalCount = ()=>{
    const listText = document.querySelectorAll(".filter-list-text");
    const listBox = document.querySelectorAll(".filter-list-box");
    document.querySelector(".filter-count-total").innerHTML=listText.length+listBox.length;
    if(listBox.length + listText.length > 0)
    {
        document.querySelector(".filter-count-total").classList.add("show");
    }
    else
        document.querySelector(".filter-count-total").classList.remove("show");
}


// Reset Filter
const ResetFilter = ()=>{
    const BtnReset = document.querySelectorAll(".btn-filter-reset");
    BtnReset.forEach((e) =>{
        e.addEventListener("click",()=>{
            location.reload();
            console.log("a");
        })
    })
}

ResetFilter();



// Pagination

const ActivePaginationNumber = (id) =>{
    const AllNumber = document.querySelectorAll(".pagination-number-items");
    AllNumber.forEach((e)=>{
        e.classList.remove("show");
    })
    AllNumber[id].classList.add("show");
}
ActivePaginationNumber(0);
const ActiveNumberOnclick = () =>{
    const AllNumber = document.querySelectorAll(".pagination-number-items");
    for(let i =0;i<AllNumber.length;i++)
        AllNumber[i].addEventListener("click",()=>{
            ActivePaginationNumber(i);
        })
}

ActiveNumberOnclick();


const quickViewbtn = document.querySelectorAll(".bxs-bullseye");
const quickViewForm = document.querySelector(".quickview");
const quickviewClose = document.querySelector(".quickview-close")
quickViewbtn[0].addEventListener("click",()=>{
    quickViewForm.classList.add("show");
})

quickviewClose.addEventListener("click",()=>{
    quickViewForm.classList.remove("show");
})