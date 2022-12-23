$(function() {
    $('.arrow-down').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top - 120
        });
    });
});