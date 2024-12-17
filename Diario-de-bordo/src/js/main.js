$('.navbar-toggler-icon').click(function() {
    $('.navbar-toggler-icon').toggleClass('open');
});

$('.carousel-destinations').slick({
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '',
    nextArrow: '',
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});