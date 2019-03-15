/* =================================
------------------------------------
	HALO - Photography Portfolio
	Version: 1.0
 ------------------------------------ 
 ====================================*/




$(window).on('load', function() {

/* Preloader */
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {



/* Sets Background */
	
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	}); 


})(jQuery);

