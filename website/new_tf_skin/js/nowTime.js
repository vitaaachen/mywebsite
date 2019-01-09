function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
} 

function ShowTime(){

    var NowDate = new Date();

    var year = NowDate.getFullYear();
    var month = NowDate.getMonth();
    var day = NowDate.getDate() ;

　  var h = addZero(NowDate.getHours());
　  var m = addZero(NowDate.getMinutes());
　  var s = addZero(NowDate.getSeconds());　

　  document.getElementById("date").innerHTML = "GMT+8"+" "+year+"年"+month+"月"+day+"日";
    document.getElementById("time").innerHTML = h+":"+m+":"+s;

　  setTimeout("ShowTime()",1000);

}