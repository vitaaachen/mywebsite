function mymedia() {
    var myscreen=screen.availWidth; 
    if(myscreen<769) {document.location.href="./mb/index.html";return;}
    }
    mymedia();


$(function(){
    $(function(){ $('.top-icon').click(function(){ 
        $('html,body').stop();
        $('html,body').animate({scrollTop:$('.header').offset().top}, 900);
    });});
})

$(function() {
    var offset = $("#sidebar").offset();
    var topPadding = 15;
    $(window).scroll(function() {
        if ($(window).scrollTop() > offset.top) {
            $("#sidebar").stop().animate({
                marginTop: $(window).scrollTop() - offset.top + topPadding
            });
        } else {
            $("#sidebar").stop().animate({
                marginTop: '10px'
            });
        };
    });
});