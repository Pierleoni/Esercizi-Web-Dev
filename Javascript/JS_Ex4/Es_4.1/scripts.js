// con il ciclo for 
// con il ciclo for
let num1 = 2;
let output1 = "";
for (let i = 1; i <= 10; i++) {
    output1 += `${num1} x ${i} = ${num1 * i}<br>`;
}
document.getElementById("tabellina1").innerHTML = output1;

// con il ciclo while
let num2 = 6;
let cont = 1;
let output2 = "";
while (cont <= 10) {
    output2 += `${num2} x ${cont} = ${num2 * cont}<br>`;
    cont++;
}
document.getElementById("tabellina2").innerHTML = output2;
