(function($) {

    $('.popup').click(function(e) {
        if (e.target.className.indexOf('js-popup-close') !== -1) {
            $(this).fadeOut();
        }
    });

    $('.check').on('change', function() {
        if ($(this).hasClass('checked')) {
            $(this).removeClass('checked');
            $('.submit').attr('disabled', true);
        } else {
            $(this).addClass('checked');
            $('.submit').removeAttr('disabled');
        }
    });
    $('.js-popup-open').on('click', function() {
        $('.popup').fadeIn();
    });

    setTimeout("$('.hidden').fadeIn('slow');", 300000);

    setTimeout(function() {
        $('.reviews .owl-stage-outer').css({
            'height': $('.reviews .owl-item.active').height()
        });
    }, 500);

    let $banner = $('.banner');


    $('.js-banner-close').click(function() {
        $banner.fadeOut();
        localStorage.setItem('bannerClosed', 'true')
    });

    $('.js-open-form').click(function() {
        $('.banner-form').addClass('showed');
        $('.banner-buttons').hide()
    });

    let banner = setTimeout(function() {
        $(document).on('mousemove', function(e) {
            if (e.clientY < 10 && !localStorage.getItem('bannerClosed')) {
                $banner.fadeIn();
                clearTimeout(banner);
            }
        })
    }, 1000);

    if ($(window).width() <= 1023) {
        setTimeout(function() {
            if (!localStorage.getItem('bannerClosed')) {
                $banner.fadeIn();
            }
        }, 120000)
    }

    if ($(window).width() < 500) {
        $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
            delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
            if (delta >= 0) {
                $('.top-banner').css({ top: '0px' })
            } else {
                $('.top-banner').css({ top: '-65px' })
            }
        })
    }


})(jQuery);