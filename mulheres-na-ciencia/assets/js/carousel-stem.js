$('.carousel-stem').slick({
    dots: false,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 300,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '.arrow-prev',
    nextArrow: '.arrow-next',
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 991,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, ]
});