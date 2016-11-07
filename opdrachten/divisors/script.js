var myDiv = document.getElementById("myDiv");

var myNumbers = [];
var maxNumber = 1000;

for (let i=1; i<=maxNumber; i++){
    var row = [];
    row.push(i);
    row.push(i.divisors());
    row.push(i.divisors().length);
    myNumbers.push(row);
}

myNumbers.sort(function(a,b){
    return b[2]-a[2];
})

var myTable = document.createElement('table');
myTable.border = 1;
myTable.cellPadding = 4;

for(let i=0; i<maxNumber; i++){
    let myRow = myTable.insertRow();
    myRow.insertCell().innerHTML= myNumbers[i][0];
    myRow.insertCell().innerHTML= myNumbers[i][1];
    myRow.insertCell().innerHTML= myNumbers[i][2];
}

myDiv.appendChild(myTable);