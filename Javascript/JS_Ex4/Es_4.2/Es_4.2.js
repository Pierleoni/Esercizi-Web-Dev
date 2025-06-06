// Con il ciclo 
let num = 0;
let cont = 0;
let out1 = " ";

while (cont<=10){
    out1 += `${num++} <br>` ;
    cont ++;
}
document.getElementById("cicloWhile").innerHTML = out1

// Con il ciclo for

let num2 = 0;
let out2 = "";

for (let i= 0; num2 <= 10; i++){
    out2+= `${num2}<br>`;
    num2++
}
document.getElementById("cicloFor").innerHTML = out2