// navbar 

let naving = document.querySelector(".home");
let bar = document.querySelector(".res-bar i");

bar.addEventListener("click", function(){
    naving.style.display = "block";
    console.log("hey")
});


let blog = document.querySelector(".blogs");
let card = document.querySelector(".card");

let b = 0
blog.addEventListener("click",function () { 
    if(b == 0 ){
        card.style.opacity = 1;
        b = 1
    }
    else{
        card.style.opacity = 0;
        b = 0
    }
})
