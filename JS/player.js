function Player(ctx,canvasWidth,canvasHeight){
  this.ctx = ctx;
  this.height = 80;
  this.width = 60;
  this.positionY = canvasWidth/2 - this.width/2;
  this.positionX = canvasHeight - this.height* 1.5;
  this.image = new Image ();
  this.image.src = "img/benji.png";
 
}



Player.prototype._draw = function () {
  // this.ctx.fillStyle="#990000";
  // this.ctx.fillRect(this.positionX,this.positionY,this.width,this.height);
  this.ctx.drawImage(this.image,this.positionX,this.positionY,this.width,this.height);
};


Player.prototype.upMovement = function () {
  this.positionY -=7
};

Player.prototype.downMovement = function () {
  this.positionY +=7
};
