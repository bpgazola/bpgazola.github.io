$('.carousel-stickers').slick({
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 300,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '.arrow-prev-sticker',
    nextArrow: '.arrow-next-sticker',
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
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, ]
});
