function Ball(ctx,canvasWidth,canvasHeight){
  this.ctx = ctx;
  this.height = 20;
  this.width = 20;
  this.positionY = canvasWidth / 2 - this.width / 2;
  this.positionX = 40;
  this.randomMove = Math.floor(Math.random() * 7);
  this.Oliverheight = 60;
  this.OliverWidth = 45;
  this.oliverX = 5;
  this.oliverY = canvasWidth / 2 - this.OliverWidth / 2;
  this.imageball = new Image();
  this.imageball.src = "img/balon.jpg";
  this.imageOliver = new Image();
  this.imageOliver.src = "img/Oliver.png";

}


Ball.prototype._position = function(){
  //this.positionX += 10
  if (this.randomMove <1 ) {
    this.positionX += 5;
    this.positionY += -1;
  } else if(this.randomMove >=1 & this.randomMove <3) {
    this.positionX += 6;
    this.positionY += +2;
  } else if(this.randomMove >=3 & this.randomMove <5) {
    this.positionX += 6;
    this.positionY += -2;
  } else if(this.randomMove >=5 & this.randomMove <6){ 
    this.positionX += 6;
    this.positionY += +2;
  } else {
    this.positionX += 7;
  }
}
 
Ball.prototype._drawBall = function() {
  // this.ctx.fillStyle = "#990000";
  // this.ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
   this.ctx.drawImage(this.imageball,this.positionX, this.positionY, this.width, this.height)
};

Ball.prototype._drawOliver = function() {
  // this.ctx.fillStyle = "#009988";
  // this.ctx.fillRect(this.oliverX, this.oliverY, this.OliverWidth, this.Oliverheight)
  this.ctx.drawImage(this.imageOliver,this.oliverX, this.oliverY, this.OliverWidth, this.Oliverheight)
};
