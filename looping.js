var i=1;
while(i<=10){
document.write(i+"</br>");
i++;
}

do{
var guess=prompt("Guess a number between 1 and 20");
}while(guess!=15)
alert("you guessed 15");

for(j=0;j<=100;j++){
  if((j%2)===0){
  continue;
}
    if(j===19){
      break;
    }
  document.write(j+"</br>")
}

var customer={name:"Bob Thomas", address:"123 Main", balance:50.50
};
for(k in customer){
document.write(customer[k]+"</br>");
}



