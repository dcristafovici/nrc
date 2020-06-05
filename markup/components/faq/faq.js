$(document).ready(function(){

  $('.faq-item__question').on('click',function(){

    $(this).toggleClass('active')
    $(this).next().slideToggle()

  })

})