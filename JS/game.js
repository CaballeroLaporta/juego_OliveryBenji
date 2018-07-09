// Creación del constructor(clase)
function Game(ctx, canvas) {
  this.ctx = ctx;
  this.width = canvas.width;
  this.height = canvas.height;


  this.player = new Player(this.ctx,this.width,this.height)

  // this.ball = new Ball()
  this.doFrame()
}

//Creación del método dentro del constructor Game
Game.prototype._drawBoard = function () {
  this.ctx.fillStyle="#00EE00";
  this.ctx.fillRect(0,0,this.width,this.height);

}

Game.prototype.doFrame = function () {
  var self = this;
    this._drawBoard();
    this.player._draw();

    window.requestAnimationFrame(function(){
      self.doFrame()
    })
}