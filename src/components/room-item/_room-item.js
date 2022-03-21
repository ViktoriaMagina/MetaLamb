import * as $ from 'jquery'
import 'slick-carousel'

$(".room-item__slider").slick({
    infinite: false,
    slidesToShow: 1,
    lidesToShow: 1,
    dots: true,
    fade: true,
    nextArrow: '<button type="button" class="room-item__slider-next"></button">',
    prevArrow: '<button type="button" class="room-item__slider-prev"></button>',
});