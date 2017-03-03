class Grid{
  constructor(width,height,dx,dy,modX,modY){
    this.width = width;
    this.height = height;
    this.dx = dx;
    this.dy = dy;
    this.modX = modX;
    this.modY = modY;
  }

  draw(context){
    for(let y = 0; y<this.heigth; y += this.dy){
      //context.beginPath();
      context.moveTo(0,y);
      context.lineTo(this.width,y);
      context.stroke();
      //context.closePath();
      console.log(0,y,"--",this.width,y)
    }
  }
}
