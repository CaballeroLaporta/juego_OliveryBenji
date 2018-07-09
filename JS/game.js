
// Creación de clase Game
function Game(options) {
  this.player = options.player;
  this.ball;
  this.rows = options.rows;
  this.columns = options.columns;
  this.ctx = options.ctx;
}