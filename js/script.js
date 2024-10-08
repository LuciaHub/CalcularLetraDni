let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let numeroDni = document.querySelector("#dni");
let botonCalcular = document.querySelector("#calcularLetra");
let divLetra = document.querySelector(".resultado")
let resto;


function CalcularLetraDni() {
    numeroDni = document.querySelector("#dni").value;
    resto = numeroDni % 23;
    divLetra.innerHTML = letras[resto];
}

botonCalcular.addEventListener("click", CalcularLetraDni);s