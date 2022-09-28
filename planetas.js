let pesoUsuario;
let pesoUsuarioMarte;
let pesoUsuarioJupiter;
let nuevoPeso;
let planetaElegido;

const gravedadTierra = 9.8;
const gravedadMarte = 3.7;
const gravedadJupiter = 24.8;

pesoUsuario = parseInt(prompt("Introduce tu peso:"));
planetaElegido = parseInt(prompt("Elige el planeta:\n1.Marte\n2.Jupiter"));

switch (planetaElegido) {
    case 1:
        calcularPeso(pesoUsuario, gravedadMarte, "Marte");
        break;
    case 2:
        calcularPeso(pesoUsuario, gravedadJupiter, "Jupiter");
        break;
    default:
        break;
}

function calcularPeso(pesoUsuario, gravedadPlanetaElegido, planetaElegido) {
    nuevoPeso = (pesoUsuario * gravedadPlanetaElegido) / gravedadTierra;
    document.write(
        "Tu peso en " +
            planetaElegido +
            " es de " +
            Math.round(nuevoPeso) +
            " kilos"
    );
}