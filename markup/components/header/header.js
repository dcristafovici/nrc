$(document).ready(function(){

  $('.header-burger').on('click',function(){

    $(this).children('button').toggleClass('is-active')
    $('nav.menu').toggleClass('active')

  })

  


})

$(document).ready(function(){

  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });
  
  function updateScroll(){

    scroll.update()

  }
  setTimeout(updateScroll, 100)


  $('nav.menu a').on('click',function(event){
    event.preventDefault();
    var href = $(this).attr('href')
    var element = $(href)[0];
    scroll.scrollTo(element)
    if(window.innerWidth < 768){
      $('.header-menu').removeClass('active')
      $('#header-burger').children('.hamburger').removeClass('is-active')
    }
  });
})


$(window).on('load', function () {

  $('body').addClass('loaded')

});