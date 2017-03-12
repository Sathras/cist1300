var Chess = {

  // global variables
  wPlayer : true, // current player is white (true), otherwise black (false)
  sPiece  : null, // selected piece
  options : [],   // possible movement options

  action : function(elm){

    var field = this.getField(elm);

    // if no piece has been selected
    if(!this.sPiece){

      // check if the currently selected field contains a friendly piece
      if(!this.isEmpty(field) && !this.isEnemy(field)){

        // select and activate it
        this.sPiece = elm;
        this.sPiece.addClass('active');

        // create list with valid movement options
        this.options = this.checkMovements(this.wPlayer);
      }
    }

    // selected piece is the same that is already selected
    else if (this.sPiece == elm) {
      // deselect it
      this.sPiece.removeClass('active');
      this.sPiece = false;
      this.options = [];
    }

    // movement attempt - check list if target position is inside list
    else if ($.inArray(''+pos.x+pos.y, this.options) !== -1){
      // copy piece into new position
      this.selectPiece(pos)
        .data('piece', this.sPiece.data('piece'))
        .attr('data-piece', this.sPiece.data('piece'));

      // remove piece from old position and deselect active piece
      this.sPiece.removeClass('active').removeData('piece').removeAttr('data-piece');
      this.sPiece = false;

      // switch player
      this.wPlayer = !this.wPlayer;
      this.options = [];
    }
  },

  // add a field to the list of possible movements
  addOption : function (field){
    this.options.push('' + field.x + field.y);
  },

  // updates a list of all possible movements for selected piece
  checkMovements : function (){
    // get piece type
    var field = this.getPos(this.sPiece);
    switch (this.getPiece(field).charAt(1)){
      case 't' : this.checkTower (field); break;
      case 'h' : this.checkHorse (field); break;
      case 'b' : this.checkBishop(field); break;
      case 'q' : this.checkQueen (field); break;
      case 'k' : this.checkKing  (field); break;
      case 'p' : this.checkPawn  (field);
    }
  },

  checkPawn : function (field){

    var target = {
      x : field.x,
      y : (this.wPlayer) ? field.y-1 : field.y+1
    };

    // check straight movement
    if(this.canGo(target)) this.options.push(target);

    // check sideway movements (only if there is a enemy piece)
    target.x--;
    if(this.isEnemy(target) && this.canGo(target)) this.addOption(target);
    target.x += 2;
    if(this.isEnemy(target) && this.canGo(target)) this.addOption(target);

    // TODO: special crosssteal move

    // check double movement in first turn
    // pawn must not have been moved and
    // next field must be empty and
    // 2 fields ahead must be empty
    target.x--;
    if((this.wPlayer && field.y === 7) || (!this.wPlayer && field.y === 2) &&
        isEmpty(target) &&
        isEmpty({x : target.x, y : (this.wPlayer) ? target.y-1 : target.y+1})
    ) this.addOption(target);
  },

  // returns position of field, expects a jQuery Selector
  getField : function (elm){
    return [elm.data('x'),elm.data('y')];
  },

  // returns position of field, expects a jQuery Selector
  getPiece : function (field){
    return this.selectPiece(field).data('piece');
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

  isEmpty : function (field){
    if(!this.getElm(this.getPiece(field))) return true;
    return false;
  },

  isEnemy : function (field){
    var piece = this.getElm(this.getPiece(field));
    if(piece && ( this.wPlayer && piece.charAt(0) === 'b')
             || (!this.wPlayer && piece.charAt(0) === 'w'))
      return true;
    return false;
  },

  getElm : function (field){
    return $('#chessboard > div[data-x="'+field[0]+'"][data-y="'+field[1]+'"]');
  },

  // if target position is in game board and has enemy piece (except king)
  // or is empty return true, otherwise false
  canGo : function (field){

    // check boundaries
    if(field.x > 8 || field.x < 1 || field.y > 8 || field.y < 1) return false;

    var piece = this.getElm(field).data('piece');

    // empty field always true
    if(!piece) return true;

    // own pieces always false
    if((this.wPlayer && piece.charAt(0) === 'w') ||
      (!this.wPlayer && piece.charAt(0) === 'b')) return false;

    // enemy king always false
    if((this.wPlayer && piece === 'wk') || (!this.wPlayer && piece === 'bk'))
    return false;

    // otherwise true (normal enemy piece)
    return true;
  }
};

$(document).ready(function (){
  Chess.initialize();
  $('#chessboard div').click(function(){ Chess.action($(this)); });
});