$('.icon-menu, .icon-menu-close, #panelMenu li').on('click', function () {
    target = $(this).data('target');
    $(target).toggleClass('active');
});


$('.carousel-spotlight').slick({
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 300,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '',
    nextArrow: '',
});

$('.carousel-method').slick({
    dots: false,
    infinite: false,
    autoplaySpeed: 3000,
    speed: 300,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.prev',
    nextArrow: '.next',
    responsive: [{
        breakpoint: 1300,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 650,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },]
});

$('#panelMenu a, .float-button').click(function () {
    $('html, body').animate({ scrollTop: $($(this).attr("href")).offset().top});
});

$(document).ready(function () {
    AOS.init();
});

