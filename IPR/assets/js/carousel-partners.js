$('.carousel-partners').slick({
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '.arrow-prev',
    nextArrow: '.arrow-next',
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, ]
});