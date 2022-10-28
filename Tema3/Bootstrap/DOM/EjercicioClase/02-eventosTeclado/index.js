window.onload = function(){
    document.onkeyup = muestraInformacion
    document.onkeydown = muestraInformacion
    document.onkeypress = muestraInformacion
}

//keycode,c charcode, caracter pulsado
function muestraInformacion(e){
    let mensaje = 
    `<br>------------<br>
    Tipo de evento ${e.type}<br>
    Keycode ${e.keyCode}<br>
    Charcode ${e.charCode}<br>
    Caracter pulsado ${e.key}
    <br>-------------<br>`

    document.getElementById("info").innerHTML += mensaje
}