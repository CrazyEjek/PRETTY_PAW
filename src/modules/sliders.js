import { Swiper, Pagination, Autoplay } from 'swiper';

const params = {
    spaceBetween: 20,
    loop: true,
    Autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    sliderPerView: 1,
    Pagination: {
        el: '.swiper-pagination'
    },
    modules: [Autoplay]
}

export const slidersInit = () => {

}
