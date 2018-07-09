
function main() {
  var gameContainer = document.getElementById("game-container")
  buildSplash()
  
  function buildSplash() {
    var btn = document.createElement("button");
    btn.innerText = "Start Game"
    gameContainer.appendChild(btn)
    btn.addEventListener("click", destroySplash)
  }

  function destroySplash() {
    var btn = document.querySelector("button")
    btn.remove();
    buildGame()    
  }

  function buildGame() {
    var canvas = document.createElement("canvas")
    canvas.setAttribute("width", "500");
    canvas.setAttribute("height", "500");
    gameContainer.appendChild(canvas)
    var ctx = canvas.getContext("2d");
    var game = new Game(ctx);
  }
  
  function destroyGame() {
    var canvas = document.querySelector("canvas")
    canvas.remove()
    buildGameOver()
  }

  function buildGameOver() {
    var btn = document.createElement("button");
    btn.innerText = "Restart Game"
    gameContainer.appendChild(btn)
    btn.addEventListener("click", destroyGameOver)
  }

  function destroyGameOver() {
    var btn = document.querySelector("button")
    btn.remove();
    buildGame();
  }
};

window.addEventListener('load', main)