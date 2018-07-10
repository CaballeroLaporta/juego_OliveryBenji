function Player(ctx,canvasWidth,canvasHeight){
  this.ctx = ctx;
  this.height = 40;
  this.width = 40;
  this.positionY = canvasWidth/2 - this.width/2;
  this.positionX = canvasHeight - this.height* 3;
  this.score = 0;
}



Player.prototype._draw = function () {
  this.ctx.fillStyle="#990000";
  this.ctx.fillRect(this.positionX,this.positionY,this.width,this.height);
};


Player.prototype.upMovement = function () {
  this.positionY -=7
};

Player.prototype.downMovement = function () {
  this.positionY +=7
};
