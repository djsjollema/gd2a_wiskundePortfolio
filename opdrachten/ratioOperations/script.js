var firstRatioDivisor,firstRatioDividend,secondRatioDivisor,secondRatioDividend;
var calc = document.getElementById('calc');
var a,b;
var answerDividend = document.getElementById('answerDividend');
var answerDivisor = document.getElementById('answerDivisor');

calc.addEventListener('click',()=>{
  firstRatioDividend = document.getElementById('firstRatioDividend').value;
  firstRatioDivisor = document.getElementById('firstRatioDivisor').value;
  secondRatioDividend = document.getElementById('secondRatioDividend').value;
  secondRatioDivisor = document.getElementById('secondRatioDivisor').value;

  var a = new Ratio (firstRatioDividend,firstRatioDivisor);
  var b = new Ratio (secondRatioDividend,secondRatioDivisor);
  var c = a.add(b);

  answerDividend.value = c.dividend;
  answerDivisor.value = c.divisor;

})
