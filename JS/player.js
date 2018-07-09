function Player(ctx,canvasWidth,canvasHeight){
  this.ctx = ctx;
  this.height = 10;
  this.width = 75;
  this.positionX = canvasWidth/2 - this.width/2;
  this.positionY = canvasHeight - this.height * 3;

}


Player.prototype._draw = function () {
  this.ctx.fillStyle="#990000";
  this.ctx.fillRect(this.positionX,this.positionY,this.width,this.height);

};