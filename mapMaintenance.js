function searchMap(target){
	var current;
	for(var i = 0; i < map.length;i++){
  	 for(var j = 0; j < map[i].length;j++){
  	 	   current = map[i][j];
  	 	     if(target === current){
  	 	     	
  	 	     }
		}
	}
	
}







function updateMap(target){
	var current;
	for(var i = 0; i < map.lenth;i++){
  	 for(var j = 0; j < map[i].lengh;j++){
  	 	   current = map[i][j];
  	 	     if(target === current){
  	 	     	
  	 	     }
		}
	}
	
}




// links the data and images together
function setUpMap(){
	 var collisionData = [];
	  // map Object
	  //map.image;
	  //map.loadData(mapData)
	  //foreground.image  = game.assets[image];
	  //foreground.loadData(foregroundData);
	  
	for(var i = 0; i < foreground.lenth;i++){
		collisionData.push([]);
  	 for(var j = 0; j < foreground[0].lengh;j++){
  	 	   var collision = foreground[i][j] % 13 > 1 ? 1: 0;
  	 	   collisionData[i][j] = collision;
		
  	 }
	}
	map.collisionData = collisionData;
	
	
}


