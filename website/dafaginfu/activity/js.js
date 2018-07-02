
	var d=new Date();
	/*document.write("从 2017/11/07 00:00 經過了" +(Math.floor(d.getTime()/1000)-1509926400)+ " 秒。");*/
	var Passtime=Math.floor(Math.floor((Math.floor(d.getTime()/1000)-1509926400)/60)/60);
	/*document.write("<br>" + "从 2017/11/07 00:00 經過了" + Passtime + "小時。");*/
	var Addpeo=500+((Passtime-24)*7);
	/*document.write("<br>" + "已參予" + Addpeo + "人");*/
	var n = d.getHours();
	var Lastnum=(500-(n*13));
	/*document.write("<br>" + "剩餘" + Lastnum + "份");*/

	$(document).ready(function(){
		$("#nowpeo").html(Addpeo);
		$("#nownum").html(Lastnum);
		/*count up*/
		$('.stat-number').each(function (index) {
		   var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
		   $(this).prop('Counter', 1).animate({
		      Counter: $(this).text()
		   }, {
		      duration: 1500,
		      step: function (now) {
		         $(this).text(parseFloat(now).toFixed(size));
		      }
		   });
		});
	});
