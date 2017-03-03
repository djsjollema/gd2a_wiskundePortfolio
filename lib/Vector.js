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

    add(vector){
      var ans = new Vector(this.dx+vector.dx,this.dy+vector.dy);
      return ans;
    }

    substract(vector){
      var ans = new Vector(this.dx-vector.dx,this.dy-vector.dy);
      return ans;
    }

    normalize(){
      var magnitude = this.magnitude();
      this.dx = this.dx/magnitude;
      this.dy = this.dy/magnitude;
    }
}
