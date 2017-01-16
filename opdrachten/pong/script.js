var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var ball = new Point(100,100,10,"#ffff00");
var speed = new Vector(-4,4);

setInterval(loop,10);

function loop(){
    context.clearRect(0,0,800,600)
    ball.draw(context);
    ball.x += speed.dx;
    ball.y += speed.dy;
    console.log(ball.x,ball.y);
    if(ball.x>800 || ball.x<0){
        speed.dx = - speed.dx;
    }
    if(ball.y>600 || ball.y<0){
        speed.dy = - speed.dy;
    }
}
