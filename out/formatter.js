setTimeout(function(){divs = document.querySelectorAll('.timestamp');

var a = 0;
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var year = 0;
var month = 0;
var date = 0;
var hour = 0;
var min = 0;
var sec = 0;
var time = 0;

console.log("hello world!");
console.log(divs.length);

for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
	
	a = new Date(div.innerHTML*1000);
	
	year = a.getFullYear();
    month = months[a.getMonth()];
    date = a.getDate();
    hour = a.getHours();
    min = a.getMinutes();
    sec = a.getSeconds();
    time = date+' '+month+' '+year+' '+hour+':'+min+':'+sec ;
    div.innerHTML = time;
}},2);