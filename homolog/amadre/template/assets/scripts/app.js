// wDetect
function wDetect() {
    var w = $(window).width();
    console.log(w);

    if (w <= 1024) {
        $('#mob-menu').show();
        $('#desk-menu').hide();
    } else {
        $('#mob-menu').hide();
        $('#desk-menu').show();
    };
}

// Canvas
(function($) {
    var controller = new slidebars();
    controller.init();
    $('.js-toggle-top-slidebar').on('click', function(event) {
        event.stopPropagation();
        controller.toggle('mobilenavigation');
    });
    // close
    $('.navigation__link').on('click', function(event) {
        event.stopPropagation();
        controller.close();
    });
})(jQuery);

// smoothScroll
function smoothScroll() {
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $('body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            location.hash = target;
        });
        // console.log('smoothScroll()');
        return false;
    });
};

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();

    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navigation').removeClass('__invert');
            $('.navigation a.active').removeClass('active');
            if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                $('.navigation li:last-child a').addClass('active');
            }else{
                $('.navigation a').eq(i).addClass('active');
            }
        }
        if ($('.navigation a').eq(3).hasClass('active')) {
            $('.navigation').addClass('__invert');            
        }
        if ($('.navigation a').eq(4).hasClass('active')) {
            $('.navigation').addClass('__invert');            
        }
        if ($('.navigation a').eq(5).hasClass('active')) {
            $('.navigation').addClass('__invert');            
        }        
    });
}).scroll();

//slick-slider
function slickSlider() {
    $('.cases-slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        rows: 3,
        slidesToScroll: 1,
        slidesToShow: 3,
        speed: 300,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 4,
                rows: 2
            }

        }, {
            breakpoint: 1200,
            settings: {
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                rows: 3
            }

        }]
    });
}

$(window).resize(function() {
    wDetect();
});

$(window).load(function() {
    //Vimeo
    $(function() {
        var iframe = document.getElementById('video');
        var player = $f(iframe);
        player.addEvent('ready', function() {
            player.addEvent('finish', onFinish);
        });
        $('.playpause').click(function() {
            player.api('paused', function(paused) {
                if (!paused) {
                    player.api('pause');
                    $(".playpause").removeClass('pause');
                } else {
                    player.api('play');
                    $(".playpause").addClass('pause');
                }
            });
        });

        function onFinish(id) {
            $(".playpause").removeClass('pause');
        }
    });
});

//Scroll
$(document).ready(function() {
    smoothScroll();
    wDetect();
    slickSlider();

    $('.menu-toggle').on('touchstart', function(e) {  
        $(this).toggleClass('open');
    });    
});
