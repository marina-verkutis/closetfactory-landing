/*
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

include("../js/components/shopping.js");
include("../js/components/like.js");*/


$(window).load(function() {
    $('.menu-button').on('click', function() {
        $('.menu').toggleClass('menu_active');
        $('.menu-button').toggleClass('menu-button_active');
    });

    $('.reviews-slider').slick({
        infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: true,
            dotsClass: 'dots-style',
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1500,
            pauseOnFocus: true,
            pauseOnHover: true,
            adaptiveHeight: true,
            easing: 'linear',
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, {
                breakpoint: 688,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
    });
});

