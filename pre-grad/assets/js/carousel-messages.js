$('.carousel-messages').slick({
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 300,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.arrow-prev-messages',
    nextArrow: '.arrow-next-messages',
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
