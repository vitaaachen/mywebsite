
$(document).ready(function () {

    /*Gotop*/
    $(function () {
        $('#gotop').click(function () {
            $('html,body').animate({ scrollTop: $('body').offset().top }, 500);
        });
    });

    /*PC-MENU*/
    $(window).scroll(function () {
        $('.top').addClass('top-fixed');
        $('.menuBar').addClass('menuBar-fixed');
        $('.menu-list a i').addClass('menu-list-icon-hidden');
        $('.menu-list').addClass('menu-list-pos-top');
        $('.brand-logo img').addClass('brand-logo-small');
        $('#gotop').addClass('gotop-show');

        if ($(document).scrollTop() < 100) {
            $('.top').removeClass('top-fixed');
            $('.menuBar').removeClass('menuBar-fixed');
            $('.menu-list a i').removeClass('menu-list-icon-hidden');
            $('.menu-list').removeClass('menu-list-pos-top');
            $('.brand-logo img').removeClass('brand-logo-small');
            $('#gotop').removeClass('gotop-show');
        }
    });


    /*MB-MENU*/
    var door = "1";
    $(".btn-menu").click(function () {
        if (door == "0") {
            $(".mb-menu-con").removeClass("mb-menu-con-show");
            $(".btn-menu > span:nth-child(1)").removeClass("btn-menu-chg1");
            $(".btn-menu > span:nth-child(2)").removeClass("btn-menu-chg2");
            $(".btn-menu > span:nth-child(3)").removeClass("btn-menu-chg3");
            $(".btn-menu").removeClass("btn-menu-fixed");
            door = "1";
        } else {
            $(".mb-menu-con").addClass("mb-menu-con-show");
            $(".btn-menu > span:nth-child(1)").addClass("btn-menu-chg1");
            $(".btn-menu > span:nth-child(2)").addClass("btn-menu-chg2");
            $(".btn-menu > span:nth-child(3)").addClass("btn-menu-chg3");
            $(".btn-menu").addClass("btn-menu-fixed");
            door = "0";
        }
    });

    /*SIDEBAR-SERVICE*/
    $(".ser-bg").hover(function () {
        var name = $(this).attr("data-name");
        var id = "#" + name;
        $(id).fadeIn();
    }, function () {
        var name = $(this).attr("data-name");
        var id = "#" + name;
        $(id).fadeOut();
    });

});




