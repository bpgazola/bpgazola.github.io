$('.carousel-depositions').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: false,
    nextArrow: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 991,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, ]
});