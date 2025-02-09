// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 300) {
//           $(".black").css("background" , "blue");
//         }
  
//         else{
//             $(".black").css("background" , "#333");  	
//         }
//     })
//   })


//   var swiper = new Swiper(".home-slider", {
//     grabCursor:true,
//     loop:true,
//     centeredSlides:true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//  });
 
//  var swiper = new Swiper(".food-slider", {
//     grabCursor:true,
//     loop:true,
//     centeredSlides:true,
//     spaceBetween: 20,
//     pagination: {
//        el: ".swiper-pagination",
//        clickable: true,
//     },
//     breakpoints: {
//        0: {
//          slidesPerView: 1,
//        },
//        700: {
//          slidesPerView: 2,
//        },
//        1000: {
//          slidesPerView: 3,
//        },
//     },
//  });
 
//  let previewContainer = document.querySelector('.food-preview-container');
//  let previewBox = previewContainer.querySelectorAll('.food-preview');
 
//  document.querySelectorAll('.food .slide').forEach(food =>{
//     food.onclick = () =>{
//        previewContainer.style.display = 'flex';
//        let name = food.getAttribute('data-name');
//        previewBox.forEach(preveiw =>{
//           let target = preveiw.getAttribute('data-target');
//           if(name == target){
//              preveiw.classList.add('active');
//           }
//        });
//     };
//  });
 
//  previewContainer.querySelector('#close-preview').onclick = () =>{
//     previewContainer.style.display = 'none';
//     previewBox.forEach(close =>{
//        close.classList.remove('active');
//     });
//  };
 
//  var swiper = new Swiper(".menu-slider", {
//     grabCursor:true,
//     loop:true,
//     autoHeight:true,
//     centeredSlides:true,
//     spaceBetween: 20,
//     pagination: {
//        el: ".swiper-pagination",
//        clickable: true,
//     },
//  });
 
//  var swiper = new Swiper(".blogs-slider", {
//     grabCursor:true,
//     loop:true,
//     centeredSlides:true,
//     autoHeight:true,
//     spaceBetween: 20,
//     pagination: {
//        el: ".swiper-pagination",
//        clickable: true,
//     },
//     breakpoints: {
//        0: {
//          slidesPerView: 1,
//        },
//        700: {
//          slidesPerView: 2,
//        },
//        1000: {
//          slidesPerView: 3,
//        },
//     },
//  });


document.addEventListener('DOMContentLoaded', function() {
   const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         const delay = entry.target.getAttribute('data-delay') || 0;
         setTimeout(() => {
           entry.target.classList.add('visible');
         }, delay);
       } else {
         entry.target.classList.remove('visible'); // Remove the class when not in view
       }
     });
   });
 
   document.querySelectorAll('.animate-on-scroll').forEach(element => {
     observer.observe(element);
   });
 
   // Mobile menu toggle
   const navMenu = document.querySelector('.nav__menu');
   const navToggleOpen = document.querySelector('.nav__toggle-open');
   const navToggleClose = document.querySelector('.nav__toggle-close');
 
   navToggleOpen.addEventListener('click', () => {
     navMenu.classList.add('active');
     navToggleOpen.style.display = 'none';
     navToggleClose.style.display = 'block';
   });
 
   navToggleClose.addEventListener('click', () => {
     navMenu.classList.remove('active');
     navToggleOpen.style.display = 'block';
     navToggleClose.style.display = 'none';
     
   });
 });


 /* Forms */
 const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});


 
 