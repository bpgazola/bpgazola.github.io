$(function() {
    $('a.navbar-brand').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        });
    });
});