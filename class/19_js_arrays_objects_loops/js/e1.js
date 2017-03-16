var numbers = [];
var sum = 0;

$('#numbertable thead tr').append('<th>Sum</th>');

for (var i = 0; i < 15; i++) {
  numbers[i] = parseInt(Math.random() * 100);
  sum += numbers[i];
  $('#numbertable tbody')
    .append(
      '<tr>'+
        '<td>'+numbers[i]+'</td>'+
        '<td>'+sum+'</td>'+
      '</tr>');
}
