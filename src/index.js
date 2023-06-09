import './index.html';
// new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';


// use modules

slidersInit('.about__slider' , {
    pagination: {
        el: '.about__slider-pagination',
    }
});


slidersInit('.career__slider' , {
  breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 20,
			slideToClickedSlide: true,
			pagination: {
				el: '.career__slider-pagination'
			},
			autoplay: {
				delay: 3500,
				disableOnInteraction: true,
			},
		},

		576: {
			slidesPerView: 'auto',
			spaceBetween: 20,
			pagination: false
		},

		1024: {
			slidesPerView: 'auto',
			spaceBetween: 26,
			pagination: false
		},

		1280: {
			slidesPerView: 'auto',
			spaceBetween: 30,
			pagination: false
		}
	}
});

const videoBG = document.querySelector('.video-bg');

videoBG.innerHTML = `
<source src="video/video.webm" type="video/webm">
<source src="video/video.mp4" type="video/mp4">
`;

