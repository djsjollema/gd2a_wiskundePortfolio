class Point{
    constructor(x,y,r,color,draggable){
        this.x = x;
        this.y = y;
        this.r = r || 10;
        this.color = color|| "#ff0000";
        this.draggable = draggable || false;
    }

    draw(context){
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x,this.y,20,0,2*Math.PI);
        context.lineWidth = "3";
        context.stroke();
        context.fill();
        context.closePath();
    }

    drag(context){
      if(this.draggable){
        //
      }
    }
}
