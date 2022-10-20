document.addEventListener("DOMContentLoaded",function(){
    //recuperamos elementos del DOM
    buttonEl = document.getElementsByClassName("btn")[0]
    let ulEl = document.createElement("ul")

    //creamos las variables necesarias
    let tarea = null
    let contador_tareas = 0
    let tareas = [] //array donde guardaré los elementos html de las tareas
    let tareas_objeto = [] //array donde guardaré objetos de las tareas para poder almacenarlo en memoria local "localStorage"

    //funcion por la que inicia el flujo del programa
    function controlador(){
        //si la memoria contiene información sobre las tareas guardadas se añaden los objetos al array de tareas_objeto 
        if (checkearMemoria()){
            tareas_objeto = recuperarMemoria()
            //primero se inicializa la lista para agregar los objetos "ul" y despues se añaden las tareas a la lista
            tareas_objeto.forEach(e => {
                crearLista()
                anyadirTarea(e.tarea,e.completado)
                contador_tareas++;
            })
        }

        //listener del boton para agregar una tarea
        buttonEl.addEventListener("click",function(){
            controlador_boton()
        })
    }
    controlador()



    //resto del programa 
    //funcion que recupera el to-do introducido del usuario.
    function tareaIntroducida(){
        return document.getElementById("input").value.trim()
    }

    //flujo del programa del boton
    function controlador_boton(){
        tarea = tareaIntroducida()

        //si no hay ninguna tarea introducida anteriormente se crea el "ul"
        if(contador_tareas==0){
            crearLista()
            contador_tareas++
        }

        //si hay alguna tarea introducida se añade a la lista y se refresca el array de objetos para el posterior guardado en memoria
        if (checkearTarea(tarea)){
            anyadirTarea(tarea)
            refrescarArrayObjetos()
            contador_tareas++
        }
    }
    
    //crea un elemento ul dentro del DIV "lista-tareas" del HTML
    function crearLista(){
        document.getElementById("lista-tareas").appendChild(ulEl)
    }

    //t es la tarea, c es si está completada "booleano", solo usaré esto para los objetos guardados en memoria, si existen
    function anyadirTarea(t,c){
        
        let liEl = document.createElement("li")
        let textNode = document.createTextNode(t)
        let iEl = document.createElement("i")
        iEl.appendChild(document.createTextNode("X"))

        //si la tarea está completada, se le agrega la clase completado
        if (c){
            liEl.classList.add("completado")
        }

        liEl.appendChild(textNode)
        liEl.appendChild(iEl)
        ulEl.appendChild(liEl)
        tareas.push(liEl)

        crearListener(liEl) //creamos un listener individual para el nodo "para si el usuario marca la tarea"
    }

    //si el usuario da click a una tarea, se le agrega al elemento del parametro la clase ".completado" y se refresca el array de objetos
    //si la clase ya estaba asignada, se la elimina
    function crearListener(e){

        //listener para el "li"
        e.addEventListener("click",function(){
            if (e.classList[0] == "completado"){
                e.classList.remove("completado")
            }else{
                e.classList.add("completado")
            }
            refrescarArrayObjetos()
        })

        //otro listener para el elemento "i" dentro del "li"
        //si se clickea a la "X", se elimina el elemento de la lista, del array de elemento y se refresca el array de objetos
        e.childNodes[1].addEventListener("click",function(){
            e.remove()
            tareas.splice(tareas.indexOf(e),1)
            contador_tareas--
            refrescarArrayObjetos()
        })
    }

    //para checkear si una tarea está vacia, si hacemos un if a un String, devuelve false si está vacio
    function checkearTarea(t){
        if (t){
            return true
        }
        return false
    }

    //funcion para ir refrescando el array de objetos cuando se modifique/agregue/elimine algun objeto
    //esta funcion la llamo mucho, ya que como el array de objetos, cada tarea, no sabía bien como controlar el index de las tareas al borrarlas, 
    //decidi hacer esta funcion para ir borrando y creando todo el rato el array.
    function refrescarArrayObjetos(){
        //Borra el contenido del array de objetos
        tareas_objeto.splice(0,tareas_objeto.length)
         
        //para cada tarea en el array de nodos se crea un nuevo objeto con los atributos "id","tarea","completado"
        tareas.forEach((e,i)=>{
            let objeto_tarea = new Object()
            objeto_tarea.id = i //index en el array
            objeto_tarea.tarea = e.textContent.substring(0,e.textContent.length-1) //la tarea en si, el substring es para borrar la "X" de la etiqueta "i" ya que es tomada como texto
            objeto_tarea.completado = false;
            if (e.classList[0] == "completado"){ //si la tarea tiene la clase "completado", el atributo "completado" se pasa a true
                objeto_tarea.completado = true;
            }
            tareas_objeto.push(objeto_tarea) //se añade el objeto al array de objetos
        })
        guardarMemoria() //despues de las iteraciones, se guarda el objeto en memoria

    }

    //funcion para agregar el array de objetos a memoria local del navegador, utilizo la key "tareas" y 
    //almacenamos en formato JSON el array de objetos
    function guardarMemoria(){
        localStorage.setItem("tareas",JSON.stringify(tareas_objeto))
    }

    //funcion para checkear si existe en almacenamiento local la key "tareas" y comprobar que no está vacia
    function checkearMemoria(){
        //creamos un array temporal el cual será el array de objetos que se almacena en la key "tareas" del almacenamiento local
        let arr_recuperado = recuperarMemoria()
        
        //si no es nulo, es decir, existe, y tiene mas de 1 de longitud, es decir, contiene algo, devuelve verdadero
        if (arr_recuperado != null){
            if (arr_recuperado.length > 0){
                return true;
            }
        }
    }
    return false;

    //funcion que devuelve un array de objetos a partir del JSON almacenado en la key "tareas" del almacenamiento local
    function recuperarMemoria(){
        return JSON.parse(localStorage.getItem("tareas"))
    }

})

