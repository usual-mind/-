var nowPage = 0;
var musicStatus = 0;
$(document).ready(function() {
	//window.innerWidth 窗口的宽度
	var width = window.innerWidth;
	var height = window.innerHeight;

	//.content页面设置
	$(".content").width(width);
	//*4 有四个页面需要依次显示
	$(".content").height(height * 4);

	//.page页面设置
	$(".page").width(width);
	$(".page").height(height);

	//给content添加滑动监听
	$(".content").swipe({
		//当监听到滑动时，执行
		//event事件,direction方向,duration时间,distance距离, fingerCount触屏的点数
		swipe: function(event, direction, duration, distance, fingerCount) {
			if(direction == "up" && nowPage < 3) {
				nowPage += 1;
			}
			//			if(nowPage > 3) {
			//				nowPage = 3;
			//			}
			if(direction == "down" && nowPage > 0) {
				nowPage -= 1;
			}
			//			if(nowPage < 0) {
			//				nowPage = 0;
			//			}

			//			animate() jquery中改变CSS属性动画
			//			第一个{要改变的属性及其值}  格式为："left":"250px",逗号隔开
			//			第二个{动画时间，动画结束后执行的方法等}  function(){}为系统默认方法，动画结束之后执行
			//			function(){} 可以替换成自定义的方法
			//			$(".content").animate({"top":"-"+nowPage*height+"px"},{duration:2000,complete:function(){}});
			$(".content").animate({
				"top": "-" + nowPage * height + "px"
			}, {
				duration: 2000,
				//animageOfPage 动画结束后执行的方法
				//animageOfPage() 动画同时执行的方法
				complete: animageOfPage
			});
		}

	});
	$(".page1_building").fadeIn(1000, function() {
		$(".page1_flight").animate({
			"width": "60%",
			"height": "30%",
			"top": "40%"
		}, {
			duration: 2000
		});
	});

});

function animageOfPage() {
	if(nowPage == 1) {
		//第二页操作
		$(".page2_bg").fadeIn(1500, function() {
			$(".page2_farm").fadeIn(1000, function() {
				$(".page2_it").fadeIn(2000, function() {
					//				$(".page2_farm").fadeOut(2000);
				});
			});
		});
	} else if(nowPage == 2) {
		// 第三页操作
		$(".page3_bus").animate({
			"left": "-60%"
		}, {
			duration: 1000
		})
		$(".page3_busAvatar").animate({
			"right": "60%"
		}, {
			duration: 3000,
			complete: fadeImage
		})
	}

}

function fadeImage() {
	$(".page3_bus").fadeOut(500);
	$(".page3_BusStatioin").fadeOut(1000);
	$(".page3_busAvatar").fadeOut(1000, function() {
		$(".page3_TeamAvatar").fadeIn(1000);
		$(".page3_Wall").fadeIn(2000, function() {
			// 方式1: $(".xx").animate({"xx":"xx"},{duration:2000,complete:function(){}})
			// 方式2: $(".xx").animate({"xx":"xx"},2000,function(){}})
			$(".page3_Space").animate({
				"width": "30%"
			}, 2000, function() {
				$(".page3_WhereTxt").animate({
					"width": "65%"
				}, {
					duration: 2000
				});
			});

		});

	});
}
/*  路灯效果实现   */
$(".page4_light").click(function() {
	$(".page4_light").attr("src", "img/wechat/lightOn.png");
	$(".page4_offBg").fadeOut(1000);
	$(".page4_cornerTitle").fadeOut(1000);
	$(".page4_guide").fadeOut(1000);
	$(".page4_onBg").fadeIn(3000);
	$(".page4_we").fadeIn(4000);
});
/**  路灯效果实现 **/
//function lightBeat(obj){
//	obj.src = "img/wechat/lightOn.png";
//	$(".page4_offBg").fadeOut(1000);
//	$(".page4_cornerTitle").fadeOut(1000);
//	$(".page4_guide").fadeOut(1000);
//	$(".page4_onBg").fadeIn(3000);
//	$(".page4_we").fadeIn(2000);
//	
//}

/*  音乐播放  */
function music_start(obj) {
	if(musicStatus == 0) {
		musicStatus = 1;
		obj.src = "img/wechat/musicBtn.png";
		$("#music_audio")[0].play();
	} else if(musicStatus == 1) {
		musicStatus = 0;
		obj.src = "img/wechat/musicBtnOff.png";
		$("#music_audio")[0].pause();
	}

}