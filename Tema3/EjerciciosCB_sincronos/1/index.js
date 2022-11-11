//una forma de hacer cb's
let myfn = (fn) =>{
    fn()
}

const saludar = (name="Pepe") =>{
    console.log(`Hola ${name}`)
}

myfn(saludar)

//otra forma

myfn(
    function saludo(){
        console.log("Hola Manolo")
    }
)

//otra forma (la mas común)

myfn(
    () => {
        console.log("Hola Paquito")
    }
)

//CB's con parametros 

myfn = (fn) => {
    const nombre = "Pepillo grillo"
    const apellidos = "Del Monte"
    fn(nombre,apellidos)
}

myfn(saludar)

//otra forma
myfn((name,apellidos)=>console.log(`Hola ${name} ${apellidos}`))

//otra forma con solo un parámetro
myfn(name => console.log(`Hola ${name}`))


