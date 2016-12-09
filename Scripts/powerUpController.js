
function powerUpController(n){
	this.name = n;
	this.exists = true;
	this.moves =  powerUp;
	powerUp = {
			heal:function(player){ player.hp += 20},
			ranged:function(player){ player.ranged += 2}
	};
	this.timeOut = function(){
		setTimeout(function(){this.exists = false},5000);
	}
	this.powerUpSet = function(setSelection){
	
		 if(moves[setSelection]){
		 	moves[setSelection]();
		 }
	}
	this.powerUp = function(playerPeice,fn){
		      fn(playerPeice);
	}
}
