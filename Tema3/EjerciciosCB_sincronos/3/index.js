const numbers_arr = [1,2,3,4]

//f1 de iterar
numbers_arr.forEach(
    e=>{
    console.log(e)
    }
)

//f2 de iterar
numbers_arr.forEach(
    function(e){
        console.log(e)
    }
)

//f3 de iterar
let iterar = 
    (n) => {
        console.log(n)
    }

numbers_arr.forEach(iterar)

//operar mediante map

let hacerDoble = (n) =>{
    return n*n
}

const doble = numbers_arr.map(hacerDoble)

const pares = numbers_arr.filter(n=>n%2==0)

console.log(doble,pares)
