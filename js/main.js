$(function () {

  let pagetop = $(".to-top");
  pagetop.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });

  pagetop.click(function () {
    $("body,html").animate({ scrollTop: 0 }, 500);
    return false;
  });

  $(".toggle_btn").on("click", function () {
    $("header").toggleClass("open");
  });

  $(".mask").on("click", function () {
    $("header").removeClass("open");
  });

});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

