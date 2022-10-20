/*
He visto que en el HTML había una etiqueta template que servía para meter las tareas, así que la he utilizado

    Andrés Del Cerro
*/

//Esperamos a que cargue el DOM
document.addEventListener("DOMContentLoaded", function () {
    //Recuperamos los elementos que necesitamos del DOM, en este caso el DIV donde van a ir las tareas dentro y el botón para agregarlas
    const tareasEl = document.getElementById("tareas")
    const buttonEl = document.getElementsByClassName("btn")[0]

    //Quiero guardarlas en almacenamiento local con "localStorage", así que voy a crear un array al cual voy a meter objetos relacionados con las tareas
    let arr_tareas = []
    let contador_tareas = 0


    //este es el flujo principal del script
    controlador()

    function controlador() {
        //si existen arrays en la memoria, los recuperamos en un array temporal y iteramos ese array, añadiendo las tareas y agregandolas al array de objetos
        if (checkMemoria()) {
            let temp_arr = recuperarMemoria()
            temp_arr.forEach((e) => {
                let element = prepararTarea(e.tarea, e.estado)
                anyadirTarea(element)
                guardarTarea(element, contador_tareas)
                iniciarListener(element, contador_tareas)
                guardarMemoria()
                contador_tareas++
            })
        }

        //Si se pulsa el botón el flujo del script va por "controlador_boton"
        buttonEl.addEventListener("click", function () {
            controlador_boton()
        })
    }

    function controlador_boton() {
        //el valor del campo de texto
        let inputTarea = document.getElementById("input").value.trim() //lo trimeamos para no dejar espacios en blanco
        if (checkeaTarea(inputTarea)) { //si no es un espacio vacio..
            //gracias a la funcion "prepararTarea(String)", conseguimos un elemento HTML preparado con la tarea
            let element = prepararTarea(inputTarea)
            //añadimos la tarea al arbol DOM
            anyadirTarea(element)
            //guardamos la tarea al array y iniciamos los listener que necesitamos, mas adelante comento lo que he hecho 
            guardarTarea(element, contador_tareas)
            iniciarListener(element, contador_tareas)
            //guardamos el array de objetos en memoria local
            guardarMemoria()
            contador_tareas++
        }
    }

    //simplemenete añade al arbol DOM un elemento HTML que le pasemos
    function anyadirTarea(element) {
        tareasEl.appendChild(element)
    }

    //Checkea si el parametro no es una String vacía
    function checkeaTarea(t) {
        if (t) {
            return true
        }
        return false
    }

    //t -> Tarea | e -> estado
    function prepararTarea(t, e) {
        //creamos los elementos necesarios
        let mainDiv = document.createElement("div")
        let pElement = document.createElement("p")
        let tareaNode = document.createTextNode(t)
        let h3Element = document.createElement("h3")
        let checkElement = document.createElement("i")
        let deleteElement = document.createElement("i")

        //añadimos las clases de bootstrap
        mainDiv.className = "alert alert-warning d-flex justify-content-between align-items-center"
        pElement.className = "m-0"
        h3Element.className = "m-0"
        checkElement.className = "fas fa-check-circle"
        deleteElement.className = "fas fa-times-circle"

        //añadimos atributos "title" para guiar al usuario que hacen los botones de check, borrado y si sostiene el ratón en la tarea
        mainDiv.setAttribute("title", "Dame click para copiar la tarea!")
        checkElement.setAttribute("title", "Marcar/desmarcar tarea como completada")
        deleteElement.setAttribute("title", "Borrar tarea")

        //si el estado es true... 
        //esto significa que la tarea ha sido recuperada de memoria y el estado estaba en true, es decir, tarea completada 
        if (e) {
            mainDiv.classList.add("completado")
        }

        //se crea la estructura de elementos
        h3Element.appendChild(checkElement)
        h3Element.appendChild(deleteElement)
        pElement.appendChild(tareaNode)
        mainDiv.appendChild(pElement)
        mainDiv.appendChild(h3Element)

        //se devuelve el Div principal con todos los elementos dentro
        return mainDiv
    }

    //funcion para guardar la tarea al array
    function guardarTarea(element, i) {
        //creamos el objeto con atributos "id", "tarea","estado"
        let tareaObjeto = new Object()
        tareaObjeto.id = i;
        tareaObjeto.tarea = element.textContent
        //el estado se consigue de si el elemento tiene la clase "completado", esto devuelve true o false
        tareaObjeto.estado = element.classList.contains("completado");
        
        //se agrega el objeto al array
        arr_tareas.push(tareaObjeto)
    }

    //funcion para iniciar los listeners necesarios
    function iniciarListener(element, i) {
        let completadoEl = element.lastChild.firstChild //el "boton" de check
        let borrarEl = element.lastChild.lastChild //el "boton" de borrar

        //si el usuario da click a la tarea en si, al div, se copia la tarea al portapapeles.
        element.addEventListener("click", function (e) {
            navigator.clipboard.writeText(e.target.textContent)
        })

        //si el usuario le da click al boton de check
        completadoEl.addEventListener("click", function () {
            //necesitamos el index del array basado en el id del elemento, para eso, iteramos todo el array hasta que encontremos un elemento cuyo
            //id sea el que estamos buscando, cuando lo encontremos, pasamos el valor a arr_index
            let arr_index = 0;
            arr_tareas.forEach(e => {
                if (e.id == i) {
                    arr_index = arr_tareas.indexOf(e)
                }
            })

            //si el estado del elemento es "true", es decir, la tarea esta completada, se pasa el estado a false y se le elimina la clase "completado"
            //ademas se invoca a la funcion guardarMemoria() para guardar en localStorage el nuevo estado del objeto
            if (arr_tareas[arr_index].estado == true) {
                arr_tareas[arr_index].estado = false
                element.classList.remove("completado")
                guardarMemoria()
            } else {
                arr_tareas[arr_index].estado = true
                element.classList.add("completado")
                guardarMemoria()
            }
        })

        //si el usuario da click al "boton" de borrar
        borrarEl.addEventListener("click", function () {
            //se borra el elemento del DOM
            //se busca el index del elemento en el array
            element.remove();
            let arr_index = 0;
            arr_tareas.forEach(e => {
                if (e.id == i) {
                    arr_index = arr_tareas.indexOf(e)
                }
            })
            //una vez encontrado, se borra el objeto del array y se guarda memoria
            arr_tareas.splice(arr_index, 1)
            guardarMemoria()
        })
    }

    //simplemente pasa a formato JSON el array de objetos que hemos creado anteriormente y lo guarda en la memoria local con la key "tareas"
    function guardarMemoria() {
        localStorage.setItem("tareas", JSON.stringify(arr_tareas))
    }

    //retorna el array de objetos guardado en memoria local cuya key sea "tareas"
    function recuperarMemoria() {
        return JSON.parse(localStorage.getItem("tareas"))
    }

    //checkea si no existe la key "tareas" en memoria local, o si existe, que el array no esté vacio
    function checkMemoria() {
        if (localStorage.getItem("tareas") != null) {
            //> a 2, ya que si es un array vacío, se devuelve un String "[]"
            if (localStorage.getItem("tareas").length > 2) {
                return true
            }
        }
        return false
    }
})