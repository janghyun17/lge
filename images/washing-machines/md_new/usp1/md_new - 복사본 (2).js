
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
				destination.push($(v).offset().top - ($(window).height() *.8));
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
	}
	return this;
};
window.onload = function() { 
	$('.feature_cont').contAni();
}



$(window).on('scroll',scrollFn); 

        // Scroll Event
        $.fn.scrollGet = function(){ 
          var offset = $(window).scrollTop() + $(window).height() / 2, 
              $videos = $('.video_obj'); 

         if ($videos.length == 0) { 
         	$(window).off('scroll', $.fn.scrollAni); 
         } 

         $videos.each(function(i) { 
         	var $video = $(this), 
           	video = $video.find('video'), 
         	item_top = $video.offset().top, 
         	item_h = $video.height(); 
           	// console.log($video.offset().top) 
           	if (($video.offset().top) < offset && (item_top + item_h) > offset) { 
              if(!$video.hasClass('video_on')){ 
              video.get(0).play(); 
              $video.addClass('video_on'); 
              } 
           	} else { 
              if($video.hasClass('video_on')){ 
                  video.get(0).pause(); 
                  $video.removeClass('video_on'); 
              } 
           } 
         }); 
        }; 
        
// Scroll Event Function 
function scrollFn(){ 
	$.fn.scrollGet(); 
}
