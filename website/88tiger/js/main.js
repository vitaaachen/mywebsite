
$(document).ready(function(){

	
	$(".nav-tabs a").click(function(){
		$(this).tab('show');
	});


	/*最新/推薦/熱門遊戲*/
	var lis=$(".lottery_choice li");
	lis.click(function(){
		lis.each(function(){
			$(this).removeClass("con_active");
			var targetID = $(this).data("click");
			$("#" + targetID).hide();
		})
		$(this).addClass("con_active");
		var targetID = $(this).data("click");
		$("#" + targetID).show();
	});

	/*最新/推薦/熱門遊戲*/
	var gameNav=$("#bt_lottery");
	gameNav.click(function(){
		gameNav.each(function(){
			$("img").attr("width","10");
		})
		$("img").attr("width","auto");
	});

	/*count up*/
	$('.stat-number').each(function (index) {
	   var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
	   $(this).prop('Counter', 1).animate({
	      Counter: $(this).text()
	   }, {
	      duration: 5000,
	      step: function (now) {
	         $(this).text(parseFloat(now).toFixed(size));
	      }
	   });
	});

	/*header變色*/
	var offset = $('.header_nav').offset();
	$(window).scroll(function(){
		$('.header_nav').addClass('header_anim');
		if($(document).scrollTop() < 113){
			$('.header_nav').removeClass('header_anim');
		}
	});

	/*news*/
	 $(function() {
		  $('#news-list > ul').cycle({
		   fx:      'scrollDown',
		   speed:   1000,
		   timeout: 3000,
		   pause:   1,
		   cleartypeNoBg: true
		 });
	});



});