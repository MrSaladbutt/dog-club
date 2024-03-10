const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 2,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});
