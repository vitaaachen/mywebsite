$(function() {
    scollTop();
});

function scollTop() {
    setTimeout(function() {
        $(".listbox ul").css({
            marginTop: '0px'
        });
        var elem = $(".listbox ul li")[$(".listbox ul li").size() - 1];
        if(elem){
            elem.after($(".listbox ul li")[0]);
        }
        $(".listbox ul").animate({
            marginTop: -90 + 'px'
        })
        scollTop();
    }, 3000);
}

