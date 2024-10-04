
document.addEventListener('DOMContentLoaded', function() {
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");

var swiper = new Swiper('.swiper-hero', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    autoplay: {
    delay: 3000,
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
        }
      }

    
});
});
