$(function(){
	$.get("header.html","",function(r){
		$("body").prepend(r);
	});
	$.get("footer.html","",function(r){
		$("body").append(r);
	});
});