window.onload = function() {
  var canvas = document.createElement("canvas");

  canvas.width = 400;
  canvas.height = 400;
  canvas.id = "canvas";
  
  var div = document.getElementById("snake");
  
  div.prepend(canvas);
  var button = document.getElementById("start-btn");
  var start = false;

  button.onclick = function(){
    if(start === false){
      new Game(canvas).start();
      button.style.display = "none";
    }
    
    
  };
  
  
  
};