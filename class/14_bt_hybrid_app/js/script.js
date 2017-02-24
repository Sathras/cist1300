/* global $ */

var data;
var table;

$(document).ready(function (){
  var now = new Date();
  $('#loginmodal').modal('show');

  var data = [
    ['2017-02-23T17:11:53.372Z', 'Steven', 28, 2000],
    ['2017-02-23T16:12:53.372Z', 'Maria', 38, 1000],
    ['2017-02-22T17:12:53.372Z', 'Hector', 18, 0],
    ['2017-01-23T17:12:53.372Z', 'Starlord', 48, -100],
    ['2016-02-23T17:12:53.372Z', 'Kyle', 28, 780]
  ];

  table = $('#datatable').DataTable( {
    "order": [[ 0, "desc" ]],
    data: data,
    columns: [
      { title: "Date" },
      { title: "Name" },
      { title: "Age" },
      { title: "Money" },
    ],
    columnDefs : [
      {
        'render' : function (data, type){
          return '<time datetime="'+data+'"></time>';
        },
        'targets' : 0
      },
      { "filter": false,  "targets": [ 0 ] }
    ]
  } );


});


  // enable timeago everytime table is newly drawn
  $("#datatable").on('draw.dt', function() {
    $("time").timeago();
  });


  // what happens if i submit data
  $('#dataform').submit(function(e){
    e.preventDefault();

    var date = new Date();

    table.row.add( [
      date.toISOString(),
      $('#name').val(),
      $('#age').val()
    ]).draw( true );;

    // empty form for next submission
    $('#name').val('');
    $('#age').val('');
  });
