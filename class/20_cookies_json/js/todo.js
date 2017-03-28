var TODO = {

  cookieDuration : 7, // in days
  data : [],

  // retrieve the TODO data from Cookie and store it in array
  getData : function (){
    this.data = (Cookies.get('data') !== undefined )
      ? JSON.parse(Cookies.get('data'))
      : [];
  },

  // set a cookie with the TODO data
  setData : function (){
    Cookies.set('data', JSON.stringify(this.data), { expires: 7 });
  },

  refresh : function(){

    // first empty the toDo list
    $('ul').html('');

    // then fill it again for each entry found in the data list
    for (var i = 0; i < this.data.length; i++) {
      $('ul').append(
        '<li class="list-group-item" data-id="'+i+'">'+
          '<span>'+this.data[i]+'</span>'+
          '<button class="btn btn-danger btn-xs pull-right">X</button>'+
        '</li>')
    }
  },

  removeToDo : function (index){

    // removes specific element from todo list and returns a new list with the element removed
    this.data.splice(index, 1);

    // save new data to cookie and refresh Todo List
    this.setData();
    this.refresh();
  }
}

$(document).ready(function (){

  TODO.getData();
  TODO.refresh();

  // if(typeof Cookies.get('todos') === 'undefined')

  // this function is triggered when the form is submitted
  $('form').submit(function (event){

    event.preventDefault();           // prevent html form from submitting
    TODO.data.push($('input').val()); // add ToDo to our data array
    $('input').val('');               // clear the input field
    TODO.setData();                   // save new data to cookie
    TODO.refresh();                   // refresh list
  });

  // this is just a helper that allows to submit the form by clicking the small button
  $('.input-group-addon').click(function(){
    $('form').submit();
  });

  // this allows to mark todos as completed therefore remove them from ToDo list
  $('button').on('click', function(){
    var index = $(this).parent().data('id');
    TODO.removeToDo(index);
  });

});

