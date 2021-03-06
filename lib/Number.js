Number.prototype.isInteger = function(){
  var ans = false;
  if(this%1==0){
    ans = true;
  }
  return ans;
};

Number.prototype.isDivisor = function(num){
  var ans = false;
  if((this/num).isInteger()){
    ans = true;
  }
  return ans;
}

Number.prototype.divisors = function(){
  var ans = [];
  var max= this;
  for(var i=1; i<=this; i++){
    if(this.isDivisor(i)){
      ans.push(i);
    }
  }

  return ans;
}

Number.prototype.primeFactorization = function(){
     var ans = [];
    var primes = [];
    var temp = this;
    for(let i=2; i<=this/2; i++){
        if(i.divisors().length==2){
            primes.push(i)
        }
    }
    for(let i = 0; i<primes.length;i++){
        while(temp.isDivisor(primes[i])){
            ans.push(primes[i]);
            temp = temp/primes[i];
        }
    }
    return ans;
}