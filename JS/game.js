// Creación del constructor(clase)
function Game(ctx, canvas, cb) {
  this.ctx = ctx;
  this.callback = cb;
  this.width = canvas.width;
  this.height = canvas.height;
  this.upPressed = false;
  this.downPressed = false;
  this.player = new Player(this.ctx,this.width,this.height)
  this.ball = new Ball(this.ctx,this.width,this.height); 
};

//Creación del método dentro del constructor Game
Game.prototype._drawBoard = function () {
  this.ctx.fillStyle="#00EE00";
  this.ctx.fillRect(0,0,this.width,this.height);
};

Game.prototype._checkGoal = function () {
  if (this.ball) {
    if(this.ball.positionX > 500){
      console.log("Goal");
      this.callback();

      this.ball = null;
    };
  };
};

Game.prototype._CheckColliion = function () {
  if (this.ball.positionX + this.ball.width >= this.player.positionX &&
    this.ball.positionX <= this.player.positionX + this.player.width &&
    this.ball.positionY >= this.player.positionY &&
    this.ball.positionY + this.ball.height <= this.player.positionY + this.player.height) {
    this.player.score++
    this.ball = null;
    console.log("SCORE: " + this.player.score);
  };
};


Game.prototype.start = function() {
  this._assignControlsToKeys();
  window.requestAnimationFrame(this._doFrame.bind(this));
};

Game.prototype._doFrame = function () {
  var self = this;
  this._drawBoard();
  this.player._draw();
  if (this.ball) {
    this.ball._drawBall();
    this.ball._position();
    this._CheckColliion();
    this._checkGoal();
  };
  if (this.upPressed) { this.player.upMovement() };
  if (this.downPressed) { this.player.downMovement() };
  window.requestAnimationFrame(function(){
    self._doFrame();
  });
};

Game.prototype._generateNewBall = function() {
  this.ball = new Ball(this.ctx,this.width,this.height);
};

Game.prototype._assignControlsToKeys = function() {
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 38: //arrow up
        this.upPressed = true;
        break;
      case 40: //arror down
        this.downPressed = true;
        break;
    };
  }.bind(this);

  document.onkeyup = function (e) {
    switch (e.keyCode) {
      case 38: //arrow up
        this.upPressed = false;
        break;
      case 40: //arror down
        this.downPressed = false;
        break;
       case 32: //space bar
        this._generateNewBall();
        break;
    };
  }.bind(this);
};
