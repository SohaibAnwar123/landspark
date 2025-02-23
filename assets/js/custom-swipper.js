// A $( document ).ready() block.
$( document ).ready(function() {
    // bottom gallery slick js
var swiper = new Swiper(".bottomGallery", {
    slidesPerView: "auto",
    spaceBetween: 16,
    loop: true,
    navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
   },
breakpoints: {
   1199: {
       centeredSlides: false,
     },
     991: {
       centeredSlides: true,
           navigation: {
       nextEl: "",
       prevEl: "",
   },
     },
     576: {
       centeredSlides: true,
     },
     320: {
       centeredSlides: true,
     },   
}
});



// wohungenGallery
var swiper = new Swiper(".wohnugenGallery", {
    slidesPerView: "auto",
    spaceBetween: 16,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
                el: " ",
                dynamicBullets: false,
            },

    breakpoints: {
        1199: {
            centeredSlides: false,
        },
        991: {
            centeredSlides: true,
            
            pagination: {
                el: " ",
                dynamicBullets: true,
            },
        },
        576: {
            centeredSlides: true,
            navigation: {
                nextEl: "",
                prevEl: "",
            },
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
        },
        320: {
            centeredSlides: true,
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
        },
    },
});



});

