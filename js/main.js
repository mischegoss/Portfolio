

$(window).on('load', function() {

/* Preloader */
	$(".loader").fadeOut(); 
	$("#preloader").delay(400).fadeOut("slow");
    
});



(function($) {

/* Sets Background */
	
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	}); 


})(jQuery);

$(document).ready(function() {
    $('.nav-item').animateClick({
        "color":"blue",
        "animation":"signal",
        "size":12
    });
});

