$(document).ready(function () {
  $(".countTo").countTo({
    // from: 100,
    // to: 5000,
    // speed: 3000,
    refreshInterval: 50,
  });
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
