$(function(){
    var shrinkHeader = 320;
     $(window).scroll(function() {
       var scroll = getCurrentScroll();
         if ( scroll >= shrinkHeader ) {
              $('.header').addClass('shrink');
           }
           else {
               $('.header').removeClass('shrink');
           }
     });
   function getCurrentScroll() {
       return window.pageYOffset || document.documentElement.scrollTop;
       }
   });
   const toggleButton = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');

$(function () {
  $.fn.scrollToTop = function () {
      $(this).hide().removeAttr("href");

      if ($(window).scrollTop() != "0") {
          $(this).fadeIn("fast")
      }

      var scrollDiv = $(this);
      $(window).scroll(function () {
          if ($(window).scrollTop() == "0") {
              $(scrollDiv).fadeOut("fast")
          } else {
              $(scrollDiv).fadeIn("fast")
          }
      });
      $(this).click(function () {
          $("html, body").animate({scrollTop: 0}, "fast")
      })
  }
});
// Вызов
$(function () {
  $("#toTop").scrollToTop();
}); 


















