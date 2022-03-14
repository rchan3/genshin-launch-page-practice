$(document).ready(function () {
  // webevent scroll
  $(document).scroll(function () {
    if ($(this).scrollTop() < 10) {
      $("#webevent-fixed-banner").css("visibility", "hidden");
    } else {
      $("#webevent-fixed-banner").css("visibility", "visible");
    }
  });
  // carousel setup
  $(".carousel").slick({
    autoplay: false,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });
  // portrait carousel links
  $(".shenhe-portrait-click").click(function () {
    $(".carousel").slick("slickGoTo", 0);
  });
  $(".ganyu-portrait-click").click(function () {
    $(".carousel").slick("slickGoTo", 1);
  });
  $(".zhongli-portrait-click").click(function () {
    $(".carousel").slick("slickGoTo", 2);
  });
  $(".xiao-portrait-click").click(function () {
    $(".carousel").slick("slickGoTo", 3);
  });
  $(".yunjin-portrait-click").click(function () {
    $(".carousel").slick("slickGoTo", 4);
  });
});
