$(document).ready(function(){

  $('.header-burger').on('click',function(){

    $(this).children('button').toggleClass('is-active')
    $('nav.menu').toggleClass('active')

  })

})