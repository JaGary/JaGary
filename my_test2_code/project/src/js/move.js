$(function () {
	/*
	 	原理：每次运动4个图距离，运动出去的图片，剪切拼接到末尾
	 	
	 	1、ul的宽度：图片的宽度*图片个数
	 	2、开定时器，每次运动4个图距离，往左边运动：-4*iW
	 	3、出去的图片剪切拼接到后面
	 	4、点击按钮切换
	 	
	 */
	//1、ul的宽度：图片的宽度*图片个数
	let wNum = $('.main_list li').size() * $('.main_list li').eq(0).outerWidth();
	$('.main_list').css('width', wNum);
	let iW = $('.main_list li').eq(0).outerWidth() * 4 + 60; //运动距离
	
	//2、开定时器，每次运动4个图距离，往左边运动：-4*iW +60(margin值)
	let timer = null;
	clearInterval(timer);
	timer = setInterval(next, 5000); //间隔时间

	function next() { 
		$('.main_list').stop().animate({
			'left': -iW
		}, 2000, function () {
			//出去的图片，剪切放到末尾
			$('.main_list li:lt(4)').insertAfter($('.main_list li:last'));
			//ul归位
			$('.main_list').css('left', 0);
		});
	}

	function prev() {
		//先剪切最后的四个图插入到ul首位
		for (var i = 0; i < 4; i++) {
			$('.main_list li:last').insertBefore($('.main_list li:first'));
		}
		//预留4个图位置
		$('.main_list').css('left', -iW);
		//挪到可视区
		$('.main_list').stop().animate({
			'left': 0
		}, 2000);
	}

	//4、点击切换下一页：四张图
	$('.next2').click(function () {
		next();
	});

	$('.prev2').click(function () {
		prev();
	});
});