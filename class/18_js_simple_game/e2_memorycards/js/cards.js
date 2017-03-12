var card1 = null;

$('.card').click( function (){

  if(!card1){
    $(this).removeClass('hidden');
    card1 = $(this).data('card');
    console.log(card1);
  }
  else {
    if($(this).data('card') === card1){
      // cards match
      $('.card'+card1).removeClass('hidden').css('background-color', 'white');
      // $('[data-card='+card1+']').remove();
    } else {
      // cards don't match
      $('.card'+card1).addClass('hidden');

      card1 = null;
    }
  }
});