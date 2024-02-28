const matriz = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
];

const taEncript = document.querySelector("#ta-texto-encriptar");
const msjEncript = document.querySelector("#ta-texto-desencriptado");




/**botones */
function botonencriptado(){
    mostrartextodesencriptado();
    const texto1 = encriptar(taEncript.value);
    msjEncript.value = texto1;
    
}

function botondesencriptar(){
    const texto2 = desencriptar(taEncript.value);
    msjEncript.value = texto2;


}

function botoncopiar(){
navigator.clipboard.writeText(msjEncript.value);
}

/** funciones varias */

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
    for (let i = 0; i < matriz.length; i++) {
        if (mensajeenc.includes(matriz[i][1])) {
            mensajeenc = mensajeenc.replaceAll(
                matriz[i][1],
                matriz[i][0]
                );
        }
    }
    return mensajeenc;
}



function mostrartextodesencriptado(){
    document.getElementsByClassName("desencriptado")[0].style.display = "inline-block";
    document.getElementsByClassName("sndesencriptado")[0].style.display = "none";
}
