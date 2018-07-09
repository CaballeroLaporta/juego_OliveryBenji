// Creación del constructor(clase)
function Game(ctx, canvas) {
  this.ctx = ctx;
  this.width = canvas.width;
  this.height = canvas.height;
  this.upPressed = false;
  this.downPressed = false;


  this.player = new Player(this.ctx,this.width,this.height)
  this.ball = new Ball(this.ctx,this.width,this.height); // falta hacer la clase game

  // this.ball = new Ball()
 
}

//Creación del método dentro del constructor Game
Game.prototype._drawBoard = function () {
  this.ctx.fillStyle="#00EE00";
  this.ctx.fillRect(0,0,this.width,this.height);

}

Game.prototype.start = function() {
  this._assignControlsToKeys();
  window.requestAnimationFrame(this._doFrame.bind(this));
}

Game.prototype._doFrame = function () {
  var self = this;
    this._drawBoard();
    this.player._draw();
    //this.player._position();
    this.ball._drawBall();
    if (this.upPressed) {
      this.player.upMovement();
    }
    if (this.downPressed){
      this.player.downMovement();
    }

    

   
    window.requestAnimationFrame(function(){
      self._doFrame()
    })
}

Game.prototype._assignControlsToKeys = function () {
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 38: //arrow up
        this.upPressed = true;
        break;
      case 40: //arror down
        this.downPressed = true;
        break;
      // case 37: //arror left
      //   //this.snake.goLeft();
      //   break;
      // case 39: //arrow right
      //   this.rightPressed = true;
      //   break; 
      
    }
  }.bind(this);

  document.onkeyup = function (e) {
    switch (e.keyCode) {
      case 38: //arrow up
        this.upPressed = false;
        break;
      case 40: //arror down
        this.downPressed = false;
        break;
      // case 37: //arror left
      //   //this.snake.goLeft();
      //   break;
      // case 39: //arrow right
      //   this.upPressed = false;
      //   break; 
      
    }
  }.bind(this);
}