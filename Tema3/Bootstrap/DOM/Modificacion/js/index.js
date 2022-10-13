document.addEventListener("DOMContentLoaded",function(){
    const innerEl = document.getElementById("inner")
    const outerEl = document.getElementById("outer")
    const textEl = document.getElementById("text")
    
    //modificamos el contenido
    innerEl.innerHTML = "Hola a <b>Todos</b>"
    
    //modificamos el contenido y el propio elemento
    outerEl.outerHTML = "<ul><li>A</li><li>B</li></ul>"

    //no interpreta codigo html, pero modifica el contenido de un elemento
    let nodoTexto = document.createTextNode("<b>Como estamos los chabos</b>")
    textEl.appendChild(nodoTexto)

    //establecer titulo de un elemento
    innerEl.title = "Mensaje al pasar el ratón por encima"

    //selector ID y clases
    document.querySelector("#selector_id").innerHTML = "Editado por ID"
    document.querySelector(".selector_class").innerHTML = "Editado por Clase"


})