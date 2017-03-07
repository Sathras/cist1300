// this function reads the value of a specific input field
function getNumber(number){
  return parseInt(document.getElementById("n"+number).value);
}

// this function checks if number is valid (returns true) or not (returns false)
function isNumber(number){
  return (isNaN(number)) ? false : true;
}

// This function is called when the user clicks on the 'add' button
function add(){

  var n1 = getNumber(1);
  var n2 = getNumber(2);

  // check numbers and if invalid error show error message and interrupt program
  if(!isNumber(n1) || !isNumber(n2)){
    document.getElementById("msg").innerHTML = "One of your numbers can not be read!";
    return false;
  }

  // everything went well, calculate and show output
  document.getElementById("msg").innerHTML = "Your numbers were added!";
  document.getElementById("output").value = n1 + n2;
}

// TODO: create functions for the other three mathematical operations