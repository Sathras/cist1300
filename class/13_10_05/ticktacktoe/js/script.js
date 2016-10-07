/* global $ */
var player;
var data = {};
var score1 = 0;
var score2 = 0;
var counter = 0;

// determine or create active player
function determinePlayer(){

    if      (player === 1)  player = 2;
    else if (player === 2)  player = 1;
    else                    player = (Math.random() < 0.5) ? 1 : 2;

    // add active class to the correct player, remove it from the other one
    $('span').removeClass('active');
    if(player == 1) $('span:first-of-type').addClass('active');
    else            $('span:last-of-type').addClass('active');
}

// update our data object by reading in the data-value for each .field element
function getData () {
    $('.field').each(function (index, value){
        data[$(this).data('field')] = $(this).data('value');
    });
}

// here we check each row, column or diagonal combination
// if they are equal and not empty
function checkWinner(){
    if(
        data[1] != 0 && data[1] == data[2] && data[2] == data[3] ||
        data[4] != 0 && data[4] == data[5] && data[5] == data[6] ||
        data[7] != 0 && data[7] == data[8] && data[8] == data[9] ||
        data[1] != 0 && data[1] == data[4] && data[4] == data[7] ||
        data[2] != 0 && data[2] == data[5] && data[5] == data[8] ||
        data[3] != 0 && data[3] == data[6] && data[6] == data[9] ||
        data[1] != 0 && data[1] == data[5] && data[5] == data[9] ||
        data[3] != 0 && data[3] == data[5] && data[5] == data[7]
    )
    // if it finds that active player won the game, reset it
    resetGame(false);

    // if we have all fields filled out but no combinations found,
    // we reset the game without a winner
    else if (counter == 9) resetGame(true);
}

function resetGame(draw){

    // start counting filled fields again
    counter = 0;

    // only increase player score if we are not in first round or have a draw
    if(!draw){
        if (player == 1) score1++;
        else             score2++;
    }

    // reset data values and empty text
    $('.field').each(function (index, value){
        $(this).data('value', 0).html('');
    });

    // show score
    $('#score').html (score1+'-'+score2);
}

// this happens when you click on a div
$('.field').click(function (){
    // only do something if the field is empty
    if($(this).data('value') == 0){

        // change data value of field to current player and type character
        var char = (player == 1)  ? '&#10060;' : '&#9711';
        $(this).data('value', player).html(char);

        // increase our occupied fields counter
        counter++;

        // updateData object, check for winner and change active player
        getData();
        checkWinner();
        determinePlayer();
    }
});

// Start game
determinePlayer();
resetGame(true);

/*
 * Artifical Intelligence for a perfect opponent
 *
 * A player can play a perfect game of Tic-tac-toe (to win or, at least, draw)
 * if they choose the first available move from the following list, each turn,
 * as used in Newell and Simon's 1972 tic-tac-toe program. (see wikipedia)
 *
 * 1 >> Win: If you have two in a row, play the third to get three in a row.
 * 2 >> Block: If the opponent has two in a row, play the third to block them.
 * 3 >> Fork: Create an opportunity where you can win in two ways.
 * 4 >> Block Opponent's Fork:
 *
 *          Option 1: Create two in a row to force the opponent into defending,
 *          as long as it doesn't result in them creating a fork or winning.
 *          For example, if "X" has a corner, "O" has the center, and "X" has
 *          the opposite corner as well, "O" must not play a corner in order to
 *          win. (Playing a corner in this scenario creates a fork for "X" to win.)
 *
 *          Option 2: If there is a configuration where the opponent can fork,
 *          block that fork.
 *
 * 5 >> Center: Play the center.
 * 6 >> Opposite Corner: If the opponent is in the corner, play the opposite corner.
 * 7 >> Empty Corner: Play an empty corner.
 * 8 >> Empty Side: Play an empty side.
 */