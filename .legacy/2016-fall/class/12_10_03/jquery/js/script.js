function changeBackground (){
    console.log($('body').css('background-color'));
    if($('body').css('background-color') === 'rgb(255, 255, 255)'){
        $('body').css('background-color', 'rgb(0, 0, 0)');
    } else {
        $('body').css('background-color', 'rgb(255, 255, 255)');
    }
}
// setTimeout(function(){
//     changeBackground();
// }, 300);
var count = 0;

var active = setInterval(function(){
    changeBackground();

    if(count > 10) myStopFunction();

    count++;
}, 300);

function myStopFunction() {
    clearInterval(active);
}


