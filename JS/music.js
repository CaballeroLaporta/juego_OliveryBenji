function Music(src) {
  this.music = document.createElement("audio");
  this.music.src = src;
  this.music.setAttribute("preload", "auto");
  this.music.setAttribute("controls", "none");
  this.music.style.display = "none";
    
}
Music.prototype._play = function () {
  this.music.play();
}
Music.prototype._stop = function () {
  this.music.pause();
}