function BodySection(ctx, x, y) {
  this.ctx = ctx;

  this.x = x;
  this.y = y;

  this.width = 10;
  this.height = this.width;
}

BodySection.prototype.draw = function(){
  this.ctx.beginPath();
    
  this.ctx.fillStyle = "black";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
  
  this.ctx.closePath();
}

BodySection.prototype.isCollision = function(head) {
  
  if(head.x === this.x && head.y === this.y){
    console.log("------------------");
    console.log("Cuerpo X = " + this.x);
    console.log("Cuerpo Y = " + this.y);
    console.log("------------------");
    console.log("Cabeza X = " + head.x);
    console.log("Cabeza Y = " + head.y);
    console.log("------------------");
    return true;
  }
};
