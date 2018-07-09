

$(document).ready(function(){
  var game;

  var canvas = document.getElementById("footballboard");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.rect(20, 40, 50, 50);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();


  game = new Game({
  
  });
  game.start();

})