
// var variable = (false) ? "string1" : "string2";

// alert(variable);

// if(1 === '1') {
//     alert('This is true')
// }

function change () {
    // document.getElementById("btn").innerHTML =
    // "<img src='https://blackboard.unomaha.edu/modules/_135_1/canvas.jpg' />";

    var cla = document.getElementById("btn").className;

    if(cla == '') document.getElementById("btn").className = 'red';
    else document.getElementById("btn").className = '';

}
