const textArea=document.querySelector(".textoUsuario");
const mensaje=document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado=encriptar(textArea.value);
    mensaje.value=textoEncriptado;
}
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function encriptar(stringEncriptada){
let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
stringEncriptada=stringEncriptada.toLowerCase();
for(let i=0;i<matrizCodigo.length;i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
    }
}
}