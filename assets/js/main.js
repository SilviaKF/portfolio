(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop:true,
	    autoplay: false,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<p><small>Anterior</small><span class='ion-ios-arrow-round-back'></span></p>","<p><small>Próximo</small><span class='ion-ios-arrow-round-forward'></span></p>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});

	};
	carousel();

})(jQuery);

document.querySelector("#btn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
});

// let links = document.querySelectorAll(".js-link");

// let sections = document.querySelectorAll(".section");

// window.addEventListener("scroll", () => {
// 	sections.forEach(section => {
// 		let top = window.scrollY;
// 		let offset = section.offsetTop;
// 		let heightSection = section.offsetHeight;
// 		let idSection = section.getAttribute("id")

// 		if(top >= offset && top < offset + heightSection) {
// 			links.forEach(link => {
// 				link.classList.remove("actived");
// 				document.querySelector(`header nav a[href*="${idSection}"]`).classList.add("actived");
// 			})
// 		}
// 	})
// })