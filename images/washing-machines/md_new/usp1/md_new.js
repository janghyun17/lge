
$(window).ready(function(){
	var isMobile;
	//var controller = new ScrollMagic.Controller();



	/* popup */
	(function setPopup() {
		$(".microwaves_202103 .popupBtn").on("click", function(){
			var popupId = $(this).attr("data-popup-id");
			var tgPopup = $(".microwaves_202103 .popup").filter("#"+popupId);
			tgPopup.addClass("open");
			$(".scroll_content").scrollTop(0);
			var $iframe = $("#"+popupId).find("iframe");
			if($iframe.length){
				var src = "https://www.youtube.com/embed/X0B626ijbxo?autoplay=1&controls=1&enablejsapi=1&origin=https%3A%2F%2Fwww.lge.co.kr&widgetid=1";
				$iframe.attr("src", src);
			}
			$("html").addClass("lock");
			
			if(popupId === 'popup02'){
				$(".microwaves_202103 .tab_list li").eq(0).addClass("active").siblings().removeClass("active");
				$(".microwaves_202103 .tab_contents").eq(0).addClass("active").siblings().removeClass("active");
				$(".microwaves_202103 .tab_contents").eq(0).scrollTop(0);
			}
		});
		$(".microwaves_202103 .popup .dim, .microwaves_202103 .popup .close").on("click", function(){
			var $iframe = $(this).parent().find("iframe");
			if($iframe.length){
				var src = $iframe.attr("src");
				$iframe.attr("src", "");
			}
			$(".microwaves_202103 .popup").removeClass("open");
			$("html").removeClass("lock");
		});
	})();

	$(window).on("resize", function(){
		var w = $(this).outerWidth();
		if (w < 768) {
			if(!isMobile){
				isMobile = true;
				//controller.destroy(true);
				//controller = new ScrollMagic.Controller();
				//scrollAni();
				//excuteScene();
				//microWavesSlider();
			}
		} else {
			if(isMobile || isMobile == undefined){
				isMobile = false;
				//controller.destroy(true);
				//controller = new ScrollMagic.Controller();
				//ieBug();
				//scrollAni();
				//excuteScene();
				//microWavesSlider();
			}
		}
	}).trigger("resize");
});



/* cont ani */
$.fn.contAni = function(){
	var M = {};
	M.obj = {
		"container": this,
		"items": this,
		"items_h": new Array(),
		"window": $(window)
	};
	M.function = {
		getHeight: function(target, destination){
			if(!target || !destination){
				return false;
			};
			while(destination.length > 0) {
				destination.pop();
			};
			$.each(target, function(i,v){
				destination.push($(v).offset().top - ($(window).height() *.9));
			});
		},
		setHeight: function(target, destination){
			$.each(M.obj['items_h'], function(i,v){
				if(v - M.obj['window'].scrollTop() < 0){
					$(M.obj['items'][i]).addClass('active');
				}else{
					$(M.obj['items'][i]).removeClass('active');
				};
			});
		}
	};
	$(window).resize(resizeAni).resize();
	function resizeAni(){
		M.init = function(){
			M.function['getHeight'](M.obj['items'], M.obj['items_h']);
			M.obj['window'].bind('scroll', M.function['setHeight']);
			M.obj['window'].bind('resize init', M.function['getHeight']).triggerHandler('init');
		}();
		$('html, body').stop().animate({scrollTop:$(window).scrollTop() + 1}, 0);	
	}
	return this;
	
};
window.onload = function() { 
	$('.title_top, .feature_cont .title, .feature_cont .box').contAni();
}






$(window).on('scroll', scrollFn);

