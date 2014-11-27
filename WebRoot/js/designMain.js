require.config({
	paths:{
		jquery:'jquery-2.1.1.min',
		pin:"jquery.pin"
	}
});

require(['jquery','pin'],function($){
		var cssUrl = require.toUrl("../css/designNavi.css");
	    var link = document.createElement("link");
	    link.type = "text/css";
	    link.rel = "stylesheet";
	    link.href = cssUrl;
	    document.getElementsByTagName("head")[0].appendChild(link);
	    
	    var navi = $('<div class="designNavi-container"><div class="naviSmallArrow"></div><div id="naviBar" class="navi-block selected left"></div><div id="naviTool" class="naviBar-container left"><div class="naviItem">视觉识别系统</div><div class="naviItem">空间识别系统</div><div class="naviItem">导视设计</div><div class="naviItem">网站设计</div><div class="naviItem">包装设计</div><div class="naviItem">摄影/影视</div></div><div class="clear"></div></div>');
	    
	    $(".logo-container").append(navi);
		var timeOutHide;
		$("#naviBar").hover(function(){
			self.clearTimeout(timeOutHide);
			showNaviTool();
		},function(){
			timeOutHide =self.setTimeout(function(){
				hideNaviTool();
			}, 1000);
		});
		
		init_naviBar();
		function init_naviBar(){
			var index =window.designIndex;
			$(".naviSmallArrow").css({
				"top":index*21+6
			});
			$(".naviItem").eq(index).css("color","#94c525");
		}
		
		function showNaviTool(){
			$("#naviTool,.naviSmallArrow").show();
			$("#naviBar").removeClass("selected");
		}
		
		function hideNaviTool(){
			$("#naviTool,.naviSmallArrow").hide();
			$("#naviBar").addClass("selected");
		}
		
		$("#naviTool").hover(function(){
			self.clearTimeout(timeOutHide);
		},function(){
			timeOutHide =self.setTimeout(function(){
				hideNaviTool();
			},1000);
		});
		
		var urls = ["visualIdentity.html","spaceIdentity.html","signDesign.html","webDesign.html","packingDesign.html","photography.html"];
		$(".naviItem").each(function(i,e){
			$(e).click(function(){
				window.location.href = urls[i];
			});
		});
		
		
		$(".logo-container .item").click(function(){
			window.location.href = $(this).attr("href");
		});
		
		$(".designNavi-container").pin();
});

