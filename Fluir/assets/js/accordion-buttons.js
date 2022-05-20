$(document).ready(function() {
    $('.collapse')
        .on('shown.bs.collapse', function() {
            $(this).parent().find(".plus").removeClass("plus").addClass("minus");
        })
        .on('hidden.bs.collapse', function() {
            $(this).parent().find(".minus").removeClass("minus").addClass("plus");
        });
});