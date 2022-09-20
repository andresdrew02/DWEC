//crear funcion
function hiWorld(mensaje){
    console.log(mensaje)
}
hiWorld("hola mundo desde funcion")

//se puede declarar despues de llamarla
console.log(suma(2,10))
function suma(a,b){
    return a+b
}

//las arrow func no se pueden llamar antes de declarar
const resta = (a,b)=>{
    return a-b
}
console.log(resta(10,2))

//parametro x defecto
function miFuncion(name='Pedro'){
    return name
}
console.log('Le paso un parametro a la funcion: ',miFuncion('Jose Juan'),'\nno le paso ningun parametro: ',miFuncion())

//funcion sin return
let mensaje = "Hola consola, que tal?"
function saludaConsola(mensaje){
    console.log(mensaje)
}
saludaConsola(mensaje)

//funciones anonimas
var miSuma = function(a=2){
    return a
}
console.log('funcion anonima: ',miSuma(6))

//las arrow function pueden acceder al objeto "this"
const miArrowFunction = (i=5)=>{
    return i
}
console.log('mi Arrow function con param: ',miArrowFunction(2))
console.log('mi Arrow function sin param: ',miArrowFunction())

//concatenar con llaves USAR "`" COMO EN REACT
function saludarNombre(nombre="Pablo Picasso"){
    return `Hola ${nombre}`
}
console.log(saludarNombre())
console.log(saludarNombre("Pedro Picapiedra"))