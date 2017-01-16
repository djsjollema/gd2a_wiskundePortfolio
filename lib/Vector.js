class Vector{
    constructor(dx,dy){
        this.dx= dx;
        this.dy= dy;
    }

    magnitude(){
      return Math.sqrt(this.dx*this.dx + this.dy*this.dy);
    }

    angle(){
      return Math.atan2(this.dy,this.dx);
    }

    scalarMultiplication(scalar){
      var ans = new Vector(scalar * this.dx,scalar*this.dy);
      return ans;
    }
}
