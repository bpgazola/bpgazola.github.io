$(document).ready(function() {
    $('.collapse')
        .on('shown.bs.collapse', function() {
            $(this).parent().find(".fa-arrow-right").removeClass("fa-arrow-right").addClass("fa-times");
        })
        .on('hidden.bs.collapse', function() {
            $(this).parent().find(".fa-times").removeClass("fa-times").addClass("fa-arrow-right");
        });
});