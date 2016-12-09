 var mapRules = {
   	   LAND:1,
   	   WATER:2,
   	   NULL:-1,
   	   TREES:3,
   	   POWERUPS:4
   }        
function TurnPhases(){}
function rules(gamePiece){
	   switch(gamePiece.position){
	   	  case mapRules.LAND:
	   	  	   landBehavior(gamePiece);
	   	  break;	
	   	  case mapRules.WATER:
	   	  	   waternBehavior(gamePiece);
	   	  break;	
	   	  case mapRules.NULL:
	   	  	   nullBehavior(gamePiece);
	   	  break;	
	   	  case mapRules.TREES:
	   	  	   treeBehaivor(gamePiece);
	   	  break;	
	   	  case mapRules.POWERUPS:
	   	  	   checkPowerUp(gamePiece);
	   	  break;	
	   	  default:
	   	    console.log('No Position');
	   }
	
}

function validateRules(){
	 
}

