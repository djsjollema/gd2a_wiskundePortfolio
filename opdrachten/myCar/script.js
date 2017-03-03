var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var carPosition = new Vector(0,0);
var carVelocity = new Vector(-1,0);
var frontWheelVector = new Vector(672,119);
var car = new Image();
var frontWheel = new Image();
var rearWheel = new Image();
car.src = "car.png";
frontWheel.src = "wheel.png";
rearWheel.src = "wheel.png";
var rotation = 0;

car.addEventListener('load',()=>{
  setInterval(loop,10);
})

function loop(){
  rotation += carVelocity.dx /80;
  context.clearRect(0,0,800,600)
  carPosition = carPosition.add(carVelocity);
  context.drawImage(car,carPosition.dx,carPosition.dy);
  context.save();
  context.translate(carPosition.dx+751,carPosition.dy+200);
  context.rotate(rotation);
  context.drawImage(frontWheel,-80,-80)
  context.restore();

  context.save();
  context.translate(carPosition.dx+210,carPosition.dy+200);
  context.rotate(rotation);
  context.drawImage(rearWheel,-80,-80)
  context.restore();

  if(carPosition.dx > 800){
    carPosition.dx = -car.width;
  }
  if(carPosition.dx<-car.width){
    carPosition.dx = 800;
  }
}
