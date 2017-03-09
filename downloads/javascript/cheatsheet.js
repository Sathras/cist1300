/******************************************************************************/
// comments
/******************************************************************************/

// use CRTL + "/" while having multiple lines marked to make or remove
//                 a comment over all lines at once (cloud9 feature)

// single line comment    "Code cannot continue after this comment in same line"
/* single line comment */ text = "Code can continue after this comment in same line"

/*
  multi
  line
  comment
*/

  // multi
  // line
  // comment

/**
 * beautiful multi-line
 * comment
 */

 <!-- HTML comments do not work in JavaScript -->

/******************************************************************************/
// if / else
/******************************************************************************/

// type if and then TAB to quickly create a whole if/else clause

if(condition){
  // do this
}

// with else (optional)
if(condition){
  // do this
} else {
  // otherwise do that
}

// if there is only one command in an if/else execution block, than you don't need {}
if(condition) x = true;
else x = false;

// if you have a very short if/else (one line) you can write this:
if(condition) ? /* do this */ : /* else do that */ ;

// this also works for if only
if(condition) ? /* do this */ ;

// or when assigning the value of a variable
var variable = (condition) ? true : false;

// if you want to evaluate something down to true/false you don't have to compare to == true
variable = true;
if(variable === true) // do this
// equals
if(variable) // do this


/******************************************************************************/
// Operators
/******************************************************************************/

// shortform

number = number + 10;
// equals
number += 10;

// this also works for -=, *=, /=

number = number + 1;
// equals
number += 1;
// equals           // if you add or subtract exactly 1, you can use the ++, or
number++;           // -- operator.

// = vs == vs ===
number = 1;       // here we assign number to a value of 1
if(number == 1)   // here we compare number with 1
if(number === 1)  // here we compare number with 1 (strict)

number = 1;
(number == 1)     // condition is true
(number === 1)    // condition is true

number = '1';
(number == 1)     // condition is true
(number === 1)    // condition is false

