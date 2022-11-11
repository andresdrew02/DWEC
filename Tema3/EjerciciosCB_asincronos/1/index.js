let sayhi = (name) => console.log(`Hola ${name}`)

console.log("Inicio")
setTimeout(sayhi("Pedro"),2000)
console.log("Fin")

//

//Forzamos error de collback, en este caso primero se descargan los datos, luego los procesa, y luego los descarga.
const url = "https://jsonplaceholder.typicode.com/users"

// function getUsers(url,fn){
//     console.log("Descargando...")
//     setTimeout(function(){
//         console.log("Descargado")
//     },3000)

//     fn("Datitos")
// }

// function processData(data){
//     console.log("Procesando datos...")
//     setTimeout(function(){
//         console.log(`Los datos son: ${data}`)
//     },1000)
// }

// getUsers(url, 
//     (data)=>{
//         console.log(`Los datos son: ${data}`)
//     })

//para solucionar ese error, habría que hacer lo siguiente

function getData(url,fn){
    console.log(`Descargando de ${url} ......`)

    //supuesta peticion al sv
    setTimeout(()=>{
        console.log("Descargado")
        let data = "Datos ficticios"
        fn(data)
    })
}

getData(url,
    (data)=>{
        console.log(`Los datos son: ${data}`)
    }
)
