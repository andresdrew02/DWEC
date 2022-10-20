//se trata de crear una función que invoquemos cuando pulsemos en cualquier enlace de primer nivel
//la función mostrará u ocultará el UL asociado 
//Lo realizaremos cambiando el estilo directamente con el.style

//recuperamos elementos del DOM
let elementos_menu = document.querySelectorAll(".menu")

//Creamos el mapa para crear un iterador individual para cada elemento
let mapa_elementos = new Map()
elementos_menu.forEach((e)=> mapa_elementos.set(e,0))

function ocultarMostrar(e){
    let ul = e.nextSibling.nextSibling //el siguiente nodo del elemento que le pasamos es el texto, y el siguiente el UL correspondiente
    let iterador = mapa_elementos.get(e) //iterador del MAP
    //cambiamos el style.display a block/none dependiendo del iterador
    if (iterador%2 == 0){
        mapa_elementos.set(e,iterador+1)
        ul.style.display = "block"
    }else{
        mapa_elementos.set(e,iterador+1)
        ul.style.display = "none"
    }

}

//añadimos un eventListener para cada elemento relacionado con la funcion ocultarMostrar
for (let i=0;i<elementos_menu.length;i++){
    elementos_menu[i].addEventListener('click',(e)=>ocultarMostrar(e.target))
}
