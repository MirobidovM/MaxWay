const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
 burger.addEventListener("click", function(){
     if(!burger.classList.contains("header__burger--close")){
        //  burger.classList.add("header__burger--open")
         burger.classList.add("header__burger--close");
         nav.classList.add("header__nav--open");
         
       
     }else{
         burger.classList.remove("header__burger--close");
        //  burger.classList.remove("header__burger--open")
        //  nav.classList.remove("header__nav--open");
         nav.classList.add("header__nav--close");
     }
 })
 nav.addEventListener("animationend", function(evt){
     
    if(evt.animationName=="close"){
        
        nav.classList.remove("header__nav--open");
        nav.classList.remove("header__nav--close");
    }
})

