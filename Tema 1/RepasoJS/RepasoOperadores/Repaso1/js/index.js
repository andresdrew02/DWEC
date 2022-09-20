//operadores aritmeticos
console.log(2+2)
console.log(2-2)
console.log(2%2)
console.log(2*2)
console.log(2/2)

//operadores de comparacion
console.log(4>2)
console.log(4<=2)
console.log(4==4)
console.log(4!=2)
console.log(4=='4') //js prueba a convertir el string a int para hacer la comprobacion
console.log(4==='4') //js comprueba si son iguales y si son el mismo tipo
console.log(4===4)
console.log(4!=='4')
console.log(4!='4')

//typeof
let mensaje = "Ex cillum laboris irure veniam cillum ullamco dolor."
console.log(typeof mensaje)
let n1 = 5
console.log(typeof n1)
let miArray = ['Esto','es','un','array']
console.log(typeof miArray) //los arrays son tomados como objetos

//comprobar si es numero
console.log(isNaN(n1)) //false --> si es numero da false, si no es numero da true
console.log(isNaN('2')) //false
console.log(isNaN(mensaje)) //true

//concatenacion int y string 
const numero = 2+" Carlos"
console.log(typeof numero)

//convertir int a string
const n = 335
console.log(typeof n.toString())

const nDecimal = 33.3
console.log(nDecimal.toFixed()) //redondea en decimal
console.log(nDecimal.toFixed(2)) //agrega 2 decimales

