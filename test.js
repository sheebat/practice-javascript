var ourList=document.getElementById("our-list");
var button=document.getElementById("our-button");
var ourHeadline=document.getElementById("our-headline");

var listItems=document.getElementById("our-list").getElementByTagName("li");
for(i=0;i<listItems.length; i++){

    listItems[i].addEventListener("click", activateItem);
}
function activateItem(){

    ourHeadline.innerHTML=this.innerHTML;
}
ourButton.addEventListener("click",createNewItem);
function createNewItem(){
    ourList.innerHTML+="<li>Something New"+newItemCounter+"<li>";

}
