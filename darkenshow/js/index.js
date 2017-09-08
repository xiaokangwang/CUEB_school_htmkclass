$(function() {
  $(".content").wrapInner(
    "<table cellspacing='30'><tbody><tr></tr></tbody></table>"
  );
  $(".post").wrap("<td></td>");
  $(".post").mouseenter(e => {
    $(".light").css("display", "block");
  });
  $(".post").mouseleave(e => {
    $(".light").css("display", "none");
  });
  $("body").mousewheel(function(event, delta) {
    this.scrollLeft -= delta * 30;
    $("head").append(
      "<style>.content:before{left:" +
        (this.scrollLeft - 20) +
        "px; background-position-x: -" +
        this.scrollLeft +
        "px; }</style>"
    );
    console.log(this.scrollLeft);
    $(".light").css("left", this.scrollLeft);
    event.preventDefault();
  });
});