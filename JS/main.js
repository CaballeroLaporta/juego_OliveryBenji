
function main() {
  var gameContainer = document.getElementById("game-container");
  buildSplash();
  
  function buildSplash() {
    var btn = document.createElement("button");
    var text = document.createElement("h1");
    var subtext = document.createElement("h2");
    text.innerText = "Oliver y Benji";
    subtext.innerText = "The last goal";
    btn.innerText = "Start Game";
    gameContainer.appendChild(text);
    gameContainer.appendChild(subtext);
    gameContainer.appendChild(btn);
    btn.addEventListener("click", destroySplash);
  }

  function destroySplash() {
    var btn = document.querySelector("button")
    btn.remove();
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
    div.innerText = "Game Over"
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