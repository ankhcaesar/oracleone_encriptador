const taEncript = document.querySelector("#ta-texto-encriptar");
const msjEncript = document.querySelector("#ta-texto-desencriptado");

const matriz = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
];

/**botones */
function botonencriptado() {
    mostrartextodesencriptado();
    const texto1 = encriptar(taEncript.value);
    msjEncript.value = texto1;
    limpiarTa();
}

function botondesencriptar() {
    const texto2 = desencriptar(taEncript.value);
    msjEncript.value = texto2;
    limpiarTa();

}

function botoncopiar() {
    navigator.clipboard.writeText(msjEncript.value);
    limpiarTa();
}

/** funciones varias */
function limpiarTa() {
    document.getElementById("ta-texto-encriptar").value = ""
}

function encriptar(mensajeDesen) {
    for (let i = 0; i < matriz.length; i++) {
        if (mensajeDesen.includes(matriz[i][0])) {
            mensajeDesen = mensajeDesen.replaceAll(
                matriz[i][0],
                matriz[i][1]
            );
        }
    }
    return mensajeDesen;
}

function desencriptar(mensajeenc) {
    for (let i = (matriz.length) - 1; i >= 0; i--) {
        if (mensajeenc.includes(matriz[i][1])) {
            mensajeenc = mensajeenc.replaceAll(
                matriz[i][1],
                matriz[i][0]
            );
        }
    }
    return mensajeenc;
}

function mostrartextodesencriptado() {
    document.getElementsByClassName("texto-desencriptar")[0].style.display = "inline-block";
    document.getElementsByClassName("botones-copiar")[0].style.display = "inline-block";
    document.getElementsByClassName("caja-sintexto")[0].style.display = "none";
}

function verifminytilde(elemento) {
    elemento.value = elemento.value.toLowerCase().replace(/[^a-z]/g, ' ');
}
