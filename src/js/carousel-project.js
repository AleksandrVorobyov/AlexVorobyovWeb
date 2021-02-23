$(document).ready(function(){
    $(".carousel-project").owlCarousel({
      items: 1,
      nav:true,
      autoplay: true,
      autoplayTimeout: 30000,
      smartSpeed: 2500,
      loop: true,
      mouseDrag: false,
      margin: 10
    });
  });

  $(document).ready(function(){
    $(".header__carousel").owlCarousel({
      nav:false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 30000,
      smartSpeed:2500,
      loop: true,
      margin: 20,
      mouseDrag: false,
      responsive: {
        0 : {
          items: 1
        },
        1024 : {
          items: 2
        },
        1200 : {
          items: 3
        }
      }
      });

      $('.header__carousel-btn-next').click(function() {
        $(".header__carousel").trigger('next.owl.carousel', [2500]);
    })
    $('.header__carousel-btn-prev').click(function() {
        $(".header__carousel").trigger('prev.owl.carousel', [2500]);
    })
  });


