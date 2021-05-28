class Contestant{
    constructor(){
      this.index = null;
      this.play = createButton('Play');
    }

    getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value",function(data){
          contestantCount = data.val();
        })
      }

    updateplayerCount(count){
    //   for(i = 0; i < 2; i++){
    //     playerCount = playerCount+1
    //   }
    // }

    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var index = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
      });
    }
  
    display(){
      this.play.html("Play")
      this.play.position(displayWidth/2 - 330, displayHeight/2 - 170);
      this.play.mousePressed(()=>{
        this.play.hide();
        quiz.update(1);
      }) 
    }
}