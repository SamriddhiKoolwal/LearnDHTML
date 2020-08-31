const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
document.querySelector('button').onclick=function(){
  prompt("what is ur name?");
  var patt1 = /[a-h]/g;
  var result = str.match(patt1);
  document.getElementById("demo").innerHTML = result;
}
let variable1=5;
let variable2="sam";
console.log(variable1);
console.log(variable2);
var arr=[1,2,3,4,5];
arr[3].toString();
document.getElementById('name').innerHTML=arr[3].toString();
var x=85+80+89+89;
document.getElementById('marks').innerHTML=x;
document.getElementById('marks2').innerHTML=x/4;
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));


console.log(multiply(5));

const c=Math.pow(45,10);
document.getElementById('po').innerHTML=c;
document.getElementById('sq').innerHTML=Math.sqrt(64);
document.getElementById('ab').innerHTML=Math.abs(-4.7);
document.getElementById('ce').innerHTML=Math.ceil(5.5);
document.getElementById('fl').innerHTML=Math.floor(4.7);
document.getElementById("ra").innerHTML = Math.random();

document.getElementById("cos").innerHTML = Math.cos(0 * Math.PI / 180);
