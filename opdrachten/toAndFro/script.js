var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var pointA = new Point(100,100,50,"yellow");

pointA.draw(context);
pointA.drag(canvas);
