let saludar = 
    (name) => {
        alert(`Hola ${name}`)
    }

let obtenerNombre = 
    () => {
        return prompt("Dime tu nombre: ")
    }
    
//let nombre = obtenerNombre()

//saludar(nombre)

//2 forma 
obtenerNombre = 
    (fn) =>{
        nombre = prompt("Dime tu nombre: ")
        fn(nombre)
    }

obtenerNombre((name)=>alert(`Hola ${name}`))

