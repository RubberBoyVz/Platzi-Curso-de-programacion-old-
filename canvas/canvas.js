/* CONSTANTES DE LOS 3 CANVAS */
const canvasDibujoFunciones = document.getElementById("dibujo-funciones-logaritmicas");
const canvasDibujoLibreTeclas = document.getElementById("dibujo-area-libre-teclas");
const canvasDibujoLibreMouse = document.getElementById("dibujo-area-libre-mouse");

/* CONSTANTES DE LOS INPUTS CANVAS 1 */
const inputNumLineas = document.getElementById("num-lineas");
const inputEnviarLineas = document.getElementById("enviar-lineas");

/* CONSTANTES DE LOS INPUTS CANVAS 2 */
const inputBorrarTeclas = document.getElementById("teclas-borrar");
const inputColorCanvas2 = document.getElementById("color-canvas2");

/* CONSTANTES DE LOS INPUTS CANVAS 3 */
const inputBorrarMouse = document.getElementById("mouse-borrar");
const inputColorCanvas3 = document.getElementById("color-canvas3");

/* VARIABLES DE LOS 3 LIENZOS */
let lienzo1 = canvasDibujoFunciones.getContext("2d");
let lienzo2 = canvasDibujoLibreTeclas.getContext("2d");
let lienzo3 = canvasDibujoLibreMouse.getContext("2d");

/* VARIABLES PARA LIENZO 2 Y LIENZO 3*/
let x = 250,
    y = 250,
    unidadesMovimiento = 5,
    xMouse = 250,
    yMouse = 250;

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
    if (lineas > 0) {
        for (let index = 250; index < 500; index += 250 / lineas) {
            dibujarLinea("blue", 0, index, index - 240, 500, lienzo1, 1);
            dibujarLinea("blue", 500, index - 240, index, 0, lienzo1, 1);
            dibujarLinea("#551935", 500, index, 740 - index, 500, lienzo1, 1);
            dibujarLinea("#551935", 0, 500 - index, index - 240, 0, lienzo1, 1);
            dibujarLinea("green", 250, index - 250, 500 - index, 250, lienzo1, 1);
            dibujarLinea("cyan", 250, index - 250, index, 250, lienzo1, 1);
            dibujarLinea("cyan", 250, 750 - index, 500 - index, 250, lienzo1, 1);
            dibujarLinea("green", 250, 750 - index, index, 250, lienzo1, 1);
        }
    }
}

function detectarTeclado(evento) {
    switch (evento.key) {
        case "ArrowUp":
            dibujarLinea(inputColorCanvas2.value, x, y, x, y - unidadesMovimiento, lienzo2, 3);
            y = y - unidadesMovimiento;
            break;
        case "ArrowDown":
            dibujarLinea(inputColorCanvas2.value, x, y, x, y + unidadesMovimiento, lienzo2, 3);
            y = y + unidadesMovimiento;
            break;
        case "ArrowLeft":
            dibujarLinea(inputColorCanvas2.value, x, y, x - unidadesMovimiento, y, lienzo2, 3);
            x = x - unidadesMovimiento;
            break;
        case "ArrowRight":
            dibujarLinea(inputColorCanvas2.value, x, y, x + unidadesMovimiento, y, lienzo2, 3);
            x = x + unidadesMovimiento;
            break;
        default:
            break;
    }
}

function moverMouse(evento) {
    if (evento.buttons == 1) {
        console.log(evento);
        dibujarLinea(inputColorCanvas3.value, xMouse, yMouse, evento.offsetX, evento.offsetY, lienzo3, 3);
    }
    xMouse = evento.offsetX;
    yMouse = evento.offsetY;
}

inputEnviarLineas.addEventListener("click", calcularLineas);
inputBorrarTeclas.addEventListener("click", function () {
    lienzo2.clearRect(0, 0, canvasDibujoLibreTeclas.width, canvasDibujoLibreTeclas.height);
    x = 250;
    y = 250;
});

inputBorrarMouse.addEventListener("click", function () {
    lienzo3.clearRect(0, 0, canvasDibujoLibreMouse.width, canvasDibujoLibreMouse.height);
});
window.addEventListener("keydown", detectarTeclado);
canvasDibujoLibreMouse.addEventListener("mousemove", moverMouse);
