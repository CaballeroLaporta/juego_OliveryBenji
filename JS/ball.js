function Ball(ctx,canvasWidth,canvasHeight){
  this.ctx = ctx;
  this.height = 20;
  this.width = 20;
  this.positionY = canvasWidth / 2 - this.width / 2;
  this.positionX = 40;
  this.randomMove = Math.floor(Math.random() * 10);

}
//column: Math.floor(Math.random() * this.columns),

Ball.prototype._position = function(){
  //this.positionX += 10
  if (this.randomMove <2 ) {
    this.positionX += 7;
    this.positionY += -3;
  } else if (this.randomMove >=3 & this.randomMove <=5) {
    this.positionX += 8;
    this.positionY += +4;
  } else {
    this.positionX += 8;
  };
};

Ball.prototype._drawBall = function() {
  this.ctx.fillStyle = "#990000";
  this.ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
};
