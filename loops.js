
FOR-IF-LOOP
var x=" ";
var i;
for(i=1;i<10;i++){
if (i===3){break;}
  x=x+"<h"+i+"/>Heading"+i+"</h"+i+">";
}
document.write(x);

-------------------
DO-WHILE LOOP
var x=" ";
i=1;

do{
  x=x+"<h"+i+"/>Heading"+i+"</h"+i+">";
  i++
}
while(i<=6);
document.write(x);
------------------------------------------
WHILE LOOP
var x=" ";
i=1;

while(i<=6){
  x=x+"<h"+i+"/>Heading"+i+"</h"+i+">";
  i++
}
document.write(x);
-------------------------------------
FOR LOOP
var x=" ";
for(i=1;i<=6;i++){
  x=x+"<h"+i+"/>Heading"+i+"</h"+i+">";
  
}
document.write(x);
------------------------------------

var x=" ";
for(i=0;i<5;i++){
  x = x + "The number is " +i +"<br/>";
}
document.write(x + "<br/>");
-------------------------------------------
  FOR IN LOOPS
  var txt=" ";
var person={fname:"John", lname:"Doe",age:25};
var x;
for(x in person){
  txt += person[x]+" ";
}
document.write(txt + "<br/>");
