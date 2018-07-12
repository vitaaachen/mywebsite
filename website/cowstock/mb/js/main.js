$(document).ready(function(){

  $("#btn_QQ_show").click(function(){
   		$(".QQCon").fadeIn();
   		$("#btn_QQ_hide").fadeIn();
   		$(".QQCon").removeClass("hideQQAnim");
   		$(".QQCon").addClass("showQQAnim");
  });
  $("#btn_QQ_hide").click(function(){
   		$(".QQCon").fadeOut();
   		$("#btn_QQ_hide").fadeOut();
   		$(".QQCon").removeClass("showQQAnim");
   		/*$(".QQCon").addClass("hideQQAnim");*/
  });


	/*$("#p1,#p2,#p3,#p4").click(function(){
		$("#copok").fadeIn();
		$("#copok").delay(500).fadeOut();
	});*/


});

$(document).ready(function(){
	
	  $("#btn-ser-p2").click(function(){
			   $("#btn-ser-p2-con").fadeIn();
			   $("#btn_QQ_hide").fadeIn();
			   $("#btn-ser-p2-con").removeClass("hideQQAnim");
			   $("#btn-ser-p2-con").addClass("showQQAnim");
	  });
	  $("#btn_QQ_hide").click(function(){
			   $("#btn-ser-p2-con").fadeOut();
			   $("#btn_QQ_hide").fadeOut();
			   $("#btn-ser-p2-con").removeClass("showQQAnim");
	  });
	  
	  	$("#btn-ser-p1").click(function(){
			$("#btn-ser-p1-con").fadeIn();
			$("#btn_QQ_hide").fadeIn();
			$("#btn-ser-p1-con").removeClass("hideQQAnim");
			$("#btn-ser-p1-con").addClass("showQQAnim");
		});
		$("#btn_QQ_hide").click(function(){
			$("#btn-ser-p1-con").fadeOut();
			$("#btn_QQ_hide").fadeOut();
			$("#btn-ser-p1-con").removeClass("showQQAnim");
		});

		$("#btn-ser-p3").click(function(){
			$("#btn-ser-p3-con").fadeIn();
			$("#btn_QQ_hide").fadeIn();
			$("#btn-ser-p3-con").removeClass("hideQQAnim");
			$("#btn-ser-p3-con").addClass("showQQAnim");
		});
		$("#btn_QQ_hide").click(function(){
			$("#btn-ser-p3-con").fadeOut();
			$("#btn_QQ_hide").fadeOut();
			$("#btn-ser-p3-con").removeClass("showQQAnim");
		});

		$("#btn-ser-p4").click(function(){
			$("#btn-ser-p4-con").fadeIn();
			$("#btn_QQ_hide").fadeIn();
			$("#btn-ser-p4-con").removeClass("hideQQAnim");
			$("#btn-ser-p4-con").addClass("showQQAnim");
		});
		$("#btn_QQ_hide").click(function(){
			$("#btn-ser-p4-con").fadeOut();
			$("#btn_QQ_hide").fadeOut();
			$("#btn-ser-p4-con").removeClass("showQQAnim");
		});
	  
});

/*function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
}*/