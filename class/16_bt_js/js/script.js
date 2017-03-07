$('#btn0').click(function(){

  if($('h3').hasClass('color-red')){
    $('h3').removeClass('color-red');
  }
  else {
    $('h3').addClass('color-red');
  }
});
