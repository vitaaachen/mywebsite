
$(document).ready(function () {

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
        sectionIds[$this.attr("id")] = $this.offset().top;
    });


    /*var Nowscrren = screen.width;
    console.log(Nowscrren);*/
    $(window).scroll(function (event) {
        var scrolled = $(this).scrollTop();

        var nowScrolled = 0;
        var moveTarget = undefined;
        $(".scrolltion").each(function () {
            var targetScrolled = $(this).offset().top - 300;

            if (scrolled >= targetScrolled) {
                if (targetScrolled > nowScrolled) {
                    nowScrolled = targetScrolled;
                    moveTarget = this;
                }
            }
        });

        if (moveTarget != undefined) {
            $(".menu ul li").removeClass("menu-active");
            var c = $("[data-id=" + $(moveTarget).attr("id") + "]");
            c.addClass("menu-active");
            //console.log("key"+$(moveTarget).attr("id"));
            //console.log("sectionIds[key]"+sectionIds[key]);
            //console.log("scrolled"+scrolled);
        } else {
            $(".menu ul li").removeClass("menu-active");
        }
        //}
    });


    $(".menu ul li,.mb-menu li").click(function () {
        $(this).addClass("menu-active");
        $(this).siblings().removeClass("menu-active");
        var name = $(this).attr("data-id");
        var id = "#" + name;
        var top = $(id).first().offset().top;
        $('html, body').animate({ scrollTop: top - 150 + 'px' }, 900);
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