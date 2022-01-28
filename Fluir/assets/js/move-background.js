$(document).ready(function() {
    var pixelToMove = 80;
    $("#background-image").mousemove(function(e) {
        var width = $(this).innerWidth();

        var newValueX = (e.pageX / width) * pixelToMove;
        $(this).css('background-position', newValueX + '%' + ' ');
    });
});