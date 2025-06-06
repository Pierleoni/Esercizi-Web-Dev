// Ciclo for
let out = " ";
for (let i = 0; i<=20; i = i+1){
    out += `${i++}<br>`;
}
document.getElementById("cicloFor").innerHTML = out;


// ciclo while
let out2 = " ";
let cont = 0

while (cont<=20){
    out2 += cont+"<br>";
    cont += 2
}
document.getElementById("cicloWhile").innerHTML = out2