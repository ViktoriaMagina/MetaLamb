// import * as $ from 'jquery'
// import 'slick-carousel'

// $(".room-item__slider").slick({
//     infinite: false,
//     slidesToShow: 1,
//     lidesToShow: 1,
//     dots: true,
//     fade: true,
//     variableWidth: true,
//     centerMode: true,
//     nextArrow: '<button type="button" class="room-item__slider-next"></button">',
//     prevArrow: '<button type="button" class="room-item__slider-prev"></button>',
// });


import Swiper from 'swiper/bundle';



const swiper = new Swiper('.swiper', {
    // slidesPerView: 2,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        // 900: {
        //   slidesPerView: 1,
        // },
    }
  });
  