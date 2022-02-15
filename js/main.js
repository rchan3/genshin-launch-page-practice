$(function () {
  $("#ganyu-quicklink-inactive").hover(
    function () {
      // over
      $("#ganyu-quicklink-active").css({ "z-index": "3" });
    },
    function () {
      // out
      $("#ganyu-quicklink-active").css({ "z-index": "-1" });
    }
  );
});
