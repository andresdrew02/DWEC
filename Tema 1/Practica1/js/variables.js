//variable global String
var text = "text message"
console.log(text)

//variable global tratada como int
var number = 24324
console.log(number)

//variable segun ecmaescript6
let text2 = "text message ecmascript6"
console.log(text2)

//constantes
const text3 = "text message const variable"
console.log(text3)

//se pueden definir variables despues de usarlas aunque el valor si la llamamos antes de ser definida será undefined
console.log(noDefinida)
var noDefinida = "Message not defined"

//con let no se permite utilizarla antes de definirla, siempre habrá error
//console.log(noDefinida2)
//let noDefinida2 = "Message not defined"

//fuera del bloque if no se vería la variable a no ser que fuera var, ejemplo hecho con let y con const
if (true){
    var varLocal = "text"
    console.log(varLocal)
}
console.log(varLocal)

//lo mismo en las funciones
function sayHello(){
    const texto = "Function text"
    console.log(texto)
}

sayHello()
