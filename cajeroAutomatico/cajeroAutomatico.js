class Billete {
    constructor(valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
    }
}

const inputDineroIngresado = document.getElementById("dinero-ingresado");
const inputbuttonRetirar = document.getElementById("boton-retirar");
let divBilletes = document.getElementById("billetes");
let pRetiroMaximo = document.getElementById("retiro-maximo");

let cantidadSolicitada;
let cantidadDisponible = 0;
let div;
let cantidadBilletes;
let entregado;
let cajeroAutomatico = [];

cajeroAutomatico.push(new Billete(50, 3));
cajeroAutomatico.push(new Billete(20, 5));
cajeroAutomatico.push(new Billete(10, 10));

revisarDisponible();
inputbuttonRetirar.addEventListener("click", leerDinero);

function leerDinero() {
    cantidadSolicitada = inputDineroIngresado.value;
    revisarBilletes(cantidadSolicitada);
}

function revisarBilletes(cantidadSolicitada) {
    entregado = [];
    for (let x of cajeroAutomatico) {
        if (cantidadSolicitada > 0) {
            div = Math.floor(cantidadSolicitada / x.valor);

            if (div > x.cantidad) {
                cantidadBilletes = x.cantidad;
            } else {
                cantidadBilletes = div;
            }

            if (cantidadBilletes > 0) {
                entregado.push(new Billete(x.valor, cantidadBilletes));
                cantidadSolicitada -= x.valor * cantidadBilletes;
            }
        }
    }

    crearMensaje(cantidadSolicitada);
}

function crearMensaje(cantidadSolicitada) {
    divBilletes.innerHTML = "";

    if (cantidadSolicitada > 0) {
        let parrafoBillete = document.createElement("p");
        parrafoBillete.innerHTML = "No puedo darte la cantidad solicitada";
        divBilletes.appendChild(parrafoBillete);
    } else {
        for (let x of entregado) {
            let parrafoBillete = document.createElement("p");
            parrafoBillete.innerHTML = "Billete: " + x.valor + " | Cantidad: " + x.cantidad;
            divBilletes.appendChild(parrafoBillete);
        }
    }
}

function revisarDisponible() {
    for (let x of cajeroAutomatico) {
        cantidadDisponible += x.cantidad * x.valor;
    }

    pRetiroMaximo.innerHTML += cantidadDisponible;
}
