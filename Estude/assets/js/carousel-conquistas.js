$('.carousel-consquistas').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    /*prevArrow: '.arrow_prev',
    nextArrow: '.arrow_next',*/
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
