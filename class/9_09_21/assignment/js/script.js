function getNumber (id){
    var number = document.getElementById(id).value;
    number = parseInt(number);
    return number;
}

function add(){
    var n1 = getNumber('n1');
    var n2 = getNumber('n2');

    if(isNaN(n1) || isNaN(n2)) {
        return document.getElementById('msg').
        innerHTML = 'Error: your input is not a number';
    }

    document.getElementById('msg').
        innerHTML = 'Calculator';

    return document.getElementById('output').
        value = n1 + n2;
}



// var number = getNumber(77);
// console.log(number);