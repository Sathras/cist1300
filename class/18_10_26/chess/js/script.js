var activePlayer = 'white';

function unicodeToChar(text) {
   return text.replace(/\\u[\dA-F]{4}/gi,
      function (match) {
           return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
      });
}


var Chess = {
    activePiece     : false,    // saves the selected piece figure
    activePlayer    : 'White',  // white or black

    // activate a specific piece
    activatePiece : function (pos){
        this.activePiece = pos;
        this.selectPiece(pos).addClass('active');
    },

    // if selecting piece again deactivate it
    deactivatePiece : function (pos){
        this.selectPiece(this.activePiece).removeClass('active');
        this.activePiece = false;
    },

    checkActivation : function (pos){

        var piece = Chess.selectPiece(pos).html();

        if (this.activePlayer === 'White'){
            // check against white
            switch(piece){
                case '♙':
                case '♘':
                case '♗':
                case '♖':
                case '♕':
                case '♔':
                    return true;
            }

        } else {
            // check against black
            switch(piece){
                case '♚':
                case '♛':
                case '♜':
                case '♝':
                case '♞':
                case '♟':
                    return true;
            }
        }
        return false;
    },

    // piece can only be moved onto a piece of opposite color or empty field
    checkMovement : function (pos){
        var target = this.selectPiece(pos).html();

        if (this.activePlayer === 'Black'){
            // check against white
            switch(target){
                case '♙':
                case '♘':
                case '♗':
                case '♖':
                case '♕':
                case '♔':
                case '':
                    return true;
            }

        } else {
            // check against black
            switch(target){
                case '♚':
                case '♛':
                case '♜':
                case '♝':
                case '♞':
                case '♟':
                case '':
                    return true;
            }
        }
        return false;
    },

    initialize: function (){
        $('#chessboard td').click(function (){

            // get position --> pos = [row, column]
            var pos = [
                $(this).parent().index()+1,
                $(this).index()+1
            ];

            // if a piece is already activated
            if(Chess.activePiece) {

                // check if it should get deactivated again
                if(Chess.activePiece[0] === pos[0] && Chess.activePiece[1] === pos[1]){
                    Chess.deactivatePiece(pos);
                }

                // check if movement is possible
                else if (Chess.checkMovement(pos)) {
                    Chess.movePiece(pos);
                }
            }
            // check if activation is possible
            else if (Chess.checkActivation(pos)) {
                Chess.activatePiece(pos);
            }
        });

        // reset game
        this.resetGame();
    },

    movePiece : function (pos){
        // copy active piece to new position
        this.selectPiece(pos).html(this.selectPiece(this.activePiece).html());

        // empty old position and deactivate old position
        this.selectPiece(this.activePiece).html('');
        this.deactivatePiece(pos);

        // switch player
        this.activePlayer = (this.activePlayer == 'Black') ? 'White' : 'Black';
        $('#player').html(this.activePlayer);
    },

    // put pieces back where they belong at the start and set player to white
    resetGame : function (){

        // delete all pieces
        $('#chessboard td').html('');

        // add pieces to original positions
        this.selectPiece([1,1]).html('♜');
        this.selectPiece([1,8]).html('♜');
        this.selectPiece([1,2]).html('♞');
        this.selectPiece([1,7]).html('♞');
        this.selectPiece([1,3]).html('♝');
        this.selectPiece([1,6]).html('♝');
        this.selectPiece([1,4]).html('♛');
        this.selectPiece([1,5]).html('♚');
        $('#chessboard tr:nth-child(2) td').html('♟');

        this.selectPiece([8,1]).html('♖');
        this.selectPiece([8,8]).html('♖');
        this.selectPiece([8,2]).html('♘');
        this.selectPiece([8,7]).html('♘');
        this.selectPiece([8,3]).html('♗');
        this.selectPiece([8,6]).html('♗');
        this.selectPiece([8,4]).html('♕');
        this.selectPiece([8,5]).html('♔');
        $('#chessboard tr:nth-child(7) td').html('♙');

        // set actice player to white
        this.activePlayer = 'White';
        $('#player').html(this.activePlayer);
    },

    selectPiece : function (pos){
        return $('#chessboard tr:nth-child('+pos[0]+') td:nth-child('+pos[1]+')');
    }
};

$(document).ready(function (){
    Chess.initialize();
});