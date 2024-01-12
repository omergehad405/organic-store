// start cart 
let cartInfo = document.querySelector(".cart-info")
  function openCart(){
    cartInfo.style.display = "block";
  }
  function closeCart(){
    cartInfo.style.display = "none";
  }
// start menu
let menu = document.querySelector(".menu");
let arrow = document.querySelector(".arrow");
let closeMenu = document.querySelector(".menu .closeBtn");

arrow.addEventListener("click" , () =>{
  menu.style.right = "0";
  menu.style.display = "flex";
});
closeMenu.addEventListener("click" , () =>{
  menu.style.right = "-50rem";
  menu.style.display = "none";
});

// start navbar
let bars = document.querySelector(".bars");
let navBar = document.querySelector(".sub-header .container ul");
let closeBtn = document.querySelector(".sub-header .container ul .close");

bars.addEventListener("click" , () =>{
    navBar.style.left = "0";
});
closeBtn.addEventListener("click" , () =>{
    navBar.style.left = "-50rem";
});

// start product sample filter 
let filterBtn = document.querySelectorAll(".filters li")
let filter = Array.from(document.querySelectorAll(".products div"))

filterBtn.forEach((li) =>{
    li.addEventListener("click", removeActive)
    li.addEventListener("click", manageFilter)
})

// active element
function removeActive() {
    filterBtn.forEach((li) => {
        li.classList.remove("active")
        this.classList.add("active")
    })
}

// manage filter 
function manageFilter() {
    filter.forEach((filter) => {
        filter.style.display = "none"
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) =>{
        el.style.display = "block";
    })
}

// start testemonials swiper 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
    grabCursor:true,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
