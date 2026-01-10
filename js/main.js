$(function () {

  // topに戻る

  $(function () {
    let pagetop = $(".to-top");
    pagetop.hide();

    $(window).scroll(function () {
      let scrollTop = $(this).scrollTop();
      let scrollHeight = $(document).height();
      let windowHeight = $(window).height();
      let threshold = ($(window).width() < 768) ? 300 : 500;
      if (scrollTop > threshold && scrollTop + windowHeight < scrollHeight - 100) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });

    pagetop.click(function () {
      $("body,html").animate({ scrollTop: 0 }, 500);
      return false;
    });
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

