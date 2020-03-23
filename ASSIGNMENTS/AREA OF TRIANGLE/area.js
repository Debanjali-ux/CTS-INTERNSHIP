var side1 = document.getElementById("side1").value; 
var side2 = document.getElementById("side2").value; 
var side3 =  document.getElementById("side3").value;
var s = (Number(side1) + Number(side2) + Number(side3))/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
document.getElementById("output").innerText=area;
console.log(area);
