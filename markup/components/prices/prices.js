$(document).ready(function(){

  $('.prices-tabs li').on('click',function(){

    var $index = $(this).index()

    $('.prices-tabs li').removeClass('active')
    $(this).addClass('active')

    $('.prices-item').removeClass('active')
    $('.prices-item').eq($index).addClass('active')

  })

})