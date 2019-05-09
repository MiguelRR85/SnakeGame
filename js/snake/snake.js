function Snake (ctx){
  this.ctx = ctx;

  this.head = new Head(this.ctx);
  
  this.body = [];

  this.x = 0;
  this.y = 0;
  
  this.direction = RIGHT;
  this.length = 2;
  this.init();
}

Snake.prototype.draw = function() {
  this.head.draw();
  this.body.forEach(function(bodySection){
    bodySection.draw();
  });
}

Snake.prototype.init = function(){
  var x = 0;
  var y = 0;
  for (var i = 0; i < this.length; i++){
    this.body.push(new BodySection(this.ctx, x, y));
    x += this.head.width;
  }
  this.head.x = this.body[this.body.length - 1].x + this.head.width;
  this.head.y = this.body[this.body.length - 1].y;
}

Snake.prototype.isCollision = function() {
  return this.body.some(function(section) {
    return section.isCollision(this.head);
  }.bind(this));
}

Snake.prototype.move = function(){
  for(var i = 0; i < this.body.length - 1; i++){
    this.body[i].x = this.body[i + 1].x;
    this.body[i].y = this.body[i + 1].y;
  }
  
  this.body[this.body.length - 1].x = this.head.x;
  this.body[this.body.length - 1].y = this.head.y;
  this.head.move(this.direction);
  
  //console.log(this.body);
}


Snake.prototype.onKeyDown = function(code) {
  switch(code) {
    case TOP:
    case DOWN:
    case LEFT:
    case RIGHT:
      this.direction = code;    
      break;      
  }
};

