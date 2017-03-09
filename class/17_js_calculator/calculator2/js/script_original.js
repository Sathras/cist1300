// This is the javascript file, as we left it at the end of class

var string = "";
var decimal = false;
var number1;
var operation;

function clickNumberBtn (number){
  string = string + number;
  $('.screen').html(string);
}

function clickDotBtn (){
    if(!decimal) {
    decimal = true;
    string = string + '.';
    $('.screen').html(string);
  }
}
function reset (){

  string = '';
  decimal = false;
  $('.screen').html('');
}

function clickPlus(){

  if(decimal){
    number1 = parseFloat(string);
  } else {
    number1 = parseInt(string);
  }
  string = '';
  operation = '+';
}

function showResult(){
 if(operation == '+'){

  if(decimal){
    number2 = parseFloat(string);
  } else {
    number2 = parseInt(string);
  }
  var result = number1 + number2;
  $('.screen').html(result);
 }
}