// Sticky header
try {
	document.addEventListener('scroll', () => {
		const header = document.querySelector('.header');

		if (window.scrollY > 0) {
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}
	});
} catch (e) {}

// Hamburger menu
try {
	const hamburger = document.querySelector('.hamburger');
	const header = document.querySelector('.header');
	const navLinks = document.querySelectorAll('.nav__link');

	hamburger.addEventListener('click', () => {
		if (!header.classList.contains('header--active')) {
			header.classList.add('header--active');
			document.body.classList.add('no-scroll');
		} else {
			header.classList.remove('header--active');
			document.body.classList.remove('no-scroll');
		}
	});

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			if (header.classList.contains('header--active')) {
				header.classList.remove('header--active');
				document.body.classList.remove('no-scroll');
			}
		});
	});
} catch (e) {}

// Docs carousel
try {
	var swiper = new Swiper('.intro__slider', {
		cssMode: true,
		navigation: {
			nextEl: '.intro__slider-next',
			prevEl: '.intro__slider-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		mousewheel: true,
		keyboard: true,
	});
} catch (e) {}

// Review carousel
try {
	let swiper = new Swiper('.reviews__slider', {
		slidesPerView: 3,
		spaceBetween: 20,
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },
		loop: true,
		navigation: {
			nextEl: '.reviews__slider-next',
			prevEl: '.reviews__slider-prev',
		},
		pagination: {
			el: '.reviews__slider-pagination',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			769: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
		// on: {
		// 	init() {
		// 		this.el.addEventListener('mouseenter', () => {
		// 			this.autoplay.stop();
		// 		});

		// 		this.el.addEventListener('mouseleave', () => {
		// 			this.autoplay.start();
		// 		});
		// 	},
		// },
	});
} catch (e) {}

// Docs carousel
try {
	let swiper = new Swiper('.docs__slider', {
		slidesPerView: 3,
		spaceBetween: 20,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			576: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});
} catch (e) {}

// Faq accordion
try {
	const faqTop = document.querySelectorAll('.faq__item-question');

	faqTop.forEach(item => {
		item.addEventListener('click', () => {
			const faqContent = item.nextElementSibling;
			if (!item.classList.contains('faq__item-question--active')) {
				item.classList.add('faq__item-question--active');
				faqContent.style.height = `${faqContent.scrollHeight}px`;
			} else {
				faqContent.style.height = `0px`;
				item.classList.remove('faq__item-question--active');
			}
		});
	});
} catch (e) {}

// To top btn
try {
	document.addEventListener('scroll', () => {
		const toTopBtn = document.querySelector('.to-top');

		if (window.scrollY > 200) {
			toTopBtn.classList.add('show');
		} else {
			toTopBtn.classList.remove('show');
		}
	});
} catch (e) {}
