    /*  A partir de la página web proporcionada, completar el código JavaScript para que:
 
 1.   Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
 2.   Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
 3.   Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
 4.   Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista: textContent);
 
  */


 //Ejercicios 1 - 4
 //recuperamos los enlaces del DOM
const enlaces = document.querySelectorAll("a")
//texto de prueba
const texto = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed mattis enim vitae orci. Phasellus libero. Maecenas nisl arcu, consequat congue, commodo nec, commodo ultricies, turpis. Quisque sapien nunc, posuere vitae, rutrum et, luctus at, pede. Pellentesque massa ante, ornare id, aliquam vitae, ultrices porttitor, pede. Nullam sit amet nisl elementum elit convallis malesuada. Phasellus magna sem, semper quis, faucibus ut, rhoncus non, mi. Duis pellentesque, felis eu adipiscing ullamcorper, odio urna consequat arcu, at posuere ante quam non dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis scelerisque."

//creamos un mapa para hacer un iterador para cada elemento
let mapa = new Map()
enlaces.forEach(e =>{
    mapa.set(e,0)
})

function ocultarMostrar(e){
    //si el iterador es par, se elimina el elemento de arriba ("el texto") y si es impar se añade un nodo arriba
    let iterador = mapa.get(e)
    if (iterador%2 == 0){
        mapa.set(e,iterador+1) //se aumenta el iterador de este elemento
        e.previousElementSibling.remove() //se borra el elemento de arriba
        e.textContent = "Mostrar contenidos" //cambiamos el mensaje de la etiqueta "a"
    }else{
        mapa.set(e,iterador+1) //Ae aumenta el iterador
        //creamos el nodo y lo añadimos
        let nodo = document.createElement("p")
        let text = document.createTextNode(texto)
        nodo.appendChild(text)
        e.parentNode.insertBefore(nodo,e)
        e.textContent = "Ocultar contenidos" //cambiamos el mensaje de la etiqueta "a"
    }
}

//añadimos el eventListener a cada "a"
enlaces.forEach((e) => {
    e.addEventListener('click',e => ocultarMostrar(e.target))
    
})


