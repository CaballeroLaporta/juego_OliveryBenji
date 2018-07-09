// Creación del constructor(clase)
function Game(ctx) {
  this.player = new Player()
  this.ball = new Ball()
  this.rows = 50;
  this.columns = 50;
  this.ctx = ctx;
  this.doFrame()
}

//Creación del método dentro del constructor Game
Game.prototype._drawBoard = function () {
  for (var columnIndex = 0; columnIndex < this.columns; columnIndex++) {
    for (var rowIndex = 0; rowIndex < this.rows; rowIndex++) {
      this.ctx.fillStyle = "#E3D4AB";
      this.ctx.fillRect(columnIndex * 10, rowIndex * 10, 10, 10);
    }
  }
}

Game.prototype.doFrame = function () {
    this._drawBoard();
}