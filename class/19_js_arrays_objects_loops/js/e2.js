var numbers = [];

for (var i = 0; i < 15; i++) {
  numbers[i] = [parseInt(Math.random() * 100)];
}


$(document).ready(function() {
    $('#numbertable').DataTable( {
        data: numbers,
        columns: [
            { title: "Numbers" }
        ]
    } );
} );