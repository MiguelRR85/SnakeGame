function Fruits(ctx){
  
  this.ctx = ctx;

  this.x = 0;
  this.y = 0;

  this.w =10;
  this.h = 10;

  //números del 1 al 40.
  this.numbers = [];
  this.typeFruits = ["Orange","Strawberry","Wall"];
  
  //Esto lo hago junto a this.numbers y el bucle for de generateFruits() para calcular un número aleatorio entre 10 y 400, para que sea múltiplo de 10.
  this.numLength = this.ctx.canvas.width / 10;

  
  
  this.kindFruits = [
    {fruitName: "Orange", coordX: -10, coordY: -10},
    {fruitName: "Strawberry", coordX: -10, coordY: -10},
    {fruitName: "Wall", coordX: -10, coordY: -10}
  ];
  console.log(this.kindFruits);

  this.takeStrawberry = false;
}
Fruits.prototype.randomCoords = function(){
  this.numbers = [];
  for(var i = 1; i<=this.numLength; i++){
    this.numbers.push(i);
  }
  this.x = Math.floor(Math.random() * this.numbers.length) * 10;
  this.y = Math.floor(Math.random() * this.numbers.length) * 10;
  
  return [this.y, this.x];
}

Fruits.prototype.generateOrange = function(){
  if(this.kindFruits[0].coordX < 0 && this.kindFruits[0].coordY < 0){
    var coords = this.randomCoords();
    this.kindFruits[0].coordX = coords[0];
    this.kindFruits[0].coordY = coords[1];
  }
}

Fruits.prototype.generateStrawberry = function(){
  if(this.kindFruits[1].coordX < 0 && this.kindFruits[1].coordY < 0){
    this.takeStrawberry = true;
    var coords = this.randomCoords();
    this.kindFruits[1].coordX = coords[0];
    this.kindFruits[1].coordY = coords[1];
  }
}

Fruits.prototype.generateWall = function(){
  if(this.kindFruits[2].coordX < 0 && this.kindFruits[2].coordY < 0){
    var coords = this.randomCoords();
    this.kindFruits[2].coordX = coords[0];
    this.kindFruits[2].coordY = coords[1];
  }
}

Fruits.prototype.draw = function() {
  for(var i = 0; i < this.kindFruits.length; i++){
    if(this.kindFruits[i].fruitName === "Orange"){

      this.ctx.beginPath();
      this.ctx.fillStyle = "orange";
      this.ctx.fillRect(this.kindFruits[0].coordX, this.kindFruits[0].coordY, this.w, this.h); 
      this.ctx.closePath();

    }else if(this.kindFruits[i].fruitName === "Strawberry"){

      this.ctx.beginPath();
      this.ctx.fillStyle = "purple";
      this.ctx.fillRect(this.kindFruits[1].coordX, this.kindFruits[1].coordY, this.w, this.h); 
      this.ctx.closePath();

    }else if(this.kindFruits[i].fruitName === "Wall"){

      this.ctx.beginPath();
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(this.kindFruits[2].coordX, this.kindFruits[2].coordY, this.w, this.h); 
      this.ctx.closePath();
      
    }
  }
  // if(this.kindFruits.){

  // }
  
  
}



