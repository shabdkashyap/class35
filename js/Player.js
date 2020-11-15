class Player {
    constructor(){}
  // getCount() gets the playerCount value from the database
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  //updateCount() updates the playerCount value into the database
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  //update(Name)updates the name into the database 
    update(name){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        name:name
      });
    }
  }
  