$('.carousel-trail').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.prev-card-arrow',
    nextArrow: '.next-card-arrow',
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 991,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, ]
});