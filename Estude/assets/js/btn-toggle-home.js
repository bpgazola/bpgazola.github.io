$(function() {
    $('.btn-toggle-home-up').click(function(e) {
        e.preventDefault();
        target = $(this).data('target');
        $(target).toggle();
        $('.back').hide();
        $('.front').toggle();
    });
});

$(function() {
    $('.btn-toggle-home-down').click(function(e) {
        e.preventDefault();
        target = $(this).data('target');
        $(target).toggle();
        $('.front').hide();
    });
});