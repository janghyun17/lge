/*
    공기청정기 : 21.07
*/



/** Swiper : 컬러 **/
function slideColorTypeSlider(){
	var $target = $('.water-purifiers_202107 .slide_color_type .swiper-container');
	var slideOption = {
		effect:'fade', // 페이드 효과 사용
		fadeEffect: {
			crossFade:true
		},
		loop:false,
		pagination:{
			el:'.scene01_1_ani .swiper-pagination',
			clickable:true,
		},
		navigation:{
			nextEl:'.scene01_1_ani .swiper-button-next',
			prevEl:'.scene01_1_ani .swiper-button-prev',
		},
        autoplay:{
        	delay:3000,
        	disableOnInteraction:false,
        },
		speed:700,
		observer:true,
		observeParents:true,
		on:{
			slideChange:function(){
				var idx = this.realIndex + 1
				$('.water-purifiers_202107 .slide_color_type').removeClass('s1').removeClass('s2').removeClass('s3');
				$('.water-purifiers_202107 .slide_color_type').addClass('s'+idx+'');
			},
		}
	};
	slideColorType = new Swiper($target.get(0), slideOption);
	slideColorType.autoplay.stop();
	
	$('.water-purifiers_202107 .slide_color_type').addClass('s1');
	$('.scene01_1_ani .btn_swiper_pause').click(function(){
		$('.scene01_1_ani .slide_time_pagn').addClass('chk');
		slideColorType.autoplay.stop();
	});
	$('.scene01_1_ani .btn_swiper_play').click(function(){
		$('.scene01_1_ani .slide_time_pagn').removeClass('chk');
		slideColorType.autoplay.start();
	});
}


/** Swiper : 국내 최초 상하좌우 무빙 출수탭 **/
function slideStepSlider(){
	var $target = $('.water-purifiers_202107 .slide_step .swiper-container')
	var slideOption = {
		effect:'fade', // 페이드 효과 사용
		fadeEffect: {
			//crossFade:true
		},
		loop:false,
		pagination:{
			el:'.slide_step .swiper-pagination',
			clickable:true,
		},
		navigation:{
			nextEl:'.slide_step .swiper-button-next',
			prevEl:'.slide_step .swiper-button-prev',
		},
        autoplay:{
        	delay:5000,
        	disableOnInteraction:false,
        },
		speed:400,
		observer:true,
		observeParents:true,
		on:{
			slideChange:function(){
				var idx = this.realIndex + 1
				if($(idx == 1)){
					var numbers = [
						{$el:$('.slide_step .c2 .obj5 .count'), first:0, last:180, duration:2000},
					]
					countNumAni(numbers);
				}
			},
		},
	};
	slideStep = new Swiper($target.get(0), slideOption);
	slideStep.autoplay.stop();
	
	$('.scene02_1_ani .btn_swiper_pause').click(function(){
		$('.scene02_1_ani .slide_time_pagn').addClass('chk');
		slideStep.autoplay.stop();
	});
	$('.scene02_1_ani .btn_swiper_play').click(function(){
		$('.scene02_1_ani .slide_time_pagn').removeClass('chk');
		slideStep.autoplay.start();
	});
}

/** Swiper : 고온 살균 &amp; 스테인리스 직수관 **/
function slideStepSlider2(){
	var $target = $('.water-purifiers_202107 .slide_step2 .swiper-container');
	var slideOption = {
		effect:'fade', // 페이드 효과 사용
		fadeEffect: {
			//crossFade:true
		},
		loop:false,
		pagination:{
			el:'.scene03_1_ani .swiper-pagination',
			clickable:true,
		},
		navigation:{
			nextEl:'.scene03_1_ani .swiper-button-next',
			prevEl:'.scene03_1_ani .swiper-button-prev',
		},
        autoplay:{
        	delay:5000,
        	disableOnInteraction:false,
        },
		speed:400,
		observer:true,
		observeParents:true,
		on:{
		}
	};
	slideStep2 = new Swiper($target.get(0), slideOption);
	slideStep2.autoplay.stop();
	
	$('.scene03_1_ani .btn_swiper_pause').click(function(){
		$('.scene03_1_ani .slide_time_pagn').addClass('chk');
		slideStep2.autoplay.stop();
	});
	$('.scene03_1_ani .btn_swiper_play').click(function(){
		$('.scene03_1_ani .slide_time_pagn').removeClass('chk');
		slideStep2.autoplay.start();
	});
}




