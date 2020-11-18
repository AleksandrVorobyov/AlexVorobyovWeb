$(document).ready(function(){
    $(".carousel-project").owlCarousel({
      items: 1,
      nav:true,
      autoplay: true,
      autoplayTimeout: 10000,
      smartSpeed:1500,
      loop: true,
      margin: 10
    });
  });

$(document).ready(function(){
    $(".header-owl-carousel").owlCarousel({
      items: 3,
      nav:false,
      autoplay: false,
      loop: false,
      margin: 0,
      margin: 20,
      });
  });

