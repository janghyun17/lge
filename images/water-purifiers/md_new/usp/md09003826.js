/* 자주묻는질문 */
$(window).ready(function(){
	/* tab */
	(function setTab() {
		var tabList = $(".faq-wrap .faq-tab-list li");
		var tabContents = $(".faq-wrap .faq-tab-conts .tab-contents");

		tabList.on("click", function(e) {
			e.preventDefault();
			var idx = $(this).index();

			$(this).attr("aria-selected", "true").siblings().attr("aria-selected", "false");
			$(this).addClass("active").siblings().removeClass("active");
			tabContents.eq(idx).addClass("active").siblings().removeClass("active");
		});
	})();

	/* usp-qna-wrap */ 
	$('.usp-qna-tit a').click(function(e){
		var currentAttrvalue = $(this).attr('href');
		if($(e.target).is('.active')){
			$(this).removeClass('active');
			$('.qna-section:visible').slideUp(300);
		}else{
		$('.usp-qna-tit a').removeClass('active').filter(this).addClass('active');
		 $(currentAttrvalue).slideDown(300);
		}
		return false;
	});

	(function setQnaTab() {
		var tabList = $(".usp-qna-wrap .qna-tab-list li");
		var tabContents = $(".usp-qna-wrap .usp-qna-list");

		if(tabList.length) $(".usp-qna-wrap").addClass("has-tab");

		tabList.on("click", function(e) {
			e.preventDefault();
			var idx = $(this).index();

			$(this).attr("aria-selected", "true").siblings().attr("aria-selected", "false");
			$(this).addClass("active").siblings().removeClass("active");
			tabContents.eq(idx).addClass("active").siblings().removeClass("active");
		});
	})();
});	