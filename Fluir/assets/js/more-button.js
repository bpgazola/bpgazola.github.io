//Botão ver mais
$(document).ready(function() {
    $(".video-cases-hide").hide();

    $(".btn-more").click(function() {
        $(".video-cases-hide").fadeToggle(500);
        $(".btn-more").hide();
    });
});