/* count */
function countNumAni(countNum){
	Number.isInteger = Number.isInteger || function(value){
		return typeof value == "number" && isFinite(value) && Math.floor(value) == value;
	}
	countNum.map(function(num){
		$({ val : num.first }).animate({ val : num.last }, {
			duration:num.duration,
			step:function(){
				if(Number.isInteger(num.last) == false){
					num.$el.html(this.val.toFixed(1));
				}else{
					num.$el.html(this.val.toFixed(0));
				}
			},
			complete:function(){
				if(Number.isInteger(num.last) == false){
					num.$el.html(this.val.toFixed(1));
				}else{
					num.$el.html(this.val.toFixed(0));
				}
			}
		});
	});
}



$(function(){
	/* Swiper */
	slideColorTypeSlider();
	slideStepSlider();
	slideStepSlider2();
	
	$(window).on("resize", function(){
		$('.scene03_2_ani .obj img').css('height', $(window).innerWidth());
		$('.scene03_3_ani .obj img').css('width', $(window).innerWidth());
		$('.scene04_2_ani .obj img').css('width', $(window).innerWidth());
	}).trigger('resize');

	

	/* 페이지 내 스크롤 앵커  */
    $('.water-purifiers_202107 .btn_go_info').click(function(e){
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
    $('.water-purifiers_202107 .btn_anchor a').click(function(e){
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
    var offset = $(window).scrollTop() + $(window).height() * 0.85;
	var offset_half = $(window).scrollTop() + $(window).height() * 0.2;
	var offset_half2 = $(window).scrollTop() + $(window).height() * 0.5;
  	
	$animate = $('.animate');
    $animate.each(function(i){
        var $ani = $(this),
            ani = $ani,
            item_top = $ani.offset().top,
            item_h = $ani.height();
		if (($ani.offset().top) < offset){
            if(!$ani.hasClass('active')){
                $ani.addClass('active');	
            }
			
        }else{
            if($ani.hasClass('active')){
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
		if(($video.offset().top) < (offset) && (item_top + item_h) > (offset_half)){
            if (!$video.hasClass('video_on')){
                video.get(0).play();
                $video.addClass('video_on');
            }
        }else{
            if($video.hasClass('video_on')){
                video.get(0).pause();
				video.get(0).currentTime = 0;
                $video.removeClass('video_on');
            }
        }	
    });
	
    $('.slide_color_type').each(function(i){
        var $video2 = $(this),
            video2 = $video2,
            item_top = $video2.offset().top,
            item_h = $video2.height();
		
		if(($video2.offset().top) < (offset) && (item_top + item_h) > (offset_half)){
			if (!$video2.hasClass('mot_on')) {
				slideColorType.slideTo(0);
				slideColorType.autoplay.start();
				$video2.addClass('mot_on');
			}
		}else{
			if($video2.hasClass('mot_on')) {
				$('.scene01_1_ani .slide_time_pagn').removeClass('chk');
				slideColorType.autoplay.stop();
				$video2.removeClass('mot_on');
			}
		}	
    });

    $('.slide_step').each(function(i){
        var $video2 = $(this),
            video2 = $video2,
            item_top = $video2.offset().top,
            item_h = $video2.height();
		
		if(($video2.offset().top) < (offset) && (item_top + item_h) > (offset_half)){
			if (!$video2.hasClass('mot_on')) {
				slideStep.slideTo(0);
				slideStep.autoplay.start();
				$video2.addClass('mot_on');
			}
		}else{
			if($video2.hasClass('mot_on')) {
				$('.scene02_1_ani .slide_time_pagn').removeClass('chk');
				slideStep.autoplay.stop();
				$video2.removeClass('mot_on');
			}
		}	
    });

    $('.slide_step2').each(function(i){
        var $video2 = $(this),
            video2 = $video2,
            item_top = $video2.offset().top,
            item_h = $video2.height();
		
		if(($video2.offset().top) < (offset) && (item_top + item_h) > (offset_half)){
			if (!$video2.hasClass('mot_on')) {
				slideStep2.slideTo(0);
				slideStep2.autoplay.start();
				$video2.addClass('mot_on');
			}
		}else{
			if($video2.hasClass('mot_on')) {
				$('.scene03_1_ani .slide_time_pagn').removeClass('chk');
				slideStep2.autoplay.stop();
				$video2.removeClass('mot_on');
			}
		}	
    });
};

// Scroll Event Function 
function feScrollFn() {
    $.fn.feScrollGet();
}



