
var url =window.location.href;
var data =url.split('?');//[網址],[type=1]

var targetValue;

if(data.length>1){
    var type=data[1].split('=');//[type],[1]
    if (type[0] == "type") {
        targetValue = type[1];
    }
    
}