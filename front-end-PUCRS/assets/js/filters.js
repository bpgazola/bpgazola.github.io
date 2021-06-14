// JavaScript Document

// Script for filters

$('.btn').on('click', function(){
  var categoria = $(this).attr('data-categoria')
  
  $('.items li').each(function(){
    if(!$(this).hasClass(categoria)){
      $(this).hide()
    }else{
      $(this).show()
    }
  })
})