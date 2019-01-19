
$(document).ready(function(){

	// Back To Top
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});

	$('#back-to-top').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});

	// Fixed Header / Shrink / Sticky Nav

	var shrink = $(".shrink");
	var sticky = $(".sticky");
  headeroffset = $('header').height();

	$(window).scroll(function() {
	  if( $(this).scrollTop() > headeroffset ) {
	    sticky.addClass("sticky-on");
	  } else {
	    sticky.removeClass("sticky-on");
	  }
	});


	$(window).scroll(function() {
		if( $(this).scrollTop() > 0 ) {
			shrink.addClass("shrink-on");
		} else {
			shrink.removeClass("shrink-on");
		}
	});

	$( window ).resize(function() {
		var windowSize = $( window ).width();

		if (windowSize < 1024){
			$("#primary-nav").addClass("mobile");
			$("#primary-nav .has-child ul").hide();
			$(".side-nav").hide().addClass("mobile");

		} else {
			$("#primary-nav").removeClass("mobile");
			$("#primary-nav .has-child ul").show();
			$(".side-nav").show();
		}
	}).trigger('resize');

	$(".side-nav-btn").click(function(){
		$(".side-nav.mobile").slideToggle();
	});

	$(".mobile-menu").click(function() {
		$("#primary-nav").toggleClass("active-menu");
	});


	$("#primary-nav .has-child a").click(function() {
		$(this).toggleClass("active");
		$(this).siblings().slideToggle();
	});


/*
	if ( ! Modernizr.objectfit ) {
		$('#hero-banner .carousel-item').each(function () {
			var $container = $(this),
					imgUrl = $container.find('img').prop('src');
			if (imgUrl) {
				$container
					.css('backgroundImage', 'url(' + imgUrl + ')')
					.addClass('ie-object-fit');
			}
		});
	} */

	// MISC

	var headerpx = (headeroffset - 50) + 'px';
	$("#hero-banner").css("margin-top", headerpx);

	$("div.carousel-nav").append($(".carousel-controls"));

/*	$('.carousel').carousel({
	  interval: 5000 //changes the speed
	});*/
});
