e - enter 
o - ober 
i - imes 
a - ai 
u - ufat

function encriptar(){
    var texto = document.getElementById("mensaje").value.toLowerCase();
    var txtEncriptado = texto.replace(/e/igm, "enter");
    var txtEncriptado = txtEncriptado.replace(/o/igm, "ober");
    var txtEncriptado = txtEncriptado.replace(/i/igm, "imes");
    var txtEncriptado = txtEncriptado.replace(/a/igm, "ai");
    var txtEncriptado = txtEncriptado.replace(/u/igm, "ufat");

    document.getElementById("imagenbuscar").style.display = "none";
    document.getElementById("tituloh2").style.display = "none";
    document.getElementById("parrafo").innerHTML = txtEncriptado; 
    document.getElementById("botoncopiar").style.display = "show";
    document.getElementById("botoncopiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("mensaje").value.toLowerCase();
    var txtEncriptado = texto.replace(/enter/igm, "e");
    var txtEncriptado = txtEncriptado.replace(/ober/igm, "o");
    var txtEncriptado = txtEncriptado.replace(/imes/igm, "i");
    var txtEncriptado = txtEncriptado.replace(/ai/igm, "a");
    var txtEncriptado = txtEncriptado.replace(/ufat/igm, "u");

    document.getElementById("imagenbuscar").style.display = "none";
    document.getElementById("tituloh2").style.display = "none";
    document.getElementById("parrafo").innerHTML = txtEncriptado; 
    document.getElementById("botoncopiar").style.display = "show";
    document.getElementById("botoncopiar").style.display = "inherit";
}

function copy() {
    var contenido = document.querySelector("#parrafo");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió!");
    
}
