class NumberPair {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
        console.log("np" + this.num1, this.num2)
    }
    sum() {
        return this.num1 + this.num2;
    }
    mul() {
        return this.num1 * this.num2;
    }
    div() {
        return this.num1 / this.num2;
    }
    longDivision() {
        var ans = "";
        var divident = this.num1;
        var divisor = this.num2;
        var quotient = Math.floor(divident / divisor);
        var rest = divident % divisor;
        ans += quotient + ".";
        var rests = [];
        while (rests.indexOf(rest) == -1) {
            rests.push(rest);
            divident = 10 * rest;
            quotient = Math.floor(divident / divisor);
            rest = divident % divisor;
            ans += quotient;
        }
        return ans;
    }
    gcd() {
        var ans;
        var a = this.num1;
        var b = this.num2;
        while (a != b) {
            if (a > b) {
                a -= b;
            } else {
                b -= a;
            }
        }
        ans = a;
        return ans;
    }
}

class Ratio extends NumberPair {
    constructor(num1, num2) {
        super(num1, num2);
        this.dividend = this.num1;
        this.divisor = this.num2;
    }
    add(ratio) {
        var newDivident = ratio.divisor * this.dividend + this.divisor * ratio.dividend;
        var newDivisor = this.divisor * ratio.divisor;
        var ans = new Ratio(newDivident, newDivisor);
        return ans;
    }
    simplify(){
      var ans = new Ratio(this.dividend/this.gcd(),this.divisor/this.gcd());
      return ans;
    }
}
