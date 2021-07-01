/*
    공기청정기 : 21.07
*/

/** Swiper : 컬러 **/
function slideColorTypeSlider(){
	var $target = $('.air-purifier_202107 .slide_color_type .swiper-container');
	var slideOption = {
		effect:'fade', // 페이드 효과 사용
		fadeEffect: {
			crossFade:true
		},
		loop:false,
		pagination:{
			el:'.scene01_2_ani .swiper-pagination',
			clickable:true,
		},
		navigation:{
			nextEl:'.scene01_2_ani .swiper-button-next',
			prevEl:'.scene01_2_ani .swiper-button-prev',
		},
		breakpoints:{

		},
		speed:700,
		observer:true,
		observeParents:true,
		on:{
		}
	};
	slideColorType = new Swiper($target.get(0), slideOption);
}


$(function(){
	/* Swiper */
	slideColorTypeSlider();


	/* 페이지 내 스크롤 앵커  */
    $('.air-purifier_202107 .btn_go_info').click(function(e){
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
    $('.air-purifier_202107 .btn_anchor a').click(function(e){
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
    var offset = $(window).scrollTop() + $(window).height() * 0.95;
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
			
			if(!$('.scene01_2_ani').hasClass('active')){
				slideColorType.slideTo(0);
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
	
};

// Scroll Event Function 
function feScrollFn() {
    $.fn.feScrollGet();
}



