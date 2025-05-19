// Slick Carousel
$('.carousel-spas').slick({
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '.arrow-prev',
    nextArrow: '.arrow-next',
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

window.addEventListener("load", function(){
window.cookieconsent.initialise({
"palette": {
"popup": {
"background": "#EEEEEE"    //cor do fundo
},
"button": {
"background": "#000000",
"text": "#ffffff",         //cor do botão
"border": "#000000"        //cor da borda do botão
}
},
"position": "bottom-left",
"content": {
"message": "Este site usa cookies para lhe dar uma melhor experiência.",
"dismiss": "Aceito",
"link":"Saiba mais",
"href": "http://unbouncepages.com/politicas-privacidade/"
}
})});