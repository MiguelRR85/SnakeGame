function Head(ctx) {
  this.ctx = ctx;

  this.x = 0;
  this.y = 0;

  this.width = 10;
  this.height = 10;
  this.v = 10;
  
  this.headPos = [];
  this.directionH = 'RIGHT';

};

Head.prototype.move = function(direction) {
  switch(direction) {
    case TOP:  
      if(this.directionH !== "DOWN" && this.y > 0){
        this.y -= this.v;
        this.directionH = "TOP";
      } else {
        this.y += this.v
      }
      break;
    case DOWN:
      if(this.directionH !== "TOP" && this.y < this.ctx.canvas.height - 10){
        this.y += this.v;
        this.directionH = "DOWN";
      } else {
        this.y -= this.v
      }
      break;
    case RIGHT:
      if(this.directionH !== "LEFT" && this.x < this.ctx.canvas.width - 10){
        this.x += this.v;
        this.directionH = "RIGHT";
      } else {
        this.x -= this.v
      }
      break;
    case LEFT:
      if(this.directionH !== "RIGHT" && this.x > 0){
        this.x -= this.v;
        this.directionH = "LEFT";
      } else {
        this.x += this.v
      }
      break;
  }
}
            
Head.prototype.draw = function() {
  this.ctx.beginPath();
  this.ctx.fillStyle = "white";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
                
  this.ctx.closePath();
};
              
              
              
              