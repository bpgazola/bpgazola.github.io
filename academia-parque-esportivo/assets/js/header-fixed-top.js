$(document).on("scroll", function() {
    if ($(document).scrollTop() > 30) {
        $('header').addClass('change');
        $('#spotlight').css('margin-top', 190);
        $('.element-fade-up').css('margin-top', 200);
        $('.element-fade-down').css('margin-top', 200);
    } else {
        $('header').removeClass('change');
        $('#spotlight').css('margin-top', 0);
        $('.element-fade-up').css('margin-top', 0);
        $('.element-fade-down').css('margin-top', 0);
    }
});