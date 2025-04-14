document.addEventListener('DOMContentLoaded', () => {
	
	const bannerSwiper = new Swiper('.banner-swiper', {
		speed: 1000,
		spaceBetween: 0,
		navigation: {
			nextEl: '.banner-swiper .swiper-button-next',
			prevEl: '.banner-swiper .swiper-button-prev',
		},
		  pagination: {
			el: '.banner-swiper .swiper-pagination',
			type: 'bullets',
			clickable: true
		},
	});

	$('.services-btn').magnificPopup({
		type: 'inline',
		showCloseBtn: false,
		callbacks: {
			deforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
	});
	$('.modal-form-close').on('click', function() {
		$.magnificPopup.close();
	});

	$('.gallery-wrap a').magnificPopup({
		type: 'image'
	});





	const reviewsSwiper = new Swiper('.reviews-swiper', {
		speed: 1000,
		spaceBetween: 25,
		  pagination: {
			el: '.reviews-swiper .swiper-pagination',
			type: 'bullets',
			clickable: true
		},
	});

})