$('.carousel-escolas').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 5,
    /*prevArrow: '.arrow_prev',
    nextArrow: '.arrow_next',*/
    responsive: [{
        breakpoint: 801,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});