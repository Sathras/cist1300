var TODO = {

  data : [],

  refresh : function(){
    $('ul').html('');

    for (var i = 0; i < this.data.length; i++) {
      $('ul').append(
        '<li class="list-group-item">'+
          '<span>'+this.data[i]+'</span>'+
          '<button class="btn btn-success btn-xs pull-right">'+
            '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'+
          '</button>'+
        '</li>')
    }
  }

}

$(document).ready(function (){

  var data = [];

  // if(typeof Cookies.get('todos') === 'undefined')

  // all kind of events (e.g. click) should go here and trigger functions in TODO
  $('form').submit(function (event){
    event.preventDefault();
    TODO.data.push($('input').val());
    $('input').val('');
    TODO.refresh();
  });

  $('.input-group-addon').click(function(){
    $('form').submit();
  });

  $('.btn-success').on('click', function(){
    $(this).parent().addClass('done');
  });
});

