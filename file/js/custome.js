$('.portfolio_img').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: '<i class="fa fa-arrow-right right_arrow" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-arrow-left left_arrow" aria-hidden="true"></i>',
});

$('.client_slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    nextArrow: '<i class="fa fa-arrow-right right_arrow" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-arrow-left left_arrow" aria-hidden="true"></i>',
});


jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
