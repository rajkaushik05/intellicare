(function($){
	$(document).ready(function(){
		// user nav more option
		$('#userOptions').click(function(e){
			$(this).find('ul').slideToggle(100);
			e.stopPropagation();
		})

		// click on window hide block
		$(document).click(function(){
	        $('#userOptions ul').hide();
	        $('#mainNavMobile').removeClass('open');
	    })

		// dashboard left nav on desktop
	    $('#mainNavMobile').click(function(e){
			$(this).toggleClass('open');
			e.stopPropagation();
		})

	    var flag = true;
		// site detail bxslider show / hide  
		$('.site-item .view-bxslider-content').click(function(e){
			$(this).toggleClass('arrow-up');
			$(this).parents('.dispensers').siblings('.bxslider-block').slideToggle(100);
			if(flag == true){
				$(this).children('.text').text('Hide Details');
				flag = false;	
			} else {
				$(this).children('.text').text('View Details');
				flag = true;
			}
			$('.bxslider').bxSlider({
	            slideWidth: 235,
	            slideMargin: 10,
	            minSlides: 1,
	            maxSlides: 4,
	            infiniteLoop: false,
	            responsive: true,
	            controls: true,
		        pager: false
	        });
			

			e.preventDefault();
		})

		$('.bxslider-block .bxslider li').click(function(){
			$(this).siblings('li').removeClass('active');
			$(this).addClass('active');
			var getIndex = $(this).index();
			$(this).parents('.bxslider-wrap').siblings('.tab-content').find('.tab').hide();
			$(this).parents('.bxslider-wrap').siblings('.tab-content').find('.tab').eq(getIndex).show();
		})

		// back page navigation redirect 

		$('.back').click(function(){
			window.history.back();
		})

	})
	
})(jQuery);