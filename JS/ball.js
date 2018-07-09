function Ball(ctx,canvasWidth,canvasHeight){
  this.ctx = ctx;
  this.height = 20;
  this.width = 20;
  this.positionX = canvasWidth - this.width/2;
  this.positionY = canvasHeight - this.height* 3;

}


/*Ball.prototype._position = function(){
  this.positionY -= 1 ;

};*/

Ball.prototype._drawBall = function () {
  this.ctx.fillStyle="#990000";
  this.ctx.fillRect(this.positionX,this.positionY,this.width,this.height);

};

