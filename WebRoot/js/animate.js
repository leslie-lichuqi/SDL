$(function(){
	animate();
});
function animate(){
		$("#animate").bind("mouseenter mouseleave",
			function(e){
				var w = $(this).width();
				var h = $(this).height();
				/*var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
		        var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);*/
		        var x = (e.pageX - $(".page-container").offset().left-this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
		        var y = (e.pageY - $(".spaceIdentity").offset().top-this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
		        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4; //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
				var eventType = e.type;
				console.log(eventType);
				if(e.type == 'mouseenter'){
					switch(direction){
						case 0:
							$(this).find("div").css({
								"left":"0px",
								"top":"-"+$(this).height()+"px"
							});
							break;
						case 1:
							$(this).find("div").css({
								"left":$(this).width()+"px",
								"top":"0px"
							});
							break;
						case 2:
							$(this).find("div").css({
								"left":"0px",
								"top":$(this).height()+"px"
							});
							break;
						case 3:
							$(this).find("div").css({
								"left":"-"+$(this).width()+"px",
								"top":"0px"
							});
							break;
					}
					$(this).find("div").show().animate({"left":0,"top":0},200);
				}else{
					$(this).find("div").fadeOut(200);
				}
			});
	}