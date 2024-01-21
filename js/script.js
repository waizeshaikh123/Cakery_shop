// navbar 

// let nav = document.querySelector(".home");
// let bar = document.querySelector(".rest-bar");
// let a = 0

// bar.addEventListener("click", function(){
//     if(a == 0){
//         nav.style.opacity = 1;
//         a = 1
//     }
//     else{
//         nav.style.opacity = 0;
//         a = 0
//     }
// });

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
