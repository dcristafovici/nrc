$(document).ready(function(){

  var $revSlides = $('.reviews-slides')
  $revSlides.slick({

    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,

        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,

        }
      },
      
    ]

  })

})