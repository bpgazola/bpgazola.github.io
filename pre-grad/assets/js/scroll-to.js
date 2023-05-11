$(function() {
            $('.nav-link, .arrow img, .navbar-brand, .btn-more').click(function() {
                $('html, body').animate({
                    scrollTop: $($(this).attr("href")).offset().top - 100
                });
            });
        });