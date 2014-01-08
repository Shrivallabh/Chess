/**
 * Created by sagarpatil on 30/12/13.
 */

document.addEventListener('DOMContentLoaded', function(){
    init();
});

function init(){
    Chess.init('#chess-board-container .chess-board .board');
}

var Chess = (function(){
    var self;
    function Chess(){
        self = this;
    }
    var p = Chess.prototype;

    function arrangePieces(){
        var pieceTemplate = '<div class="chess-piece"></div>';

        //Arrange pieces
        var blackRook = $(self.boardSelector + ' #a8').append(pieceTemplate);
        $(blackRook.selector + ' .chess-piece').addClass('black rook');
        var blackRook2 = $(self.boardSelector + ' #h8').append(pieceTemplate);
        $(blackRook2.selector + ' .chess-piece').addClass('black rook');

        var whiteRook = $(self.boardSelector + ' #a1').append(pieceTemplate);
        $(whiteRook.selector + ' .chess-piece').addClass('white rook');
        var whiteRook2 = $(self.boardSelector + ' #h1').append(pieceTemplate);
        $(whiteRook2.selector + ' .chess-piece').addClass('white rook');

        var blackKnight = $(self.boardSelector + ' #b8').append(pieceTemplate);
        $(blackKnight.selector + ' .chess-piece').addClass('black knight');
        var blackKnight2 = $(self.boardSelector + ' #g8').append(pieceTemplate);
        $(blackKnight2.selector + ' .chess-piece').addClass('black knight');

        var whiteKnight = $(self.boardSelector + ' #b1').append(pieceTemplate);
        $(whiteKnight.selector + ' .chess-piece').addClass('white knight');
        var whiteKnight2 = $(self.boardSelector + ' #g1').append(pieceTemplate);
        $(whiteKnight2.selector + ' .chess-piece').addClass('white knight');

        var blackBishop = $(self.boardSelector + ' #c8').append(pieceTemplate);
        $(blackBishop.selector + ' .chess-piece').addClass('black bishop');
        var blackBishop2 = $(self.boardSelector + ' #f8').append(pieceTemplate);
        $(blackBishop2.selector + ' .chess-piece').addClass('black bishop');

        var whiteBishop = $(self.boardSelector + ' #c1').append(pieceTemplate);
        $(whiteBishop.selector + ' .chess-piece').addClass('white bishop');
        var whiteBishop2 = $(self.boardSelector + ' #f1').append(pieceTemplate);
        $(whiteBishop2.selector + ' .chess-piece').addClass('white bishop');

        var blackQueen = $(self.boardSelector + ' #d8').append(pieceTemplate);
        $(blackQueen.selector + ' .chess-piece').addClass('black queen');
        var blackKing = $(self.boardSelector + ' #e8').append(pieceTemplate);
        $(blackKing.selector + ' .chess-piece').addClass('black king');

        var whiteQueen = $(self.boardSelector + ' #d1').append(pieceTemplate);
        $(whiteQueen.selector + ' .chess-piece').addClass('white queen');
        var whiteKing = $(self.boardSelector + ' #e1').append(pieceTemplate);
        $(whiteKing.selector + ' .chess-piece').addClass('white king');

        //Pawns
        var pawnRows = [2,7];
        var pawnCols = ['a','b','c','d','e','f','g','h'];
        for(var i = 0;i < pawnRows.length; i++){
            for(var j = 0;j < pawnCols.length;j++){
                var pawn = $(self.boardSelector + ' #'+pawnCols[j]+pawnRows[i]).append(pieceTemplate);
                if(i == 0){
                    $(pawn.selector + ' .chess-piece').addClass('white pawn');
                }else{
                    $(pawn.selector + ' .chess-piece').addClass('black pawn');
                }

            }
        }
    }

    p.init = function(boardId){
        this.boardSelector = boardId;
        this.board = $(this.boardSelector);
        arrangePieces();
    }

    return new Chess();
})();