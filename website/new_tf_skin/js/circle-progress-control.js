var progressBarOptions = {
	startAngle: -1.55,
    size: 100,
    thickness: 15,
    fill: {
		gradient: ["#44b718", "#daf1d1"]
	}
}

$(".circle").circleProgress(progressBarOptions).on("circle-animation-progress");

$('#circle-100').circleProgress({
    value : 1,
});

$('#circle-78').circleProgress({
    value : 0.78,
});

$('#circle-55').circleProgress({
    value : 0.55,
});

