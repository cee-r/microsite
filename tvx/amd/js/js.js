
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



	$(".mobile-menu").click(function() {
    //e.preventDefault();
    $("#primary-nav").toggleClass("active-menu");

	});



});
