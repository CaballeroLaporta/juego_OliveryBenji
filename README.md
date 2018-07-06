# OLIVER Y BENJI GAME

## Descripción

### Juego de futbol donde oliver(maquina) tiene que tirar balones y meter gol a Benji (player) que tiene que pararlos.



## MVP - Técnología


### Los balones se desplazan de la parte superior de la pantalla de forma random y van cayendo de forma vertical.

### El player puede moverse de derecha a izquierda.

###  Si el player para el balón, acaba el partido (ganas)

###  Si el player no coge el balón se acaba el partido (pierdes)


## Backlog

- Si el player para el balón (colisión), se le suma un punto.

- Si el player no suma un numero de puntos en un tiempo determinado, pierda la partida.

- Los balones caigan a velocidad diferente

- Los balones pueden seguir trayectoria diagonal.

- Poner musica de Oliver y Benji

- Poner musica de colisión.


## Estructura de Datos

### Ficheros
- index.html
- js
  - main.js
- css

#### main.js
 // States y states transitions ( metodos)
* destroySplash()
* buildGame()
* destroyGame()

### Clases

#### game.js
```javascript
* this.player
* this.balls (un array de instacias )
* this.score
* this.isEnded
* this.callback

* Game.prototype._doFrame = function ()
* Game.prototype._drawBoard = function ()
* Game.prototype._drawBalls = function ()
* Game.prototype._drawPlayer = function ()
* Game.prototype.start = function()
* Game.prototype._assignControlsToKeys = function ()
* Game.prototype._generateBalls = function ()
* Game.prototype.start = function()
* Game.prototype._update = function ()
* Game.prototype.stop = function ()
* Game.prototype.checkCollision = function ()
```



#### Player.js
```javascript
* this.position
* this.size

* Player.prototype.move = function ()
```

#### balls.js

```javascript
* this.position
* this.size

* Balls.prototype.move = function ()
* Balls.prototype.stop = function ()
```

## Tasks

1. Draw Board 
2. Draw Player
3. Left-right player Move
4. Draw ball
5. Vertical top-down ball Move
6. Check collision
7. Score 
8. Start screen
9. Game Over screen
10.Interconnet screens



