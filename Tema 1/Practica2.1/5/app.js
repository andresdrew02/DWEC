document.addEventListener('DOMContentLoaded',function(){
    //rescatamos los elementos
    let nombreEl = document.getElementById("nombre")
    let emailUSU = prompt("Introduzca su email: ")
    //si el usuario ha introducido un email... es decir, que en la string introducida tenga un arroba
    if (emailUSU.search("@") != -1){
        //el nombre del usuario es una substring desde 0 hasta la posicion de la arroba
        let nombreUSU = emailUSU.substring(0,emailUSU.search("@"))
        //se muestra por HTML un mensaje para el usuario
        nombreEl.innerHTML = "Bienvenido " + nombreUSU
    }
})