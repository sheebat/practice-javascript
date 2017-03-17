
function times2(theArray){
var newArray=[];
for(i=0;i<theArray.length;i++){
newArray.push(theArray[i]*2);
}
return newArray;
}
document.write("Array Double=", times2([1,2,3,4,5,6,7,9]).toString(), "<br/>");

