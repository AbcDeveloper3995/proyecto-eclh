/*------------------------
INICIAMOS WOW
-------------------------*/
new WOW().init();

/*------------------------
CAROUSEL
-------------------------*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav:true,
       dots:false,
       autoWidth: false,
     navText: ['<i class="fa fa-arrow-circle-left"></i>', '<i class="fa  fa-arrow-circle-right"></i>'],
    responsive:{
          0: {
                    items: 1
                },
                500: {
                    items: 2,
                    margin: 20
                },
                800: {
                    items: 3,
                    margin: 20
                },
                1000: {
                    items: 4,
                    margin: 20
                }
    }
});

smoothScroll.init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    offset: 100, // Integer. How far to offset the scrolling anchor location in pixels
});

$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".arriba").fadeIn();
        } else {
            $(".arriba").fadeOut();
        }
    });

});

$(window).scroll(function () {

    var nav = $('.encabezado');
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        nav.addClass("menu");
    } else {
        nav.removeClass("menu");
    }
});





