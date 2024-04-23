
let intentos = 6;
let lista = ["BARCO", "COBRA", "BARCA", "CARGA", "COFRE", "CABRA"]

let posicion = Math.floor(Math.random() * lista.length);

let palabra = lista[posicion];
console.log(palabra);

const INPUT = document.getElementById("guess-input");
const BUTTON = document.getElementById("guess-button");

BUTTON.addEventListener("click", intentar);

function intentar() {
const intento = leerIntento();
console.log(intento);
const GRID = document.getElementById("grid");
const ROW = document.createElement("div");
ROW.className = "row";
for(let pos in palabra) {
    const SPAN = document.createElement("span")
    SPAN.className = "letter";



if(intento[pos] === palabra[pos]){
    SPAN.innerHTML = intento[pos];
    console.log(intento[pos], "verde");
SPAN.style.backgroundColor = "#79b851";

}else if(palabra.includes(intento[pos])) {
    SPAN.innerHTML = intento[pos];
    console.log(intento[pos], "amarillo");
    SPAN.style.backgroundColor = "#f3c237";

}else {
    SPAN.innerHTML = intento[pos];
    console.log(intento[pos], "gris");
    SPAN.style.backgroundColor = "#a4aeca";
}
ROW.appendChild(SPAN)

} 
GRID.appendChild(ROW);
GRID.appendChild(ROW);
intentos--;
console.log("te quedan" + intentos);
if(intento === palabra) {
    terminar ("<h1>GANASTE!</h1>")
} 
if(intentos == 0) {
    terminar("<h1>PERDISTE</h1>");
}
} 
function leerIntento() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    console.log("leerIntento" + intento);
    return intento;
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
}