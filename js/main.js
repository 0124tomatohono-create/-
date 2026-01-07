$(function () {

  // topに戻る
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

  // ハンバーガーメニュー
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });

  $(".mask").on("click", function () {
    $("header").removeClass("open");
  });

});

// スワイパー
// const swiper = new Swiper('.swiper', {
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 3,
//   spaceBetween: 20,
//   autoplay: {
//     delay: 2000,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

let swiper;
const breakpoint = 768;

function initSwiper() {
  if (window.innerWidth >= breakpoint) {
    if (!swiper) {
      swiper = new Swiper('.swiper', {
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
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = undefined;
    }
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);

