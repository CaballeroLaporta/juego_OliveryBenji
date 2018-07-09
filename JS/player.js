function Player(ctx,canvasWidth,canvasHeight){
  this.ctx = ctx;
  this.height = 40;
  this.width = 40;
  this.positionY = canvasWidth/2 - this.width/2;
  this.positionX = canvasHeight - this.height* 3;
  
  

}


// Player.prototype._position = function(){
//   this.positionY -= 1 ;

// };

Player.prototype._draw = function () {
  this.ctx.fillStyle="#990000";
  this.ctx.fillRect(this.positionX,this.positionY,this.width,this.height);

};


Player.prototype.upMovement = function () {
  console.log('up');
  
    this.positionY -=7
 
  };

Player.prototype.downMovement = function () {
  console.log('down');
  this.positionY +=7
};





//window.addEventListener("keydown", keyDownHandler.bind(this));
//document.addEventListener("keyup", keyUpHandler);

// function keyDownHandler(e) {
//     if(e.keyCode == 39) {
//         this.rightPressed = true;
//     }
//     else if(e.keyCode == 37) {
//         this.leftPressed = true;
//     }
// }
// function keyUpHandler(e) {
//     if(e.keyCode == 39) {
//         this.rightPressed = false;
//     }
//     else if(e.keyCode == 37) {
//         this.leftPressed = false;
//     }
// }
