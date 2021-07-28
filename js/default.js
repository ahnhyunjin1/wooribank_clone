$(document).ready(function () {
  var swiper = new Swiper(".slide1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".paging",
      clickable: true,
    },
    navigation: {
      nextEl: ".slide1 .next",
      prevEl: ".slide1 .prev",
    },
  })

});