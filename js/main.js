
$(document).ready(function () {


    $(".menu ul li,.mb-menu li").click(function () {
        $(this).addClass("menu-active");
        $(this).siblings().removeClass("menu-active");
        var name = $(this).attr("data-id");
        var id = "#" + name;
        var top = $(id).first().offset().top;
        $('html, body').animate({ scrollTop: top - 150 + 'px' }, 900);
    });

    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if (scrollVal > 68) {
            $(".menu").addClass("menu-fixed");
        } else {
            $(".menu").removeClass("menu-fixed");
        }
    });


    $("#gotop").click(function () {
        $('html, body').animate({ scrollTop: $("body").offset().top }, 900);
    });
    $("#sub-area-contact").click(function () {
        $('html, body').animate({ scrollTop: $("#contact").offset().top }, 900);
    });

    var clickmbMenu;
    $("#mb-menu").click(function () {
        if (clickmbMenu == 1) {
            $(".mb-menu").slideUp("slow");
            $("#mb-menu span").removeClass("mb-menu-active");
            clickmbMenu = 0;
        } else {
            $(".mb-menu").slideDown("slow");
            $("#mb-menu span").addClass("mb-menu-active");
            clickmbMenu = 1;
        }
    });

    var sectionIds = {};
    $(".scrolltion").each(function () {
        var $this = $(this);
        sectionIds[$this.attr("id")] = $this.first().offset().top - 320;
    });


    /*var Nowscrren = screen.width;
    console.log(Nowscrren);*/
    $(window).scroll(function (event) {
        var scrolled = $(this).scrollTop();
        /*for (key in sectionIds) {
            if (scrolled >= sectionIds[key]) {
                $(".menu ul li").removeClass("menu-active");
                var c = $("[data-id=" + key + "]");
                c.addClass("menu-active");
            }
        }*/

    });

});

$(document).ready(function () {

    /* --------------SKILL-------------- */

    $(".skill-con").hide();
    $(".skill-con:first").show();

    $(".btn-skill").click(function () {

        $(".skill-con").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

    });

});