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

		// site detail bxslider show / hide 
		var flag = true; 
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
			var bxSlider = $('.bxslider').bxSlider(settings);

			e.preventDefault();
		})

		// back page navigation redirect 

		$('.back').click(function(){
			window.history.back();
		})

		// tab chart 
		
		$('.site-chart-tab .tab li').click(function(){
			$(this).siblings('li').removeClass('active');
			$(this).addClass('active');
			var getIndex = $(this).index();
			$(this).parents('.site-chart-tab').find('.content').removeClass('active');
			$(this).parents('.site-chart-tab').find('.content').eq(getIndex).addClass('active');
		})

		// site details table click on tr redirect on didecated page

		$('.site-details tbody tr').click(function(){
			var getHref = $(this).find('a').attr('href');
			window.location.href = getHref;
		})

		// dispenser item overlap hide and show 
		$('.quick-action-btn').click(function(){
			$(this).siblings('.quick-action').addClass('show');
		})
		$('.quick-action .close').click(function(){
			$(this).parents('.quick-action').removeClass('show');
		})

		// compare site Overall Hand Hygiene Health

		$('#handHygieneHealth #compareSiteBtn').click(function(){
			$('#handHygieneHealth #siteCompareTwo').show();
		})


	})
	
})(jQuery);