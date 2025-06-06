// Con il ciclo 
let num = 5;
let cont = 0;
let out1 = " ";

while (num<=15){
    out1 += `${num} <br>` ;
    num ++;
}
document.getElementById("cicloWhile").innerHTML = out1

// Con il ciclo for


let out2 = "";

for (let num2= 0; num2 <= 15; num2++){
    out2+= `${num2}<br>`;
}
document.getElementById("cicloFor").innerHTML = out2