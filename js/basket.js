const basket = document.querySelector('.basket');
const basketBtnOpen = document.querySelector('.basket-btn-open');
const basketBtnClose = document.querySelector('.basket-btn-close');

const toggleBasket = () => basket.classList.toggle('is-open');

basketBtnOpen.addEventListener('click', toggleBasket);
basketBtnClose.addEventListener('click', toggleBasket);
