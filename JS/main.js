
function main() {
  var gameContainer = document.getElementById("game-container");
  buildSplash();
  
  function buildSplash() {
    var text = document.createElement("h1");
    var subtext = document.createElement("h2");
    var btn = document.createElement("button");
    var howPlay = document.createElement("h3");
    var instructions = document.createElement("p");       
    text.innerText = "Oliver y Benji";
    subtext.innerText = "The last goal";
    btn.innerText = "Start Game";
    howPlay.innerText = "How to play"
    instructions.innerText = "You have to stop the ball. The best of 9 attempts wins the game. \n Press up and down keyboards to move the goalkeeper." 
    gameContainer.appendChild(text);
    gameContainer.appendChild(subtext);
    gameContainer.appendChild(btn);
    gameContainer.appendChild(howPlay);
    gameContainer.appendChild(instructions);
    btn.addEventListener("click", destroySplash);
  }

  function destroySplash() {
    var btn = document.querySelector("button");
    var howPlay = document.querySelector("h3");
    var instructions = document.querySelector("p")
    btn.remove();
    howPlay.remove();
    instructions.remove();
    buildGame();    
  }

  function buildGame() {
    var canvas = document.createElement("canvas");
    canvas.setAttribute("width", "500");
    canvas.setAttribute("height", "500");
    gameContainer.appendChild(canvas)
    var ctx = canvas.getContext("2d");
    var game = new Game(ctx, canvas, destroyGame);
    game.start();
  }
  
  function destroyGame() {
    var canvas = document.querySelector("canvas");
    canvas.remove();
    buildGameOver();
  }

  function buildGameOver() {
    var btn = document.createElement("button");
    btn.innerText = "Restart Game";
    var div = document.createElement("div");
    div.className = "game-over";
    div.innerText = "The Game is over. \n Thanks for playing!!"
    gameContainer.appendChild(div);
    
    gameContainer.appendChild(btn)
    btn.addEventListener("click", destroyGameOver)
  }

  function destroyGameOver() {
    var btn = document.querySelector("button")
    var div = document.querySelector(".game-over")
    div.remove();
    btn.remove();
    buildGame();
  }
};

window.addEventListener('load', main)