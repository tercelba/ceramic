;(function($){
	"use strict";
	
//sliders gallery & revews start
	$(window).on('load', function(){

		$('.ba-gallery-slider').slick({
			dots: false,
			arrows: true,
			slide: '.ba-gallery-slide',
			slidesToShow: 4,
  			slidesToScroll: 1,
  			prevArrow: '.ba-button--prev',
  			nextArrow: '.ba-button--next',
  			variableWidth: true,
  			autoplay: true,
  			autoplaySpeed: 3000,

		
		});
		// $('.ba-testimonials-slider').slick({
		// 	dots: true,
		// 	arrows: false,
		// 	slide: '.ba-testimonials-slide',
		// 	slidesToShow: 1,
  // 			slidesToScroll: 1,
 	// 		autoplay: true,
  // 			autoplaySpeed: 4000,
			
		// });

	});
//sliders team & testimonials end


})(jQuery);
