const count = document.getElementsByTagName("p")[0];
const increment = document.querySelector(".inc");
const decrement = document.querySelector(".dec");
const reset = document.querySelector(".reset");

increment.addEventListener("click",()=>{
    count.textContent = (parseInt(count.textContent) + 1);
})

decrement.addEventListener("click" , ()=>{
    if(parseInt(count.textContent)>0){
        count.textContent = (parseInt(count.textContent) - 1);
    }
    else{
        count.textContent = 0;
    }
})
reset.addEventListener("click" , ()=>{
    count.textContent = 0;
})