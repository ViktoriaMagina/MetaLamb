import * as $ from 'jquery'
import 'slick-carousel'

$(".index-page__slider").slick({
    infinite: true,
    slidesToShow: 1,
    lidesToShow: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
});