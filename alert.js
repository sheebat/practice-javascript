var yourName=prompt("Whats your name?");
if (yourName!=null) {
  document.getElementById("sayHello").innerHTML="Hello " + yourName;
}else{
  alert("Please enter a name next time");
}
  
