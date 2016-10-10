$('div').on('mouseover', function(){
    var direction = (Math.random() >= 0.5) ? '+=' : '-=';
    var distance = Math.random() * 400;
    var direction = direction + distance;

    $('div').animate({ left: direction }, 400);
});





// $('div').on('mouseover', function(){
//     $('div').css('left', '50%').css('top:50%');
// });

// $('div').animate({ left: "+=200" }, 2000);