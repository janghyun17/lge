
$(window).ready(function(){
	var isMobile;
	var controller = new ScrollMagic.Controller();

	/* Scene Fn */
	var sceneFn = {
		setScene_0 : function() {
			var winH = $(window).innerHeight() * 5;

			TweenMax.set(".microwaves_202103 #animate0_1 .title", {opacity: 0, y: -60});
			TweenMax.set(".microwaves_202103 #animate0_1 .product_list", {opacity: 0});
			TweenMax.set(".microwaves_202103 #animate0_1 .product_list > li", {height:"100%"});
			TweenMax.set(".microwaves_202103 #animate0_1 .interior_list > li", {height:"100%"});

			// tween_title
			var tween_title = new TimelineMax()
				.to(".microwaves_202103 #animate0_1 .title", 3, {opacity: 1, y: 0, ease: Cubic.easeOut})

			if (isMobile) {
				var tween_image = new TimelineMax()
					.to(".microwaves_202103 #animate0_1 .product_list", 3, {opacity: 1})
					.to(".microwaves_202103 #animate0_1 .product_img1", 4, {height: 0, ease: Cubic.easeOut})
					.to(".microwaves_202103 #animate0_1 .product_img2", 4, {height: 0})
					.to(".microwaves_202103 #animate0_1 .product_img3", 3, {scale: "0.62", y: "-5.5%", x: "-0.5%", ease: Cubic.easeOut})
					.to(".microwaves_202103 #animate0_1 .product_img3", 2, {opacity: 0})
					.to(".microwaves_202103 #animate0_1 .interior_list", 3, {opacity: 1, delay: -4})
					.to(".microwaves_202103 #animate0_1 .interior_img1", 5, {height: 0})
					.to(".microwaves_202103 #animate0_1 .interior_img2", 5, {height: 0})

				var tween_list = new TimelineMax()
					.to(".microwaves_202103 #animate0_2 .material_color_list li:nth-child(1)", 3, {opacity: 1, y: 0, ease: Cubic.easeInOut})
					.to(".microwaves_202103 #animate0_2 .material_color_list li:nth-child(2)", 3, {opacity: 1, y: 0, ease: Cubic.easeInOut})
					.to(".microwaves_202103 #animate0_2 .material_color_list li:nth-child(3)", 3, {opacity: 1, y: 0, ease: Cubic.easeInOut})
			} else {
				var tween_image = new TimelineMax()
					.to(".microwaves_202103 #animate0_1 .product_list", 3, {opacity: 1})
					.to(".microwaves_202103 #animate0_1 .product_img1", 4, {height: 0, ease: Cubic.easeOut})
					.to(".microwaves_202103 #animate0_1 .product_img2", 4, {height: 0})
					.to(".microwaves_202103 #animate0_1 .product_img3", 3, {scale: "0.84", y: "4%", x: "0.65%", ease: Cubic.easeOut})
					.to(".microwaves_202103 #animate0_1 .product_img3", 2, {opacity: 0})
					.to(".microwaves_202103 #animate0_1 .interior_list", 3, {opacity: 1, delay: -4})
					.to(".microwaves_202103 #animate0_1 .interior_img1", 5, {height: 0})
					.to(".microwaves_202103 #animate0_1 .interior_img2", 5, {height: 0})

				var tween_list = new TimelineMax()
					.to(".microwaves_202103 #animate0_2 .material_color_list li", 3, {opacity: 1, y: 0, ease: Cubic.easeInOut})
			}
			
			var sceneOption = {
					triggerElement: ".microwaves_202103 #animate0_1",
					triggerHook: 0.0,
					duration: winH,
					reverse: true
			}
			var sceneOption2 = {
					triggerElement: ".microwaves_202103 #animate0_1",
					triggerHook: 0.4,
					duration: "60%",
					reverse: true
			}
			var sceneOption3 = {
				triggerElement: ".microwaves_202103 #animate0_2",
				triggerHook: 0.5,
				duration: "60%",
				reverse: true
			}

			var scene = new ScrollMagic.Scene(sceneOption)
											.setPin(".microwaves_202103 #animate0_1")
											.addTo(controller);
			new ScrollMagic.Scene(sceneOption)
											.setTween(tween_image)
											.addTo(controller);
			new ScrollMagic.Scene(sceneOption2)
											.setTween(tween_title)
											.addTo(controller);
			new ScrollMagic.Scene(sceneOption3)
											.setTween(tween_list)
											.addTo(controller);
		}
	}

	/* excute scene fn */
	function excuteScene(){
		//var sceneQueue = ["0","1","4","5"];
		var sceneQueue = ["0"];
		for (scene in sceneQueue){
			var fnName = "setScene_"+sceneQueue[scene];
			sceneFn[fnName]();
		}
	}

	/* ani */
	function scrollAni() {
		var aniContents = $(".microwaves_202103 *[data-role='ani']");
		aniContents.each(function(){
			var dur = $(this).data("dur") || 70; // 애니메이션 dur
			var delay = $(this).data("delay") || 4; // 애니메이션 delay
			var hook = $(this).data("hook") || 0.6; // 애니메이션 시작 위치
			var videoList = $(this).find("video"); // 태그에 video 포함일 경우

			var getTime = function()  {
				if (videoList.length > 0) {
					return 1;
				} else {
					return 3;
				}
			}
			var sceneOption = {
				triggerElement: this.parentNode,
				triggerHook: hook,
				duration: dur + "%",
				reverse: true
			}
			var videoOption = {
				triggerElement: this,
				triggerHook: 0.4,
				duration: dur + "%",
				reverse: true
			}
			var tween1 = new TimelineMax().to($(this), 3, {
				opacity: 1,
				transform: "translateY(0)",
			}).to($(this), getTime(), {
				delay: delay,
			});

			var scene = new ScrollMagic.Scene(sceneOption)
										.setTween(tween1)
										.addTo(controller);

			if (videoList.length > 0) {
				new ScrollMagic.Scene(videoOption)
								.addTo(controller)
								.on("enter leave", function (e) {
									if (videoList.length > 0) {
										videoList.each(function() {
											if(e.type == "enter"){
												$(this).get(0).play();
											}else{
												$(this).get(0).pause();
												$(this).get(0).currentTime = 0;
											}
										});
									}
								});
			}
		});

		var aniContents2 = $(".microwaves_202103 * .title, .microwaves_202103 * .chk");
		aniContents2.each(function(){

			var videoList = $(this).find("video"); // 태그에 video 포함일 경우

			var sceneOption = {
				triggerElement: this.parentNode,
				//triggerHook: hook,
				//duration: dur + "%",
				triggerHook: 0.8,
				reverse: true
			}

			var scene = new ScrollMagic.Scene(sceneOption)
				.setClassToggle(this, "animate").addTo(controller)

				if (videoList.length > 0) {
					new ScrollMagic.Scene(sceneOption)
									.addTo(controller)
									.on("enter leave", function (e) {
										if (videoList.length > 0) {
											videoList.each(function() {
												if(e.type == "enter"){
													$(this).get(0).play();
												}else{
													$(this).get(0).pause();
													$(this).get(0).currentTime = 0;
												}
											});
										}
									});
				}

		});


	}

	//var microwavesSlider = null;
	//var microwavesSliders = [];


	/* ie scroll bug */
	function ieBug() {
		var userAgent = navigator.userAgent.toLowerCase();
		if ((navigator.appName == "Netscape" && userAgent.indexOf("trident") != -1) || (userAgent.indexOf("msie") != -1)) {
			$("body").on("mousewheel", function () {
				event.preventDefault();
				var wheelDelta = event.wheelDelta;
				var currentScrollPosition = window.pageYOffset;
				window.scrollTo(0, currentScrollPosition - wheelDelta);
			});
			$("body").keydown(function (e) {
				var currentScrollPosition = window.pageYOffset;
				switch (e.which) {
					case 38:
						window.scrollTo(0, currentScrollPosition - 120);
						e.preventDefault();
						break;
					case 40:
						window.scrollTo(0, currentScrollPosition + 120);
						e.preventDefault();
						break;
					default:
						return;
				}
			});
		}
	}

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
				controller.destroy(true);
				controller = new ScrollMagic.Controller();
				scrollAni();
				excuteScene();
				//microWavesSlider();
			}
		} else {
			if(isMobile || isMobile == undefined){
				isMobile = false;
				controller.destroy(true);
				controller = new ScrollMagic.Controller();
				ieBug();
				scrollAni();
				excuteScene();
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
	//$('.ani_cont').contAni();
}
