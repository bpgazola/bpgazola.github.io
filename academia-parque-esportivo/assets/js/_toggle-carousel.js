$(function() {
    $('.btn-toggle').click(function() {
        target = $(this).data('target');
        $(target).toggle();
    });
});