
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



	// MISC

	var headerpx = (headeroffset - 50) + 'px';
	$("#hero-banner").css("margin-top", headerpx);

	$("div.carousel-nav").append($(".carousel-controls"));

/*	$('.carousel').carousel({
	  interval: 5000 //changes the speed
	});*/
});
