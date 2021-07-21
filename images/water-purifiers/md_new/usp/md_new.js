/*
    공기청정기 : 21.07
*/



/** Swiper : 컬러 **/
function slideColorTypeSlider(){
	var $target = $('.water-purifiers_202107 .slide_color_type .swiper-container');
	var slideOption = {
		//effect:'fade', // 페이드 효과 사용
		fadeEffect: {
			crossFade:true
		},
		loop:true,
		pagination:{
			el:'.scene01_1_ani .swiper-pagination',
			clickable:true,
		},
		navigation:{
			nextEl:'.scene01_1_ani .swiper-button-next',
			prevEl:'.scene01_1_ani .swiper-button-prev',
		},
        /*autoplay:{
        	delay:3000,
        	disableOnInteraction:false,
        },*/
		speed:500,
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
	//slideColorType.autoplay.stop();
	
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
		//effect:'fade', // 페이드 효과 사용
		fadeEffect: {
			//crossFade:true
		},
		loop:true,
		pagination:{
			el:'.slide_step .swiper-pagination',
			clickable:true,
		},
		navigation:{
			nextEl:'.slide_step .swiper-button-next',
			prevEl:'.slide_step .swiper-button-prev',
		},
		/*
        autoplay:{
        	delay:5000,
        	disableOnInteraction:false,
        },*/
		speed:500,
		observer:true,
		observeParents:true,
		on:{
		},
	};
	slideStep = new Swiper($target.get(0), slideOption);
	//slideStep.autoplay.stop();
	
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
		//effect:'fade', // 페이드 효과 사용
		fadeEffect: {
			//crossFade:true
		},
		loop:true,
		pagination:{
			el:'.scene03_1_ani .swiper-pagination',
			clickable:true,
		},
		navigation:{
			nextEl:'.scene03_1_ani .swiper-button-next',
			prevEl:'.scene03_1_ani .swiper-button-prev',
		},
        /*autoplay:{
        	delay:5000,
        	disableOnInteraction:false,
        },*/
		speed:500,
		observer:true,
		observeParents:true,
		on:{
		}
	};
	slideStep2 = new Swiper($target.get(0), slideOption);
	//slideStep2.autoplay.stop();
	
	$('.scene03_1_ani .btn_swiper_pause').click(function(){
		$('.scene03_1_ani .slide_time_pagn').addClass('chk');
		slideStep2.autoplay.stop();
	});
	$('.scene03_1_ani .btn_swiper_play').click(function(){
		$('.scene03_1_ani .slide_time_pagn').removeClass('chk');
		slideStep2.autoplay.start();
	});
}


$(function(){
	/* Swiper */
	slideColorTypeSlider();
	slideStepSlider();
	slideStepSlider2();

});



