$('.dropdown.hover_dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


// slick slider js starts
$('.hero_carousel ul').slick({
    dots: false,
    infinite: true,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    cssEase: 'linear',
    speed: 1000,
    useTransform: false,

    responsive: [{
        breakpoint: 500,
        settings: {
            dots: true,
        }
    }]
});

// slick slider hero section js ends

// gallery images js
// if (window.matchMedia('(max-width: 991.98px)').matches) {
$('.gallery_images ul').slick({
    dots: false,
    infinite: true,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    variableWidth: true,
    centerMode: false,
    fade: false,
    useTransform: false,
    responsive: [

        {
            breakpoint: 1550,
            settings: {
                slidesToShow: 2,
                // infinite: true
            }
        },

        {
            breakpoint: 1360,
            settings: {
                slidesToShow: 2,
                // infinite: true

            }
        },

        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                centerMode: true,
                infinite: true,
                // dots: true
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                infinite: true,
                centerMode: true,
                variableWidth: true,
                dots: true,
            }
        }
    ]
});

// tab gallery images
$('.gallery_tab ul').slick({
    dots: false,
    infinite: true,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: false,
    autoplaySpeed: 1500,
    variableWidth: true,
    centerMode: false,
    fade: false,
    cssEase: 'linear',
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                // infinite: false,
                centerMode: true

            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                centerMode: true
            }
        }
    ]
});


// gundrisse_images slick js

// $('.Grundrisse_images').slick({
//     dots: false,
//     infinite: true,
//     arrows: true,
//     swipeToSlide: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     draggable: true,
//     autoplay: false,
//     autoplaySpeed: 1500,
//     variableWidth: true,
//     centerMode: false,
//     fade: false,
//     cssEase: 'linear',
//     prevArrow: " <img class='slide-arrow slick-prev' src='assets/img/gallery_prev.png'>",
//     nextArrow: " <img class='slide-arrow slick-next' src='assets/img/gallery_next.png'>",
//     responsive: [
//         {
//             breakpoint: 1600,
//             settings: {
//                 slidesToShow: 2,
//                 variableWidth: true
//             }
//         },

//         {
//             breakpoint: 1200,
//             settings: {
//                 slidesToShow: 1,
//                 // variableWidth: false,
//             }
//         },

//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 1,
//                 centerMode: true,
//                 // variableWidth: false,
//             }
//         },

//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//                 arrows: false,
//                 centerMode: true,
//                 dots: true

//             }
//         },
//         {
//             breakpoint: 500,
//             settings: {
//                 slidesToShow: 1,
//                 arrows: false,
//                 centerMode: true,
//                 dots: true

//             }
//         }
//     ]
// });




// huas map images slick js
$('.huasMap_gallery ul').slick({
    dots: false,
    infinite: false,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    autoplay: false,
    autoplaySpeed: 1500,
    variableWidth: false,
    centerMode: false,
    fade: false,
    cssEase: 'linear',
    prevArrow: " <img class='slide-arrow slick-prev' src='assets/img/gallery_prev.png'>",
    nextArrow: " <img class='slide-arrow slick-next' src='assets/img/gallery_next.png'>",
    responsive: [{
            breakpoint: 1600,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2

            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1.1,
                centerMode: true,
                dots: true,
                // variableWidth: true

            }
        }
    ]
});

// floor_images slick js
$('.floor_slider ul').slick({
    dots: false,
    infinite: false,
    arrows: true,
    swipeToSlide: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    autoplay: false,
    autoplaySpeed: 1500,
    variableWidth: false,
    centerMode: false,
    fade: false,
    cssEase: 'linear',
    prevArrow: " <img class='slide-arrow slick-prev' src='assets/img/gallery_prev.png'>",
    nextArrow: " <img class='slide-arrow slick-next' src='assets/img/gallery_next.png'>",
    responsive: [{
            breakpoint: 1600,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1.2
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1.2,
                arrows: false,

            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.1,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1.1,
                arrows: false,
                dots: true,
            }
        }
    ]
});





// slick js ends



// scroll top js
var btn = $('#topbutton');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});

// old js

// navbar collapse js
$('#navbar-hamburger').on('click', function () {
    $('#collapsibleNavbar').show();
    $('#navbar-close').show();
    $(this).hide();

    $('html, body').css({
        overflow: 'hidden',
        height: '100%',
    });

    $('.main_section').addClass('mainIndex');


});

$('#navbar-close').click(function () {

    $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    });
    $('#collapsibleNavbar').hide();
    $(this).hide();
    $('#navbar-hamburger').show();
    $('.main_section').removeClass('mainIndex');
});


if (window.matchMedia('(max-width: 1199.98px)').matches) {
    $('#kontakt_menu').click(function () {

        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
        $('#collapsibleNavbar').hide();
        $('#navbar-close').hide();
        $('#navbar-hamburger').show();
        $('.main_section').removeClass('mainIndex');
    });

}
if (window.matchMedia('(max-width: 1199.98px)').matches) {
    $('.subLinkNav').click(function () {

        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
        $('#collapsibleNavbar').hide();
        $('#navbar-close').hide();
        $('#navbar-hamburger').show();
        $('.main_section').removeClass('mainIndex');
    });

}