document.addEventListener('DOMContentLoaded', function () {
    //rescatamos los elementos y pedimos el numero al usuario
    let mainEl = document.getElementById("main")
    let n = prompt("Introduzca un numero para la tabla de multiplicar: ")
    //Creamos un elemento ul para hacer la lista
    let ul = document.createElement("ul")

    //si el input introducido es un numero y es mayor o igual a 0
    if (isNaN(n) == false && n >= 0) {
        //se hace la tabla de multiplicar de 0-10
        for (let i = 0; i <= 10; i++) {
            //creamos un elementos li para ir creando la lista de los elementos con la tabla
            let li = document.createElement("li")
            //se modifica el contenido del li con este formato "nIntroducido * iteracionBucle = resultado"
            li.textContent = `${n} * ${i} = ${i * n}`
            //se agrega el li al ul
            ul.appendChild(li)
            console.log(`${n} * ${i} = ${i * n}`)
            //tabla += `${n} * ${i} = ${i * n}\n`
        }
    } else {
        //comprobacion para los warnings
        if (n < 0) {
            console.warn("El número tiene que ser mayor que 0")
        } else {
            console.warn("Eso no era un número...")
        }
    }
    //se agrega el ul a la etiqueta <main> del HTML
    mainEl.appendChild(ul)
})

