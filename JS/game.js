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
  this.scoreBenji = 0;
  this.scoreOliver = 0;
  this.attemps = 9;
  this.intervalID = undefined;
  this.imageCanvas = new Image();
  this.imageCanvas.src = "img/field.jpg";
  this.music = new Music("./songs/song.mp3");
  this.musicGoalkeeper = new Music("./songs/applause2.wav")
};

//Creación de métodos dentro del constructor Game

Game.prototype._drawBoard = function() {
  this.ctx.drawImage(this.imageCanvas,0,0,this.width,this.height);

};

Game.prototype._drawPlayerScore = function() {
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "#000000";
    this.ctx.fillText("BENJI SCORE: "+ this.scoreBenji, 300, 40);
};

Game.prototype._drawBallScore = function(){
  this.ctx.font = "20px Arial";
  this.ctx.fillStyle = "#000000";
  this.ctx.fillText("OLIVER SCORE: "+ this.scoreOliver, 60, 40);
};

Game.prototype._checkGoal = function() {
  if(this.ball && this.ball.positionX >= 500){
    this.scoreOliver++
    console.log("OLIVER SCORE: " + this.scoreOliver)
    this.ball = null;
    this._generateBallAfter();
  }
}

Game.prototype._generateBallAfter = function() {
  setTimeout(this._generateNewBall.bind(this), 2000);
}

Game.prototype._checkCollision = function() {
  if (this.ball.positionX + this.ball.width >= this.player.positionX &&
    this.ball.positionX <= this.player.positionX + this.player.width &&
    this.ball.positionY >= this.player.positionY &&
    this.ball.positionY + this.ball.height <= this.player.positionY + this.player.height){
    this.scoreBenji++
    this.musicGoalkeeper._play();
    this.ball = null
    this._generateBallAfter();
    console.log("BENJI SCORE: " + this.scoreBenji);
  };
};

Game.prototype._checksScores = function() {
  if(this.ball && this.scoreBenji >= 5) {
    this.music._stop();
    console.log("Congratulations you won!!! Result: Benji " + this.scoreBenji +" - Oliver " + this.scoreOliver);
    this.ball = null;
    this.callback();
  }
  if(this.ball && this.scoreOliver >= 5){
    console.log("Game Over, you lose!!! Result: Benji " + this.scoreBenji +" - Oliver " + this.scoreOliver);
    this.music._stop();
    this.ball = null;
    this.callback();
  }
}
  

Game.prototype.start = function() {
  this._assignControlsToKeys();
  this.music._play();
  this._doFrame();
  window.requestAnimationFrame(this._doFrame.bind(this));

};

Game.prototype._doFrame = function () { 
  this._drawBoard();
  this.player._draw();
  this._drawPlayerScore();
  this._drawBallScore();
  if (this.ball) {
    this.ball._drawBall();
    this.ball._drawOliver();
    this.ball._position();
    this._checkCollision();
    this._checkGoal();
    this._checksScores();
    if(this.attemps === 0){
      this.ball = null;
      this.callback();
    }
  }
  

  if (this.upPressed) { this.player.upMovement() };
  if (this.downPressed) { this.player.downMovement() };
  this.intervalID = window.requestAnimationFrame(function(){
    this._doFrame();
  }.bind(this));
};

Game.prototype._generateNewBall = function() {
  this.ball = new Ball(this.ctx,this.width,this.height);
  this.attemps = this.attemps - 1;
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
