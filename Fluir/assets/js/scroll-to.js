$(function() {
    $('.navbar-nav a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        });
    });
});