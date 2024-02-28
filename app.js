const matriz = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
];

const campoTexto = document.querySelector("#ta-texto-encriptar");
const campoMensaje = document.querySelector("#ta-texto-desencriptado");
console.log(campoMensaje, campoTexto)



/**botones */
function botonencriptado(){

}

function botondesencriptar(){

}

function botoncopiar(){
navigator.clipboard.writeText(campoMensaje);
}

/** funciones varias */
function mostrartextodesencriptado(){
    document.getElementsByClassName("desencriptado")[0].style.display = "inline-block";
    document.getElementsByClassName("sndesencriptado")[0].style.display = "none";
}
