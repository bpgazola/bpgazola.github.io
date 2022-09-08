$(function() {
    $('.btn-toggle-home-up').click(function(e) {
        e.preventDefault();
        target = $(this).data('target');
        $(target).slideToggle(200);
        $('.back').slideToggle(200);
    });
});

$(function() {
    $('.btn-toggle-home-down').click(function(e) {
        e.preventDefault();
        target = $(this).data('target');
        $(target).slideToggle(200);
        $('.front').slideToggle(200);
    });
});
