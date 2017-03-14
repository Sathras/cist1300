var Chess = {

  // global variables
  wPlayer : true, // current player is white (true), otherwise black (false)
  sPiece  : null, // selected piece

  // main action (this happens when a user click somewhere on the board)
  action : function(elm){

    // get element type
    var pType = this.getPiece(elm);

    // if no piece has been selected and current piece is friendly
    if(!this.sPiece && pType === 3){
      // activation
      this.sPiece = elm;
      this.sPiece.addClass('active');
    }

    else if(this.sPiece){
      pos0 = this.getPosition(this.sPiece);
      pos1 = this.getPosition(elm);

      // if same piece was clicked again, deactivate it
      if(pos0.x === pos1.x && pos0.y === pos1.y){
        this.sPiece.removeClass('active');
        this.sPiece = null;
        return;
      }

      // not empty or an ememy piece (no king) --> do nothing
      if(pType > 1) return;

      // get possible movement options and validate them
      if(this.checkMovements(elm)){

        elm
          .data('piece', this.sPiece.data('piece'))
          .attr('data-piece', this.sPiece.data('piece'));
        this.sPiece
          .removeClass('active')
          .removeData('piece')
          .removeAttr('data-piece');
        this.sPiece = null;

        // convert pawn to queen if reaching end of line
        if(elm.data('piece') === 'wp' && elm.data('y') == 1)
          elm.data('piece', 'wq').attr('data-piece', 'wq');

        if(elm.data('piece') === 'bp' && elm.data('y') == 8)
          elm.data('piece', 'bq').attr('data-piece', 'bq');

        // switch player
        this.wPlayer = !this.wPlayer;
      }
    }
  },

  // first creates a list of possible movement options
  // returns true, if to is in option list (movement possible), otherwise false
  checkMovements : function (to){

    // get all possible movement options and store in mList
    var mList;
    switch (this.sPiece.data('piece').charAt(1)){
      case 't' : mList = this.check_T(); break;
      case 'h' : mList = this.check_H(); break;
      case 'b' : mList = this.check_B(); break;
      case 'q' : mList = this.check_Q(); break;
      case 'k' : mList = this.check_K(); break;
      case 'p' : mList = this.check_P();
    }

    // get target position
    var tPos = this.getPosition(to);

    // check if movement matches and if so return true, otherwise false
    if($.inArray(''+tPos.x+tPos.y, mList) !== -1) return true;
    return false;
  },

  // checks pawn movement
  check_P : function (){

    var mList = [];
    var sPos = this.getPosition(this.sPiece);
    var tPos = {x: sPos.x, y:sPos.y};
    var nextEmpty = false;

    // check single straight
    tPos.y = (this.wPlayer) ? tPos.y-1 : tPos.y+1;
    if(this.getPiece(tPos) === 0){
      mList.push(''+tPos.x+tPos.y);
      nextEmpty = true;
    }

    // check sideway movements (only if there is a enemy piece)
    tPos.x --;   if(this.getPiece(tPos) === 1) mList.push(''+tPos.x+tPos.y);
    tPos.x += 2; if(this.getPiece(tPos) === 1) mList.push(''+tPos.x+tPos.y);

    // TODO: special crosssteal move

    // check double movement in first turn
    tPos.x --; tPos.y = (this.wPlayer) ? tPos.y-1 : tPos.y+1;

    if((this.wPlayer && sPos.y === 7) || (!this.wPlayer && sPos.y === 2) &&
        this.getPiece(tPos) === 0 && nextEmpty) mList.push(''+tPos.x+tPos.y);

    return mList;
  },

  // returns position of field, expects a jQuery Selector
  getPosition : function (elm){
    return {
      x: elm.data('x'),
      y: elm.data('y')
    };
  },

  // checks if there is a piece on the given field, returns
  // 0 - no piece
  // 1 - enemy piece (except king)
  // 2 - enemy piece (king)
  // 3 - friendly piece

  // parameter field can be a selector or array

  getPiece : function(field) {

    var piece = (typeof field.x !== 'undefined')
      ? $('#chessboard div[data-x="'+field.x+'"][data-y="'+field.y+'"]').data('piece')
      : field.data('piece');

    // empty field
    if(!piece) return 0;

    // enemy king
    else if((this.wPlayer && piece === 'bk')||(!this.wPlayer && piece === 'wk'))
      return 2;

    // enemy (not a king)
    else if (( this.wPlayer && piece.charAt(0) === 'b')
          || (!this.wPlayer && piece.charAt(0) === 'w')) return 1;

    // otherwise it must be a friendly piece
    else return 3;
  },

  // add correct pieces at correct positions
  initialize : function(){
    $('#chessboard > div').data('piece', '');
    $('#chessboard div:nth-child(1)').data('piece','bt').attr('data-piece','bt');
    $('#chessboard div:nth-child(2)').data('piece','bh').attr('data-piece','bh');
    $('#chessboard div:nth-child(3)').data('piece','bb').attr('data-piece','bb');
    $('#chessboard div:nth-child(4)').data('piece','bq').attr('data-piece','bq');
    $('#chessboard div:nth-child(5)').data('piece','bk').attr('data-piece','bk');
    $('#chessboard div:nth-child(6)').data('piece','bb').attr('data-piece','bb');
    $('#chessboard div:nth-child(7)').data('piece','bh').attr('data-piece','bh');
    $('#chessboard div:nth-child(8)').data('piece','bt').attr('data-piece','bt');

    $('#chessboard div[data-y="2"]').data('piece','bp').attr('data-piece','bp');

    $('#chessboard div[data-y="7"]').data('piece','wp').attr('data-piece','wp');

    $('#chessboard div:nth-child(57)').data('piece','wt').attr('data-piece','wt');
    $('#chessboard div:nth-child(58)').data('piece','wh').attr('data-piece','wh');
    $('#chessboard div:nth-child(59)').data('piece','wb').attr('data-piece','wb');
    $('#chessboard div:nth-child(60)').data('piece','wq').attr('data-piece','wq');
    $('#chessboard div:nth-child(61)').data('piece','wk').attr('data-piece','wk');
    $('#chessboard div:nth-child(62)').data('piece','wb').attr('data-piece','wb');
    $('#chessboard div:nth-child(63)').data('piece','wh').attr('data-piece','wh');
    $('#chessboard div:nth-child(64)').data('piece','wt').attr('data-piece','wt');
  },
};

$(document).ready(function (){
  Chess.initialize();
  $('#chessboard div').click(function(){ Chess.action($(this)); });
});