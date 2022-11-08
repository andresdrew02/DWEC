const texto = `Hola Manz

balbalbla
blabalblab
lbalbalba
Manz`

const regexp = /M..z/
const secondRegexp = /M..z/ig
//i -> case Insensitive 
//g -> global, busca por toda la cadena
console.log("------1st------")
console.log(regexp.lastIndex) //0
console.log(regexp.test(texto)) //true
console.log(regexp.lastIndex) //0
console.log(regexp.test(texto)) //true
console.log("\n------2nd------")
console.log(secondRegexp.lastIndex) //0
console.log(secondRegexp.test(texto)) //true
console.log(secondRegexp.lastIndex) //9
console.log(secondRegexp.test(texto)) //true

// /^M..z/m -> multilinea
// \. -> escapar el "." de la regexp

const regexpVocal = /[aeiou]/i
const regexpNoVocal = /[^aeiou]/i

