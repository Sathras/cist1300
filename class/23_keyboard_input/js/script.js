function getPos (id){
  var elm = $('#puzzle div[data-id="'+id+'"]');
  return {
    x: elm.data('x'),
    y: elm.data('y')
  }
}

function getID (pos){
  return parseInt($('#puzzle div[data-x="'+pos.x+'"][data-y="'+pos.y+'"]').data('id'));
}

function checkMovement (key){

  var posWhite = getPos(0);

  if((key === 39 && posWhite.x==1)
  || (key === 40 && posWhite.y==1)
  || (key === 38 && posWhite.y==4)
  || (key === 37 && posWhite.x==4)
  )  return false;

  return true;
}

function swap (key){

  // get position and ID of white field
  var posWhite = getPos(0);

  // determine position and id of swapping tile
  var posHelper = {x: posWhite.x, y: posWhite.y};
  if     (key === 40) posHelper.y--;
  else if(key === 39) posHelper.x--;
  else if(key === 38) posHelper.y++;
  else if(key === 37) posHelper.x++;
  var idTile = getID(posHelper);

  // instead of swapping positions, just swap ids :)
  $('#puzzle div[data-id="'+idTile+'"]').data('id', '-1').attr('data-id', '-1'); // helper
  $('#puzzle div[data-id="0"]').data('id', idTile).attr('data-id', idTile);
  $('#puzzle div[data-id="-1"]').data('id', '0').attr('data-id', '0');
}

// this gets executed once the entire page is loaded
$(document).ready(function (){

  $(document).keydown(function(e){
    // if movement is allowed, swap the two tiles
    if(checkMovement(e.keyCode)) swap(e.keyCode);
  });

});