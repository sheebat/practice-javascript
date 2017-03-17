var str;
function reverseString(str){
    var temp = " ";
    for(var i = str.length-1;i >= 0;i--){
        temp += str[i];
    }
    return temp;
}
console.log(reverseString("sheeba"));

var str;
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("sheeba"));

function display(){
    var current = new Date();
    console.log(current.getHours()+ ":" +current.getMinutes()+ ":" +current.getSeconds());

}
setInterval(display,1000);

function uniqString(str){
    var str = str;
    var uniq=" ";
    for(var i = 0; i < str.length; i++){
        console.log(uniq.indexOf(str.charAt(i)));
        if(uniq.indexOf(str.charAt(i)) == -1){
            uniq +=  str[i];
            console.log(uniq);
        }
    }
    return uniq;
}
console.log(uniqString("rubber"));


var arr = [1,9,8,5,8,3,2];
var i,temp;
var len=arr.length;
for (i = 0; i <= len; i++)
{
    if (arr[i] > arr[i+1])
    {
        temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        i=i-2;
        console.log(i);
    }
}
console.log(arr);


var str;
function orderString(str){
    return str.split("").sort("str").join("");
}
console.log(orderString("ball"));
