var myInput = document.getElementById("myInput");
var myButton = document.getElementById("myButton");
var myImage = document.getElementById("myImage");
var aspectRatio;

var myAspectRatio = document.getElementById('myAspectRatio');
myButton.addEventListener('click',()=>{
  myImage.src = myInput.value;
  myImage.addEventListener('load',()=>{
    aspectRatio = new Ratio(myImage.width,myImage.height);
    aspectRatio = aspectRatio.simplify();
    myAspectRatio.innerHTML = aspectRatio.dividend + ":" + aspectRatio.divisor;


  })
})
