"use strict"
function style(){

let text = document.querySelectorAll("section p:nth-child(odd)");
let text2 = document.querySelectorAll("section p:nth-child(even)");

for (let elem of text){
elem.style.border = "2px solid red";
elem.style.backgroundColor = "pink";
elem.style.fontFamily = "Franklin Gothic Medium";
elem.style.fontSize = "20px";
elem.style.color = "white";
}

for (let elem2 of text2){
    elem2.style.border = "2px solid blue";
    elem2.style.backgroundColor = "yellow";
    elem2.style.fontFamily = "sans-serif";
    elem2.style.fontSize = "15px";
    elem2.style.color = "green";
}
}

btn.addEventListener("click", style);