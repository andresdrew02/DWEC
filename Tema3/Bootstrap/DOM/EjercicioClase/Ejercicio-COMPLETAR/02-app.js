window.addEventListener("load", e => {


    //vamos a cambiar el estilo del elemento con clase navbar-brand 
    document.getElementsByClassName("navbar-brand")[0].style.color = "red";

    //seleccionamos el elemento a dentro de div.jumbotron
    let divDentroJumbotron = document.getElementsByClassName("jumbotron")[0].children[0]

    //Le quitamos y le ponemos una clase 
    divDentroJumbotron.classList.remove("container")
    divDentroJumbotron.classList.add("container")
    divDentroJumbotron.classList.add("marcar")
     
    //Seleccionamos todos los elementos a con clase btn-secondary dentro de elementos de la
    //clase .col-md-6
    let elements = document.querySelectorAll(".col-md-6 a.btn-secondary")

    //si queremos hacer algo con todos los elementos de la colección habría que recorrerlos.
    //Quitar la clase btn-secondary
    elements.forEach(e => e.classList.remove("btn-secondary"));
    //Añadir la clase btn-danger
    elements.forEach(e => e.classList.add("btn-danger"))

    //Seleccionar todos los elementos con la clase col-md-6 
    let elementos = document.getElementsByClassName("col-md-6");

    //accedo al tercer elemento y le cambio el estilo a mano
    elementos[2].style.backgroundColor = "red"

    //recorremos todos los elementos
    let cols = document.querySelectorAll(".col-md-6")

    cols.forEach(element => {
        //le asignamos un evento click a cada uno de ellos
        element.addEventListener("click", function (e) {
            element.classList.toggle("marcar");
        });
    });
});
