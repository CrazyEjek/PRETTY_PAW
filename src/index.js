import './index.html';
import './page.html';
// modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';
import { videobackgrInit } from './modules/videobackgr';
import { menuControl } from './modules/menuControl';
import { locationHover } from './modules/locationHover';
import { initScrollTopButton } from './modules/scrollTopButton';
import { pageControlInit } from './modules/pageControl';


videobackgrInit();
// slidersInit ();
menuControl();
locationHover();
initScrollTopButton('arrow-top', {hover: false,});
pageControlInit();

slidersInit('.about__slider' , {
    pagination: {
        el: '.about__slider-pagination',
		enabled: true,
    }
});

slidersInit('.career__slider' , {
  breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 20,
			slideToClickedSlide: true,
			pagination: {
				el: '.career__slider-pagination',
				enabled: true,
			},
			autoplay: {
				delay: 3500,
				disableOnInteraction: true,
			},
		},

		576: {
			slidesPerView: 'auto',
			spaceBetween: 20,
			pagination: {
				enabled: false,
			},
		},

		1024: {
			slidesPerView: 'auto',
			spaceBetween: 26,
			pagination: {
				enabled: false,
			},
		},

		1280: {
			slidesPerView: 'auto',
			spaceBetween: 30,
			pagination: {
				enabled: false,
			},
		}
	}
});

const videoBG = document.querySelector('.video-bg');

videoBG.innerHTML = `
<source src="video/video.webm" type="video/webm">
<source src="video/video.mp4" type="video/mp4">
`;

