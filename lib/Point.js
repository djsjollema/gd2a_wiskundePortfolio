class Point {
    constructor(x, y, r, color, draggable) {
        this.x = x;
        this.y = y;
        this.r = r || 10;
        this.color = color || "#ff0000";
        this.draggable = draggable || false;
    }

    draw(context) {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        context.lineWidth = "3";
        context.stroke();
        context.fill();
        context.closePath();
    }

    drag(context) {
        var dragNow = false;
        var mouseX,mouseY,dx,dy;
        var dist;

        function getMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        };

        canvas.addEventListener('mousedown',(evt)=>{
          mouseX = getMousePos(canvas,evt).x;
          mouseY = getMousePos(canvas,evt).y;
          dx =  this.x - mouseX;
          dy =  this.y - mouseY;
          dist = function(){
            return Math.sqrt(dx*dx + dy*dy);
          }
          if(dist() <= this.r){
            dragNow = true;
          } else dragNow = false;
          console.log(mouseX,mouseY,dx,dy,dist(),this.r,dragNow);

        });


        if (this.draggable) {
            //
        }
    }
}
