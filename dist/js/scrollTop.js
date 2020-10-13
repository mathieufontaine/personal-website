var btn = $("#scroll-top-btn");

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.click(function(e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "500");
});
