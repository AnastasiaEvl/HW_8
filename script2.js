"use strict"

function allText(){

let section = document.querySelectorAll("section");


let s = "";

for (let i = 0; i < section.length; i++){
    let value = section[i].getElementsByTagName("p");
    console.log(value);

    for(let k = 0; k < value.length; k++){
        let final = value[k].innerHTML;
        console.log(final);
        s += final;
    }
}
rslt.innerHTML = s;
}

btn.addEventListener("click", allText);

