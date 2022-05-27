$('.carousel-researchers').slick({
    dots: false,
    infinite: true,
    autoplaySpeed: 2000,
    speed: 2000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    responsive: [{
        breakpoint: 1280,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true
        }
    }, {
        breakpoint: 991,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        }
    }]
});