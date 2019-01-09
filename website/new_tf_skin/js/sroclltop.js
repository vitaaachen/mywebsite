
/*---流水榜---*/

var myVar = setInterval(scollTop, 2000);
//setInterval週期性執行，setTimeout間隔N秒後執行

function scollTop() { 
    //listboxA
    $("#listboxA ul").css("margin-top","0px");
    var elem = $("#listboxA ul li")[$("#listboxA ul li").size() - 1];
    elem.after($("#listboxA ul li")[0]);
    $("#listboxA ul").animate({marginTop: -115 + 'px'});
}

/*function scollTop() { 
    //listboxB
    $("#listboxB ul").css("margin-top","0px");
    var elem = $("#listboxB ul li")[$("#listboxB ul li").size() - 1];
    elem.after($("#listboxB ul li")[0]);
    $("#listboxB ul").animate({marginTop: -115 + 'px'});
}*/

$(document).ready(function() {
    //console.log( "leaderboard-list-Ready!" );
    $(".leaderboard-list #listboxA ").hover(
        function() {
            clearInterval(myVar);
            //console.log("滑入");
        }, function() {
            myVar = setInterval(scollTop, 2000);
            //console.log("滑出");
        }
    );
});

