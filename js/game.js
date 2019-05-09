function Game(canvasElement){
  this.ctx = canvasElement.getContext('2d');

  this.snake = new Snake(this.ctx);
  this.fruit = new Fruits(this.ctx);
  this.fps = 7;

  this.score = 0;
  
  this.setKeyboardListeners();

  this.img = new Image();
  this.img.src = "img/game_over.jpg";
  this.seconds = 0;

  this.strawberrySeconds = 0;
  this.wallSeconds = 0;
}

Game.prototype.start = function() {
  
  if (!this.drawIntervalId) {
    
    this.drawIntervalId = setInterval(function() {
      this.fruit.randomCoords();
      this.fruit.generateOrange();
      this.clean();
      this.drawAll();
      this.moveAll();
      this.orangeCollision();
      this.strawberryCollision();
      this.wallCollision();
      this.checkGameOver();
    }.bind(this), 1000 / this.fps);
  }
  this.drawIntervalId2 = setInterval(function() {
      
    this.seconds++;

    if(this.fruit.takeStrawberry === true && this.seconds === this.strawberrySeconds + 15){
      this.fruit.kindFruits[1].coordX = -10;
      this.fruit.kindFruits[1].coordY = -10;
    }

    if(this.seconds === this.wallSeconds + 15){
      this.fruit.kindFruits[2].coordX = -10;
      this.fruit.kindFruits[2].coordY = -10;
    }
  }.bind(this), 1000);

  this.drawIntervalId3 = setInterval(function() {

    this.strawberrySeconds = this.seconds;
    this.fruit.generateStrawberry();
    //console.log(seconds)

  }.bind(this), 40000);

  this.drawIntervalId4 = setInterval(function() {

    this.wallSeconds = this.seconds;
    this.fruit.generateWall();

  }.bind(this), 60000);

};

Game.prototype.clean = function() {
  this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);  
}

Game.prototype.gameOver = function(){
  clearInterval(this.drawIntervalId);
  setInterval(function(){
    this.ctx.drawImage(
      this.img,
      0,
      0,
    );
    document.getElementById('gameOver').style.display = "block";
    var button = document.getElementById('gameOver');
    button.onclick = function() {
      location.reload();
    }
  }.bind(this), 500);
  

  
};

Game.prototype.checkGameOver = function(){
  if (this.snake.isCollision()) {
    this.gameOver();
  }
};

Game.prototype.drawAll = function(action){
  this.snake.draw();
  this.fruit.draw();
};

Game.prototype.moveAll = function(action){
  this.snake.move();
};

Game.prototype.setKeyboardListeners = function() {
  document.onkeydown = function(event) {
    this.snake.onKeyDown(event.keyCode);
  }.bind(this);

};

Game.prototype.orangeCollision = function(){
  if(this.snake.head.x === this.fruit.kindFruits[0].coordX && this.snake.head.y === this.fruit.kindFruits[0].coordY){   
    this.fruit.kindFruits[0].coordX = -10;
    this.fruit.kindFruits[0].coordY = -10;

    var x = this.snake.body[this.snake.body.length -1].x;
    var y = this.snake.body[this.snake.body.length -1].y;

    this.snake.body.push(new BodySection(this.ctx, x, y));
    x += this.snake.head.width;

    this.score += 10;
  }  

 document.getElementById('score').innerText = "Score: " + this.score + " points";

}

Game.prototype.strawberryCollision = function(){
  if(this.snake.head.x === this.fruit.kindFruits[1].coordX && this.snake.head.y === this.fruit.kindFruits[1].coordY){   
    this.fruit.kindFruits[1].coordX = -10;
    this.fruit.kindFruits[1].coordY = -10;

    this.score -= 30;
  }  
  
 document.getElementById('score').innerText = "Score: " + this.score + " points";

}

Game.prototype.wallCollision = function(){
  if(this.snake.head.x === this.fruit.kindFruits[2].coordX && this.snake.head.y === this.fruit.kindFruits[2].coordY){   
    this.gameOver();
  }  
}
