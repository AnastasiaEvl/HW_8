
"use strict"
function Alp(){

const letters = document.querySelectorAll(`article section p:nth-child(odd)`);
console.log(letters);

let s = "";

for (let i = 0; i < letters.length; i++){
    let element = letters[i];
    console.log(element);
    s += element.innerHTML;
}

result.innerHTML = s;
}


btn.addEventListener("click", Alp);



