$(document).ready(function(){

  $('.check-tabs li').on('click',function(){


    var $indx = $(this).index()

    $('.check-tabs li').removeClass('active')
    $(this).addClass('active')

    $('.check-item').removeClass('active')
    $('.check-item').eq($indx).addClass('active')

  })

})