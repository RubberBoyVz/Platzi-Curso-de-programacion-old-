const canvasDibujoFunciones = document.getElementById("dibujo-funciones-logaritmicas");
const canvasDibujoLibreTeclas = document.getElementById("dibujo-area-libre-teclas");
const canvasDibujoLibreMouse = document.getElementById("dibujo-area-libre-mouse");
const inputEnviarLineas = document.getElementById("enviar-lineas");
const inputNumLineas = document.getElementById("num-lineas");
const inputBorrarTeclas = document.getElementById("teclas-borrar");
const inputBorrarMouse = document.getElementById("mouse-borrar");

let lienzo1 = canvasDibujoFunciones.getContext("2d");
let lienzo2 = canvasDibujoLibreTeclas.getContext("2d");
let lienzo3 = canvasDibujoLibreMouse.getContext("2d");

/* VARIABLES PARA LIENZO 2*/
let x = 250,
    y = 250,
    color = "blue",
    unidadesMovimiento = 5;

function dibujarLinea(colorElegido, xinicial, yinicial, xfinal, yfinal, lienzo, grosorLinea) {
    lienzo.beginPath();
    lienzo.strokeStyle = colorElegido;
    lienzo.lineWidth = grosorLinea;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function calcularLineas() {
    let lineas = inputNumLineas.value;
    dibujarLineas(lineas);
}

function dibujarLineas(lineas) {
    lienzo1.clearRect(0, 0, canvasDibujoFunciones.width, canvasDibujoFunciones.height);
    for (let index = 250; index < 500; index += 250 / lineas) {
        dibujarLinea("blue", 0, index, index - 240, 500, lienzo1, 2);
        dibujarLinea("blue", 500, index - 240, index, 0, lienzo1, 2);
        dibujarLinea("#551935", 500, index, 740 - index, 500, lienzo1, 2);
        dibujarLinea("#551935", 0, 500 - index, index - 240, 0, lienzo1, 2);
        dibujarLinea("green", 250, index - 250, 500 - index, 250, lienzo1, 2);
        dibujarLinea("cyan", 250, index - 250, index, 250, lienzo1, 2);
        dibujarLinea("cyan", 250, 750 - index, 500 - index, 250, lienzo1, 2);
        dibujarLinea("green", 250, 750 - index, index, 250, lienzo1, 2);
    }
}

function detectarTeclado(evento) {
    switch (evento.key) {
        case "ArrowUp":
            dibujarLinea(color, x, y, x, y - unidadesMovimiento, lienzo2, 1);
            y = y - unidadesMovimiento;
            break;
        case "ArrowDown":
            dibujarLinea(color, x, y, x, y + unidadesMovimiento, lienzo2, 1);
            y = y + unidadesMovimiento;
            break;
        case "ArrowLeft":
            dibujarLinea(color, x, y, x - unidadesMovimiento, y, lienzo2, 1);
            x = x - unidadesMovimiento;
            break;
        case "ArrowRight":
            dibujarLinea(color, x, y, x + unidadesMovimiento, y, lienzo2, 1);
            x = x + unidadesMovimiento;
            break;
        default:
            break;
    }
}

inputEnviarLineas.addEventListener("click", calcularLineas);
inputBorrarTeclas.addEventListener("click", function () {
    lienzo2.clearRect(0, 0, canvasDibujoLibreTeclas.width, canvasDibujoLibreTeclas.height);
    x = 250;
    y = 250;
});
window.addEventListener("keydown", detectarTeclado);

//dibujarLinea(color, 149, 149, 150, 150, lienzo2, 1);

