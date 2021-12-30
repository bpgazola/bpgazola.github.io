$(function() {
    $('.btn-toggle').click(function(e) {
        e.preventDefault();
        target = $(this).data('target');
        $(target).fadeToggle();
    });
});