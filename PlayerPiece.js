function PlayerPiece(h,r,c){
	  this.hp = h;
	  this.moves = 0;
	  this.moved = false;
	  this.canMove = false;
	  this.range = r;
	  this.color = c;
	  this.abilities = [];
	  this.currentPosition = {x:0,y:0};
	  
	  this.move = function(){
	  	if(this.currentPosition === 0 && this.moved === false){
              this.canMove = true;	
	    }
	  }
	  this.setPosition = function(x,y){
	  	      this.currentPosition.x = x;
	  	      this.currentPosition.y = y;
	  }
	  this.move = function(fn,direction,numberOfMoves){
	  	    var north =direction.N.x = numberOfMoves;
	  		var west  =direction.W.y =-numberOfMoves;
	  		var east  =direction.E.y =-numberOfMoves;
	  		var south =direction.S.x = numberOfMoves;
	  		
	  		switch(direction){
	  			case N:
	  				// check bindings of map Bounds
	  				// make sure that game peice can move//
	  				// if bounds end player cannot move
	  				// if distanceFrombounds >=numberOfMoves
	  				//getmaplength compare too
	  				checkMapBounds(this.currentPosition);
	  			break;
	  			case E:
	  			break;
	  			case W:
	  			break;
	  			case S:
	  			break;
	  			default:
	  			break;
	  		}
	  		
	  	
	  }
}    
   
   var direction = {
   		N:{x:1,y:0},
   		E:{x:0,y:1},
   		W:{x:0,y:-1},
   		S:{x:1,y:0}
   };
   
