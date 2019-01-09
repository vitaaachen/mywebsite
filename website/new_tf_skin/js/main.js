$(document).ready(function(){

    /*---註冊的彈窗---*/
    $(".register-door-open").click(function(){
        $(".body-popup-bg").fadeIn(300);
        $(".register-popup").fadeIn(1000);
    });
    $(".register-popup .close-simple-user-door").click(function(){
        $(".register-popup").slideUp(300);
        $(".body-popup-bg").fadeOut(1000);
    });

    /*---登入的彈窗---*/
    $(".login-door-open").click(function(){
        $(".body-popup-bg").fadeIn(300);
        $(".login-popup").fadeIn(1000);
    });
    $(".login-popup .close-simple-user-door").click(function(){
        $(".login-popup").slideUp(300);
        $(".body-popup-bg").fadeOut(1000);
    });

    /*--購買體驗金---*/
    $(".expgold-popup-open").click(function(){
        $(".body-popup-bg").fadeIn(300);
        $(".expgold-popup").fadeIn(1000);
    });
    $(".expgold-popup .close-simple-user-door").click(function(){
        $(".expgold-popup").slideUp(300);
        $(".body-popup-bg").fadeOut(1000);
    });

    /*---忘記密碼---*/
    $(".forgive-popup-open").click(function(){
        $(".body-popup-bg").fadeIn(300);
        $(".forgive-popup").fadeIn(1000);
    });
    $(".forgive-popup .close-simple-user-door").click(function(){
        $(".forgive-popup").slideUp(300);
        $(".body-popup-bg").fadeOut(1000);
    });

    /*---系統訊息---*/
    $(".system-popup-open").click(function(){
        $(".body-popup-bg").fadeIn(300);
        $(".system-popup").fadeIn(1000);
    });
    $(".system-popup .close-simple-user-door").click(function(){
        $(".system-popup").slideUp(300);
        $(".body-popup-bg").fadeOut(1000);
    });

    /*---go-top---*/
    /*--回到最上層--*/
    $(".gotop").click(function(){ 
        $("html,body").animate({scrollTop:$("body").offset().top}, 500);
    });  


    /*---Live-Tab---*/
    /*--有預設顯示的--*/
    /*--真人視訊廳的Tab--*/
    /*--此功能已在前台關閉--*/
    $(".live-lobby-ch").click(function(){
        $(".live-lobby-ch").each(function(){
            $(this).removeClass("live-lobby-active");
            var LiveMenu = $(this).attr("data-live");
            $("#"+LiveMenu).removeClass("live-game-active");
        })
        $(this).addClass("live-lobby-active");
        var LiveMenu = $(this).attr("data-live");
        $("#"+LiveMenu).addClass("live-game-active");
    });

    /*---Sort-Tab---*/
    /*--電子娛樂廳的菜單選擇(手機版)--*/
    var screenWidth = window.screen.width;
    var itemIsShow = false; //預設關閉
    var lastShowItem = null; //判斷最後一個點擊的是否與上一個相同
    if(screenWidth<1025){
        $(".sort .name").click(function(e){
            var m = $(this).attr("data-species");
            var speciesArrow = $(this).find(".species-arrow");
            if (lastShowItem == m) {
                //如果上一個點擊的ID和最後一個相同，就把此下拉選單隱藏
                $(".species-arrow").removeClass("vertical-flip");
                $(".species").fadeOut();
                itemIsShow = false;
                lastShowItem = null;
            }
            else
            {
                if( itemIsShow == false ){
                    //如果下拉選單還沒顯示，點擊後抓到該id並顯示此下拉選單
                    $(speciesArrow).addClass("vertical-flip");
                    $("#"+m).fadeIn();
                    itemIsShow = true ;
                }else{
                    //如果下拉選單已顯示，就刪除全部的下拉選單
                    $(".species-arrow").removeClass("vertical-flip");
                    $(".species").fadeOut();
                    $(speciesArrow).addClass("vertical-flip");
                    $("#"+m).fadeIn();
                }
                lastShowItem = m;
            }
        });

        /*--取值--*/
        $(".sort>.species>span").click(function() {
            var sortText=$(this).text();
            //console.log( bankText);
            var slotID = $(this).parents().attr("id");
            //console.log(slotID);
            $("[data-species='"+slotID+"']").text(sortText);
            $(".species").fadeOut();
        });
    }

    /*---Promotions-Click---*/
    /*--優惠活動--*/
    $(".activity-item").click(function(){
        var activityItem = $(this).attr("data-activity");
        var activityMore = $(this).find(".btn-activity-more");
        var tmp = null;
        //console.log(activityItem);
        tmp = activityItem;
        //console.log("tmp02="+tmp);
        if( $("#"+activityItem).hasClass("activity-des-active")){
            if(tmp == activityItem){
                $(activityMore).fadeIn();
            }
            $("#"+activityItem).slideUp("slow");
            $("#"+activityItem).removeClass("activity-des-active");

        }else{
            $(activityMore).fadeOut();
            $("#"+activityItem).slideDown("slow");
            $("#"+activityItem).addClass("activity-des-active");
        }
    });

    var isDrwopOpen=false;
    $(".userinput-con .dropmenu").click(function() {
        
        if(isDrwopOpen){
            $(".userinput-con .dropmenu .dropmenu-cnotent").fadeOut();
            isDrwopOpen=false;
            //console.log("關");
        }else{
            $(".userinput-con .dropmenu .dropmenu-cnotent").fadeIn();
            isDrwopOpen=true;
            //console.log("開");
        }
    });


    if(screenWidth<426){
        $(".activity-img img").each(function(index,value){
            //console.log(index);
            //console.log(value);
            var num = index+1;
            index+$(this).attr("src","img/promotionsbanner/mb/mb-promo0"+num+".jpg");
        });

    }


    /*---財務中心---*/
    /*--虛擬帳號下拉選單--*/
    $(".userinput-con .dropmenu .dropmenu-cnotent>p").click(function() {
        var bankText=$(this).text();
        //console.log( bankText);
        $(".show-bank").text(bankText);
    });

    /*---財務中心---*/
    /*--超商支付選擇--*/
    $(".convenience-store").click(function(){
            //不可複選
            $(".convenience-store").removeClass("convenience-store-active");
            $(this).addClass("convenience-store-active");
    });

    /*---Time---*/
    /*--在body增加時間--*/
    

});