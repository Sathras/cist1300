// this gets executed once the entire page is loaded
$(document).ready(function (){

  document.addEventListener("keydown", function(e){
    if( 38 === e.keyCode ) console.log(e.key);
    if( 37 === e.keyCode ) console.log(e.key);
    if( 39 === e.keyCode ) console.log(e.key);
    if( 40 === e.keyCode ) console.log(e.key);
  });

});