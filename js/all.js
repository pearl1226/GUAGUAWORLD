$(function () {
  window.addEventListener("scroll", () => {
    let height = $(".navbar-two").offset().top;
    let nav = height >= 50;
    let others = false;
    if (nav || others)
      set1();
    else
      set2();
  });
  function set1(){
    $('.navbar-two').css('opacity','1')
  };
  function set2(){
    $('.navbar-two').css('opacity','0')
  };  
    var swiper = new Swiper(".mySwiper", {
        effect: 'fade',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
    var swiper = new Swiper(".mySwiper2", {
      pagination: {
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    // $('.li-button').hover(function(){

    // })
})