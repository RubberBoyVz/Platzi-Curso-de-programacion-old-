const canvasVilla = document.getElementById("villa");
const lienzoVilla = canvasVilla.getContext("2d");

const movimiento = 10;
let x = 210;
let y = 210;

let mapa = {
    url: "tile.png",
    cargaOK: false,
};

let vaca = {
    url: "vaca.png",
    cargaOK: false,
};

let cerdo = {
    url: "cerdo.png",
    cargaOK: false,
};

let pollo = {
    url: "pollo.png",
    cargaOK: false,
};

let cantidadVacas = aleatorio(1, 10);
let cantidadCerdos = aleatorio(1, 1);
let cantidadPollos = aleatorio(1, 10);

mapa.imagen = new Image();
vaca.imagen = new Image();
cerdo.imagen = new Image();
pollo.imagen = new Image();

mapa.imagen.src = mapa.url;
vaca.imagen.src = vaca.url;
cerdo.imagen.src = cerdo.url;
pollo.imagen.src = pollo.url;

mapa.imagen.addEventListener("load", cargarMapa);
cerdo.imagen.addEventListener("load", cargarCerdos);
pollo.imagen.addEventListener("load", cargarPollos);
vaca.imagen.addEventListener("load", cargarVacas);
document.addEventListener("keydown", moverCerdo);

function cargarMapa() {
    mapa.cargaOK = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos() {
    cerdo.cargaOK = true;
    dibujar();
}

function cargarPollos() {
    pollo.cargaOK = true;
    dibujar();
}

function dibujar() {
    if (mapa.cargaOK) {
        lienzoVilla.drawImage(mapa.imagen, 0, 0);
    }

    if (vaca.cargaOK) {
        for (let index = 0; index < cantidadVacas; index++) {
            let x = aleatorio(0, 7);
            let y = aleatorio(0, 7);
            lienzoVilla.drawImage(vaca.imagen, x * 60, y * 60);
        }
    }

    if (pollo.cargaOK) {
        for (let index = 0; index < cantidadPollos; index++) {
            let x = aleatorio(0, 7);
            let y = aleatorio(0, 7);
            lienzoVilla.drawImage(pollo.imagen, x * 60, y * 60);
        }
    }

    if (cerdo.cargaOK) {
        for (let index = 0; index < cantidadCerdos; index++) {
            lienzoVilla.drawImage(cerdo.imagen, x, y);
        }
    }
}

function moverCerdo(evento) {
    switch (evento.key) {
        case "ArrowUp":
            y = y - movimiento;
            if (y < -40) {
                y = 500;
            }
            dibujar();
            break;
        case "ArrowDown":
            y = y + movimiento;
            if (y > 500) {
                y = 0;
            }
            dibujar();
            break;
        case "ArrowLeft":
            x = x - movimiento;
            if (x < -40) {
                x = 500;
            }
            dibujar();
            break;
        case "ArrowRight":
            x = x + movimiento;
            if (x > 500) {
                x = 0;
            }
            dibujar();
            break;

        default:
            break;
    }
}

function aleatorio(min, max) {
    resultado = Math.floor((max - min + 1) * Math.random()) + min;
    return resultado;
}
