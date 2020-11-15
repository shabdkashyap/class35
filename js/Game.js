class Game {
    constructor(){}
    // getState() reads gameState value from the database 
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  //update(state) updates gameState value in the database
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  // start()is called when gameState = 0
    start(){
      if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
      }
    }
  }
  