//con un EventListener, esperamos a que haya cargado el DOM para poder manipular los elementos
document.addEventListener('DOMContentLoaded',function(){
    //rescatamos lo elementos
    const nombre = document.getElementById("nombre")
    const curso = document.getElementById("curso")
    const localidad = document.getElementById("localidad")
    const fechaini = document.getElementById("fecha-ini")
    const fechafin = document.getElementById("fecha-fin")

    //pedimos los datos al usuario
    let nombreUSU = prompt("Introduzca su nombre: ")
    let cursoUSU = prompt("Introduzca su curso: ")
    let localidadUSU = prompt("Introduzca su localidad: ")
    let fechainiUSU = prompt("Introduzca la fecha inicial: ")
    let fechafinUSU = prompt("Introduzca la fecha final: ")

    //definimos que el contenido del HTML sea los datos del usuarios pero quitando los espacios sobrantes con "trim"
    nombre.innerHTML = nombreUSU.trim()
    curso.innerHTML = cursoUSU.trim()
    localidad.innerHTML = localidadUSU.trim()
    fechaini.innerHTML = fechainiUSU.trim()
    fechafin.innerHTML = fechafinUSU.trim()

})