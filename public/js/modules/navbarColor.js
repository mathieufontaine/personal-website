// $(function() {
//   console.log("object");

//   $(document).scroll(function() {
//     var $nav = $(".header");

//     var $showcase = $("#showcase");
//     console.log("object");
//     $nav.toggleClass("notScrolled", $(this).scrollTop() > $showcase.height());
//   });
// });

var myNav = document.querySelector("header");
// console.log(myNav);
window.onscroll = function() {
  //   console.log("object");

  ("use strict");
  if (
    document.body.scrollTop >= 500 ||
    document.documentElement.scrollTop >= 500
  ) {
    myNav.classList.remove("white-header");
  } else {
    myNav.classList.add("white-header");
  }
};
