/*
    세탁기 : 21.06
*/


/** 인공지능 DD모터 x 6모션 **/
function slideSixMotionSlider() {
	var $target = $('.dryers_202106 .slide_six_motion .swiper-container');
	var slideOption = {
		effect :'fade', // 페이드 효과 사용
		loop:true,
		pagination:false,
		navigation:false,
        autoplay:{
        	delay:3500,
        	disableOnInteraction: false,
        },
		speed:300,
		on:{
			slideChange:function(){
				var idx = this.realIndex
				$('.slide_six_motion_pagn a').removeClass('on');
				$('.slide_six_motion_pagn a').eq(idx).addClass('on');
			},
		},
		//observer:true,
		//observeParents:true,
	};
	slideSixMotion = new Swiper($target.get(0), slideOption);
	slideSixMotion.autoplay.stop();
	
	if ($target.find('video').length){
		slideSixMotion.on('slideChange', function (e, idx) {
			$target.find('.swiper-slide').find('video').each(function(params){
				$(this).get(0).currentTime = 0;
				$(this).get(0).pause();
			});
			$target.find('.swiper-slide').eq(slideSixMotion.activeIndex).find('video').each(function(){
				// Show loading animation.
				var playPromise = $(this).get(0).play();
				if (playPromise !== undefined) {
					playPromise.then(_ => {
						$(this).get(0).play();
					})
					.catch(error => {
						$(this).get(0).currentTime = 0;
						$(this).get(0).pause();
					});
				}
			});
		});
	}
}
$(function(){
	$('.slide_six_motion_pagn a').click(function(e){
        e.preventDefault();
        var img_index = $(this).index();
		
		slideSixMotion.slideTo(img_index);
    });   
 }); 	
	


/** Swiper : 날씨 **/
function slideWeatherSlider() {
	var $target = $('.dryers_202106 .slide_weather .swiper-container');
	var slideOption = {
		effect : 'fade', // 페이드 효과 사용
		loop:true,
		pagination:{
			el:'.slide_weather .swiper-pagination',
			clickable:true,
		},
		navigation:{
			nextEl:'.slide_weather .swiper-button-next',
			prevEl:'.slide_weather .swiper-button-prev',
		},
		breakpoints:{

		},
		speed:500,
		observer:true,
		observeParents:true,
		on: {
			slideChange:function(){
				var idx = this.realIndex + 1
				$('.slide_weather .swiper-container').removeClass('s1').removeClass('s2').removeClass('s3');
				$('.slide_weather .swiper-container').addClass('s'+idx+'');
			},
		},
	};
	slideWeather = new Swiper($target.get(0), slideOption);
}


/* count */
function countNumAni(countNum){
	Number.isInteger = Number.isInteger || function (value) {
		return typeof value == "number" && isFinite(value) && Math.floor(value) == value;
	}
	countNum.map(function (num) {
		$({ val : num.first }).animate({ val : num.last }, {
			duration: num.duration,
			step: function() {
				if (Number.isInteger(num.last) == false) {
					num.$el.html(this.val.toFixed(1));
				} else {
					num.$el.html(this.val.toFixed(0));
				}
			},
			complete: function() {
				if (Number.isInteger(num.last) == false) {
					num.$el.html(this.val.toFixed(1));
				} else {
					num.$el.html(this.val.toFixed(0));
				}
			}
		});
	});
}


$(function(){
	/* Swiper */
	//slideStepSlider();
	slideWeatherSlider();
	slideSixMotionSlider();
	

	/* 페이지 내 스크롤 앵커  */
    $('.dryers_202106 .btn_go_info').click(function(e){
        e.preventDefault();
		var t = $(this).attr('href');
        if ($(t).length){
            $('html, body').stop().animate({
                scrollTop:$(t).offset().top - 158
            }, 800, function(){
                $(t).get(0).focus({preventScroll:false});
                $('html,body').scrollTop($(t).offset().top - 158);
            });
        }
    });
    $('.dryers_202106 .btn_anchor a').click(function(e){
        e.preventDefault();
		var t = $(this).attr('href');
        if ($(t).length){
            $('html, body').stop().animate({
                scrollTop:$(t).offset().top - 142
            }, 800, function(){
                $(t).get(0).focus({preventScroll:false});
                $('html,body').scrollTop($(t).offset().top - 142);
            });
        }
    });
});



/* Scroll Event */
$(window).on('scroll', feScrollFn);
$.fn.feScrollGet = function() {
    var offset = $(window).scrollTop() + $(window).height() * 0.9;
	var offset_half = $(window).scrollTop() + $(window).height() * 0.2;
  	
	$animate = $('.animate');
    $animate.each(function(i) {
        var $ani = $(this),
            ani = $ani,
            item_top = $ani.offset().top,
            item_h = $ani.height();
		if (($ani.offset().top) < offset) {
            if (!$ani.hasClass('active')) {
                $ani.addClass('active');	
            }
			if(!$('.slide_six_motion').hasClass('active')){
				slideSixMotion.slideTo(1);
			}
			if(!$('.slide_weather').hasClass('active')){
				slideWeather.slideTo(1);
			}
			if(!$('.scene02_2_ani').hasClass('active')){
				var numbers = [
					{$el:$('.scene02_2_ani .count20'), first:0, last:20, duration:1500},
				]
				countNumAni(numbers);
			}
			if(!$('.scene01_3_ani').hasClass('active')){
				var numbers = [
					{$el:$('.scene01_3_ani .count40'), first:10, last:40, duration:3000},
				]
				countNumAni(numbers);
			}	
        } else {
            if ($ani.hasClass('active')) {
               $ani.removeClass('active');
            }
        }
    });
	
	
	$videos = $('.img_video');
    $videos.each(function(i) {
        var $video = $(this).find('video'),
            video = $video,
            item_top = $video.offset().top,
            item_h = $video.height();
		if (($video.offset().top) < (offset) && (item_top + item_h) > (offset_half)) {
            if (!$video.hasClass('video_on')) {
                video.get(0).play();
                $video.addClass('video_on');
            }
        } else {
            if ($video.hasClass('video_on')) {
                video.get(0).pause();
				video.get(0).currentTime = 0;
                $video.removeClass('video_on');
            }
        }	
    });
	
    $('.slide_six_motion').each(function(i) {
        var $video2 = $(this),
            video2 = $video2,
            item_top = $video2.offset().top,
            item_h = $video2.height();
		
			if (($video2.offset().top) < (offset) && (item_top + item_h) > (offset_half)) {
				if (!$video2.hasClass('video_on')) {
					slideSixMotion.autoplay.start();
					$video2.addClass('video_on');
					
				}
			} else {
				if ($video2.hasClass('video_on')) {
					slideSixMotion.autoplay.stop();
					$video2.removeClass('video_on');
				}
			}	
    });

};

// Scroll Event Function 
function feScrollFn() {
    $.fn.feScrollGet();
}



