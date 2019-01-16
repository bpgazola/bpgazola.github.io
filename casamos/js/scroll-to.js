// SCRIPT PARA EFEITO DESLIZANTE NA PÁGINA

var $doc = $("html, body");
	$(".arrow a, li a").click(function() {
    	$doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    	}, 1000);
    return false;
});