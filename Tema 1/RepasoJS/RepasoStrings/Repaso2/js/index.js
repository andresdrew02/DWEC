//formas de concatenar
console.log("Hola"+" Mundo")

let nombre = "Pedro Picapiedra"
let nombreMinuscula = "pedro picapiedra"

console.log(`Hola ${nombre}`)

console.log("Hola", nombre , 2)

//metodos strings
console.log(nombreMinuscula.toLocaleUpperCase())
console.log(nombreMinuscula.toLocaleUpperCase().toLocaleLowerCase())
console.log(nombreMinuscula.length)
if (nombreMinuscula.toLocaleLowerCase().search("pedro") == 0){
    console.log("El nombre contiene pedro")
}else{
    console.log("El nombre no contiene pedro")
}

if (nombreMinuscula.toLocaleLowerCase().includes("pedro")){
    console.log("El nombre contiene pedro v2")
}else{
    console.log("el nombre no contiene pedro v2")
}

//substrings
console.log(nombreMinuscula.slice(2,5))

//reemplazar
console.log(nombreMinuscula.replace("dro", "dritazo"))

//quitar espaciados
const mensajeEspaciado = '   esto es un mensaje espaciado   '
console.log(mensajeEspaciado)
console.log(mensajeEspaciado.trim() , ' y ahora con trim(), no')

//convertir string a array indicando separador
const calle = "Calle paquina 2b 4a"
const calleArray = calle.split(" ")
console.log('Calle '+calleArray[1], 
'portal',calleArray[2],
'piso',calleArray[3])
