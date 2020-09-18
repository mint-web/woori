const $nav = $('nav');
const $navBox = $nav.append('<div class="box_bg"></div>');
const $hamburger = $('.hamburger');

//window resize js
$(window).resize(function () {
  if ($(window).width() < 1231) {
    mobileMenuFnc();
    $('body').addClass('mobile');
    $('body').removeClass('pc');
  } else {
    pcMenuFnc();
    $('body').addClass('pc');
    $('body').removeClass('mobile');
  }
}).trigger('resize');

// nav js
$hamburger.on('click', function () {
  $(this).toggleClass('on');
  $nav.toggleClass('open');
});

function pcMenuFnc() {
  $('.gnb>li').on('mouseenter focusin', function () {
    setTimeout(function () {
      $('.box_bg').stop().slideDown(300);
      $('.snb').css('display', 'block');
    }, 100);
    setTimeout(function () {
      $('.snb li').addClass('on')
    }, 250)
  });
  $nav.on('mouseleave', function () {
    setTimeout(function () {
      $('.box_bg').stop().slideUp(300);
      $('.snb').css('display', 'none');
      $('.snb li').removeClass('on')
    }, 100);
  });
}

function mobileMenuFnc() {
  $('.mgnb>li').on('click', function (e) {
    e.preventDefault();
    $('.mgnb>li').removeClass('on').siblings().find('.snb').stop().slideUp();
    $(this).addClass('on').find('.snb').stop().slideDown();
  });
}

// quick menu scroll js
quickMenuScroll();
function quickMenuScroll() {
  const quickMenu = $('#quickMenu ul li');
  const sections = $('#main .stc');

  quickMenu.on('click', function (e) {
    e.preventDefault();
    const idx = $(this).index();
    const section = sections.eq(idx);
    const pos = parseInt(section.offset().top);

    $('html,body').stop().animate({ scrollTop: pos }, 300);

  });

  // window scroll js
  $(window).scroll(function () {
    let st = $(window).scrollTop();
    sections.each(function () {
      const idx = $(this).index();
      const pos = parseInt($(this).offset().top);
      if (pos <= st) {
        quickMenu.removeClass('on');
        quickMenu.eq(idx).addClass('on');
      }
    });
  });
}

// main visual js
const $mainVisualSwiper = new Swiper('.main_visual .swiper-container', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
$('.main_visual .btn_next').on('click', function (e) {
  e.preventDefault();
  $mainVisualSwiper.slideNext();
});
$('.main_visual .btn_prev').on('click', function (e) {
  e.preventDefault();
  $mainVisualSwiper.slidePrev();
});

// main service recom js
const $recomSlider = $('.recom_slide');
$recomSlider.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '.recom_controls .next',
  prevArrow: '.recom_controls .previous',
  responsive: [{
    breakpoint: 1024,
    settings: {
      arrows: false
    }
  }]
});

// main education reserve js
const $reserveSlider = $('.reserve_slide');
$reserveSlider.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000
});

