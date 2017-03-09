/**
 * Advanced Calculator
 *******************************************************************************
 * This is an enhanched javascript file including detailed comments
 * and explainations
 */

var input = "";       // here we store the current number               [string]
var decimal = false;  // current number type (float if true)           [boolean]
var number;           // current number1 stored in memory            [int/float]
var operator;         // mathematical operator, we want to apply       [+,-,*,/]


// this function is called when a user clicks on the reset button
function reset (){
  input   = '';               // empty our input string
  decimal = false;            // reset float marker
  number  = operator = null; // clear previous number and operator
  $('.screen').html('');      // clear screen
}

// this function is called when a user clicks on a number button
function clickDigit (num){

  /**
   * check if we previously selected an operator
   * if so:  we know that our first number has been stored to the memory and we
   *         are now starting the new number (set input to new number)
   * if not: we know that we are just adding up to the current input, so just
   *         add digit
   */
  if(number == input) input = num;
  else                input += num;

  // show current input on screen
  $('.screen').html(input);
}

// this function is called when a user clicks on the period button
function clickPeriod (){

  // if we already clicked the period button, exit this function - nothing to do
  if(decimal) return false;

  // if not, remember we clicked it now
  decimal = true;

  // same as before, check if we have a number in memory that equals input
  if(number == input){
    // if so we start a new input and assume that no number before . means 0.
    if(input.length == 0) input = '0.';
    else                  input = '.';

  } else {

    // otherwise add . or 0. to the input
    if(input.length == 0) input += '0.';
    else                  input += '.';

  }

  // and show current input on screen
  $('.screen').html(input);
}


// this function is called when a user clicks on an operator
function clickOperator(op){

  // check if we already have a number in our memory
  // if so, calculate the number in memory with the one in our input string
  if(number) calc();

  // save current number into memory by transforming input string into number
  else number = (decimal) ? parseFloat(input) : parseInt(input);

  // set operator to +, -, *, or /
  operator = op;
  decimal = false;
}

/**
 * this function is called when we want to calculate the result of the
 * number in memory with that in the string by applying a mathematatical
 * operator
 */
function calc(){

  // only allow calculations if we have a number in memory and input > 0 and
  // we previously set an operator
  if(!number || !operator || input.length === 0) return false;

  // we convert the input string into another number
  var number2 = (decimal) ? parseFloat(input) : parseInt(input);

  // calculate result and assign number in memory to it
  switch(operator){
    case '+': number += number2; break;
    case '-': number -= number2; break;
    case '*': number *= number2; break;
    // Division: we have to make sure number2 is not 0 otherwise we get a error
    case '/': if(number2 !== 0) number /= number2; else return false;
  }

  // reset input and float marker
  input = '';
  decimal = false;

  // show result on scren
  $('.screen').html(number);

}