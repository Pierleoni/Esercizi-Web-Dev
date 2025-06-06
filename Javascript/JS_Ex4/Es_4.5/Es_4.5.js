// Ciclo for
let out = " ";
for (let i = 0; i<=20; i = i+2){
    
    out += `${i*2}<br>`;
}
document.getElementById("cicloFor").innerHTML = out;


// ciclo while
let out2 = " ";
let cont = 2;

while (cont<=20){
    out2 += `${cont*2}+<br>`;
    cont += 2
}
document.getElementById("cicloWhile").innerHTML = out2