$(document).ready(function () {
  $(".carousel").slick({
    autoplay: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });
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
