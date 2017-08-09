// SCRIPT PARA EFEITO DESLIZANTE NA PÁGINA

var $doc = $("html, body");
	$(".arrow-up").click(function() {
    	$doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    	}, 500);
    return false;
});