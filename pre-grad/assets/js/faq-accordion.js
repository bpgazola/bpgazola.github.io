$('.collapse')
            .on('shown.bs.collapse', function() {
                $(this).parent().find(".icon-plus").removeClass("icon-plus").addClass("icon-minus");
                $(this).attr('href');
                $('html,body').animate({
                    scrollTop: $(this).offset().top - 250
                }, 500);
            })
            .on('hidden.bs.collapse', function() {
                $(this).parent().find(".icon-minus").removeClass("icon-minus").addClass("icon-plus");

            });