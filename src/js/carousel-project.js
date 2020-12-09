$(document).ready(function(){
    $(".carousel-project").owlCarousel({
      items: 1,
      nav:true,
      autoplay: true,
      autoplayTimeout: 10000,
      smartSpeed:1500,
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      margin: 10
    });
  });

  $(document).ready(function(){
    $(".header-owl-carousel").owlCarousel({
      nav:false,
      autoplay: true,
      autoplayTimeout: 10000,
      loop: true,
      margin: 20,
      responsive: {
        0 : {
          items: 2
        },
        1140 : {
          items: 3
        }
      }
      });
  });


