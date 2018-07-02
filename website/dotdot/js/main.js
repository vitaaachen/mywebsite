
$(document).ready(function(){


	$('#nav01').click(function(){
		$('html,body').animate({scrollTop:$('#nav01_con').offset().top},500);
	});
	$('#nav02').click(function(){
		$('html,body').animate({scrollTop:$('#nav02_con').offset().top},500);
	});
	$('#nav03').click(function(){
		$('html,body').animate({scrollTop:$('#nav03_con').offset().top},500);
	})
	$('#nav04').click(function(){
		$('html,body').animate({scrollTop:$('#nav04_con').offset().top},500);
	})

	/*tab_active*/
	var lis=$(".tab_choice span");
	lis.click(function(){
		lis.each(function(){
			$(this).removeClass("tab_active");
			var targetID = $(this).data("click");
			$("#" + targetID).hide();
		})
		$(this).addClass("tab_active");
		var targetID = $(this).data("click");
		$("#" + targetID).show();
	});

	/*tab_subscribe*/
	var sub=$(".whitebg span");
	sub.click(function(){
		sub.each(function(){
			$(this).removeClass("activech");
			var targetID = $(this).data("click");
			$("#" + targetID).hide();
		})
		$(this).addClass("activech");
		var targetID = $(this).data("click");
		$("#" + targetID).show();
	});


	/*tool*/
	$("#cerf").hover(function(){
		$("#cerfshow").fadeToggle();
	});
	$(".sideImg01").hover(function(){
		$(".QRshow").fadeToggle();
	});
	$("#top").on("click", function(e){$('html, body').animate({scrollTop: 0}, 500);   return false;});

	$("#close_bottomtool").click(function(){
		$(".bottomtool").fadeOut();
	});


	/*slider*/
	(function(){
		var dly = 200;
		$('.scroll-gal').each(function() { 

			var el = $(this),
			ul = $('ul', el);

			$('div', el).not('.vewport').click(function() {

				if( ul.is(':animated') ) return;

				var first = $('li:first', ul),
				last = $('li:last', ul);


				switch( $(this).css('float') ) {

					case 'left':
					ul.css('left', -last.outerWidth(true)).prepend(last).animate({'left': 0}, dly);
					break;
					case 'right':
					ul.animate({'left': -first.outerWidth(true)}, dly, function(){
						$(this).append(first).css('left', 0)
					});
					break;

				} 

			}); 

		}); 

	})();


});


/*header變色*/
var offset = $('.head').offset();
$(window).scroll(function(){
	$('.head').addClass('head_color');
	if($(document).scrollTop() < 100){
		$('.head').removeClass('head_color');
	}
});

/*彈出html*/
function popup()
{
	window.open("service.html", "", "toolbar=no,height=300,width=500");
	return false;
}

/*dynamic_con*/
var yOffSet = 77;
var count = 7;
$(function(){
	//$(".anim_body").css("top",yOffSet);
	$(".anim_body").each(function() {
		$(this).append($(this).html());
	});
});

function doAnimUp(){
	
	$(".anim_dy").each(function() {
		var y = parseInt($(this).css("top")) ;

		if (y % (yOffSet * (count )) == 0 ) {
			$(this).children('.anim_body').css("top",y * -1);
		};

		
		$(this).css("top",y - yOffSet);
	});

}

setInterval(doAnimUp, 1500 );
