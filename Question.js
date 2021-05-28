class Question{
    constructor(){
        this.title = createElement('question');
    }

    display(){
        if (gameState === 0){
            this.title.hide();
        }
      this.title.html("question")
      this.title.position(displayWidth/2 - 330, displayHeight/2 - 170);
    }
}