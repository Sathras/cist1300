function getNumber(number){
    return parseInt(document.getElementById("n"+number).value);
}

function checkNumbers(n1, n2){
    if(isNaN(n1) || isNaN(n2)){
        document.getElementById("msg").innerHTML =
        "One of your numbers can not be read!";
        return true;
    }
    else return false;
}

function add(){

    var n1 = getNumber(1);
    var n2 = getNumber(2);

    // check numbers and if error interrupt program
    if(checkNumbers(n1,n2)) return false;

    // everything went well
    document.getElementById("msg").innerHTML = "Your numbers were added!";
    document.getElementById("output").value = n1 + n2;
}