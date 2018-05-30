
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

	// Sticky Nav

	var sticky = $(".sticky");
  headeroffset = $('header').height();

	$(window).scroll(function() {
	  if( $(this).scrollTop() > headeroffset ) {
	    sticky.addClass("sticky-on");
	  } else {
	    sticky.removeClass("sticky-on");
	  }
	});


	$( window ).resize(function() {
		var windowSize = $( window ).width();

		if (windowSize < 1024){
			$("#primary-nav").addClass("mobile");
			$("#primary-nav .has-child ul").hide();
		} else {
			$("#primary-nav").removeClass("mobile");
			$("#primary-nav .has-child ul").show();
		}
	}).trigger('resize');


	$(".mobile-menu").click(function() {
    $("#primary-nav").toggleClass("active-menu");
	});


	$("#primary-nav .has-child a").click(function() {
		$(this).toggleClass("active");
		$(this).siblings().slideToggle();
	});

});
