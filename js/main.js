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
		$('#viewBXSliderContent').click(function(){
			$('#bxsliderBlock').slideToggle(100);
			
		})

	})
	
})(jQuery);