$(function() {
    event.preventDefault();
    $('.navbar-brand, .navbar-nav a, .header a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        });
    });
});