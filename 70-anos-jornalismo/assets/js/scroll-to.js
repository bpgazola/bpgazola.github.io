$(".arrow a").click(function() {
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
    }, 1000);
    return false;
});