// Scroll Event
$.fn.scrollGet = function() {
    var offset = $(window).scrollTop() + $(window).height() / 2,
        $videos = $('video');

    if ($videos.length == 0) {
        $(window).off('scroll', scrollFn);
    }

    $videos.each(function(i) {
        var $video = $(this),
            video = $video,
            item_top = $video.offset().top,
            item_h = $video.height();
        if (($video.offset().top) < offset && (item_top + item_h) > offset) {
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
};

$(window).on('scroll', scrollFn2);
$.fn.scrollGet2 = function() {
    var offset = $(window).scrollTop() + $(window).height(),
        $videos = $('.cd01');

    if ($videos.length == 0) {
        $(window).off('scroll', scrollFn2);
    }

    $videos.each(function(i) {
        var $video = $(this),
            video = $video,
            item_top = $video.offset().top,
            item_h = $video.height();
        //if (($video.offset().top) < offset && (item_top + item_h) > offset) {
		if (($video.offset().top) < offset ) {
            if (!$video.hasClass('video_on1')) {
                microWavesCount()
                $video.addClass('video_on1');
            }
        } else {
            if ($video.hasClass('video_on1')) {

               $video.removeClass('video_on1');
            }
        }
    });
};

// Scroll Event Function 
function scrollFn() {
    $.fn.scrollGet();
}
function scrollFn2() {
	$.fn.scrollGet2();
}



	/* count */
	function microWavesCount(){
				var countNum = [
						{ $el:$(".washing_machines_202106 .count2"), first:0, last:24, duration:2000 },
				]
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

				
	

	


/* 페이지 내 스크롤 앵커  */
$(function(){
    $('.btn_go_info').click(function(e){
        e.preventDefault();
		var t = $(this).attr("href");
        if ( $(t).length ){
            $('html, body').stop().animate({
                scrollTop:$(t).offset().top - 168
            }, 800, function(){
                $(t).get(0).focus({preventScroll:false});
                $('html,body').scrollTop($(t).offset().top - 168);
            });
        }
    });
    $('.btn_anchor a').click(function(e){
        e.preventDefault();
		var t = $(this).attr("href");
        if ( $(t).length ){
            $('html, body').stop().animate({
                scrollTop:$(t).offset().top - 142
            }, 800, function(){
                $(t).get(0).focus({preventScroll:false});
                $('html,body').scrollTop($(t).offset().top - 142);
            });
        }
    });
	

	var $target = $('.washing_machines_202106 .slide_weather .swiper-container');
	var swiper;

	$target.data('swiper') ? $target.data('swiper').destroy() : null;
	var slide_option = {
		effect : 'fade', // 페이드 효과 사용
		loop:true,
		pagination: {
			el: ".slide_weather .swiper-pagination",
			clickable:true,
		},
		navigation: {
			nextEl: ".slide_weather .swiper-button-next",
			prevEl: ".slide_weather .swiper-button-prev",
		},
		breakpoints: {

		},
		speed :500,
		observer: true,
		observeParents: true,
		on: {
			slideChange: function(){
				var idx = this.realIndex + 1
				console.log(idx)
				$('.slide_weather .swiper-container').removeClass('s1').removeClass('s2').removeClass('s3');
				$('.slide_weather .swiper-container').addClass('s'+idx+'');
			},
		},

	}
	swiper = new Swiper($target.get(0), slide_option);
	$target.data('swiper', swiper);
	
	
	
	
	
	
	var $target2 = $('.washing_machines_202106 .slide_b .swiper-container');
	var swiper2;

	$target2.data('swiper') ? $target.data('swiper').destroy() : null;
	var slide_option2 = {
		//effect : 'fade', // 페이드 효과 사용
		loop:true,
		pagination: {
			el: ".slide_b .swiper-pagination",
			clickable:true,
		},
		navigation: {
			nextEl: ".slide_b .swiper-button-next",
			prevEl: ".slide_b .swiper-button-prev",
		},
		slidesPerView: 5,
		spaceBetween: 20,
		breakpoints: {
			450: {
				slidesPerView:1,
				spaceBetween:0,
			},
			700: {
				slidesPerView:2,
				spaceBetween:15,
			},
			950: {
				slidesPerView:3,
				spaceBetween:15,
			},
			1200:{
				slidesPerView:4,
				spaceBetween:20,
			}
		},
		observer: true,
		observeParents: true
	}
	swiper2 = new Swiper($target2.get(0), slide_option2);
	$target2.data('swiper', swiper2);
	
});






