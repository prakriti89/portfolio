/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$(document).ready( function () {
	// jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-toggle:visible').click();
	});
	
	//Page fade in out
	var fadeInTime = 1000;
	var fadeOutTime = 200;
	$("#main-page").on('click', function () {
		$("#portfolio, #contact").hide();
			$("#about-content").show();
		
	});
	$("#project-page").on('click', function () {;
		$("#about-content, #contact").hide();
			$("#portfolio").show();
	});
	$("#contact-page").on('click', function () {
		$("#about-content, #portfolio").hide();
			$("#contact").show();
	});
});
