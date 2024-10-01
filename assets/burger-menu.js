document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (burgerMenu && mobileMenu) {
    burgerMenu.addEventListener('click', function () {
      burgerMenu.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
  } else {
    console.error('Burger menu or mobile menu not found');
  }
});