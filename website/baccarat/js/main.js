$(document).ready(function () {
    console.log("JS");
    /*菜單*/
    var offset = $('.header').offset();
    $(window).scroll(function () {
        $('.header').addClass('header-fixed');
        $('.menu').addClass('menu-fixed');
        $('.sns,.logo').addClass('none-fixed');
        if ($(document).scrollTop() < 81) {
            $('.header').removeClass('header-fixed');
            $('.menu').removeClass('menu-fixed');
            $('.sns,.logo').removeClass('none-fixed');
        }
    });
    /*點擊菜單後到該處*/
    $('.menu li').click(function () {
        var name = $(this).attr("data-id");
        var id = "#" + name;
        var top = $(id).offset().top;
        $('html,body').animate({ scrollTop: top + 'px' }, 900);
    });
    /*gotop*/
    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: $('body').offset().top }, 900);
    });
    /*手機菜單*/
    $('.btn-menu').click(function () {
        //$('body').addClass('mb-body');
        $('.menu').addClass('mb-menu-open');
        $('.menu').removeClass('mb-menu-close');
    });
    $('.menu span').click(function () {
        //$('body').removeClass('mb-body');
        $('.menu').removeClass('mb-menu-open');
        $('.menu').addClass('mb-menu-close');
    });
});

