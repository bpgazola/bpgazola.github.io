$(function() {
    $(".navbar a, #arrow-up a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        });
    });
});