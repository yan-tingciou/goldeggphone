$(document).ready(function(){
  $('.menu > li > a').click(function(event){
    event.preventDefault();
    $(this).parent().find('ul').slideToggle();
    $(this).parent().siblings().find('ul').slideUp();
  });
  const swiper = new Swiper('.swiper', {
  // Optional parameters
  autoplay: {
  delay: 5000,
  },
  effect: 'slide',
  slideShadows: 'false',
  direction: 'horizontal',
  speed: 800,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
});

