console.log(document.getElementById("email").value);

// method 2
function method2() {

    var x = document.getElementById("form1");

    console.log(x.elements)

    // var text = "";
    // var i;
    // for (i = 0; i < x.length ;i++) {
    //     text += x.elements[i].value + "<br>";
    // }
    // document.getElementById("demo").innerHTML = text;
}

function method3(){
    $('#email').val('update');
    console.log($('#email').val());
}

$('form').submit(function (event){
    event.preventDefault();

    console.log(document.getElementById("email").value);
    console.log(document.getElementById("password").value);
})