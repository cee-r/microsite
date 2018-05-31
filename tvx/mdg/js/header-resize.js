function init() {
  window.addEventListener('scroll', function(e) {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 30,
      header = document.querySelector("div#header-shrinking-fixed", "class.empty-div", "class.logo", "class.header-list-1", "class.phone_num");
    if (distanceY > shrinkOn) {
      $("#header-shrinking-fixed").addClass("smaller-header");
    } else {
      if ($("#header-shrinking-fixed").hasClass("smaller-header")) {
        $("#header-shrinking-fixed").removeClass("smaller-header");
      }
    }
    if (distanceY > shrinkOn) {
      var h = document.getElementsByClassName("smaller-logo");
      $(".logo").addClass("smaller-logo");
    } else {
      if ($(".logo").hasClass("smaller-logo")) {
        $(".logo").removeClass("smaller-logo");
      }
    }
    if (distanceY > shrinkOn) {
      var i = document.getElementsByClassName("empty-div-smaller");
      $(".empty-div").addClass("empty-div-smaller");
    } else {
      if ($(".empty-div").hasClass("empty-div-smaller")) {
        $(".empty-div").removeClass("empty-div-smaller");
      }
    }
    if (distanceY > shrinkOn) {
      var i = document.getElementsByClassName("header-list-1-smaller");
      $(".header-list-1").addClass("header-list-1-smaller");
    } else {
      if ($(".header-list-1").hasClass("header-list-1-smaller")) {
        $(".header-list-1").removeClass("header-list-1-smaller");
      }
    }
    if (distanceY > shrinkOn) {
      var i = document.getElementsByClassName("phone_num_smaller");
      $(".phone_num").addClass("phone_num_smaller");
    } else {
      if ($(".phone_num").hasClass("phone_num_smaller")) {
        $(".phone_num").removeClass("phone_num_smaller");
      }
    }
  });
}
window.onload = init();
//
