var Chess = {
    acticePosition  : false,    // if no piece is activate = false, otherwise = [row, column]
    activePiece     : false,    // saves the selected piece figure
    activePlayer    : 'white',  // white or black

    activatePiece : function (){

        $('div.chessboard > div').click(function (){
            // do something
        });

        // reset game
        this.resetGame();
    },

    checkActivation : function (){

    },

    checkMovement : function (){

    },

    initialize: function (){

    },

    deactivatePiece : function (){

    },

    movePiece : function (){

    },

    resetGame : function (){
        // put pieces back where they belong at the start

        // set actice player to white
        this.activePlayer = 'white';
    }
}

$(document).ready(function (){
    Chess.initialize();
});