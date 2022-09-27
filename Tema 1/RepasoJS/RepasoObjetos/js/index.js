document.addEventListener('DOMContentLoaded',function(){
    //objeto literal
    var pepe = {
        nombre : "pepe",
        apellido : "garcia",
        edad : 18,
        altura : 1.64,
        saludo : function(){ //se pueden agregar funciones como atributos de un objeto
            console.log(`Hola, me llamo ${this.nombre}`)
        },
    }

    //objeto deconstruidos
    function persona(nombre,edad){
        this.nombre = nombre
        this.edad = edad
        this.saludo = function(){
            console.log(`Hola, me llamo ${this.nombre}`)
        }
    }

    var manolo = persona("manolo",52)

    //objeto mediante clase
    class Coche{
        constructor(marca,modelo,matricula){
            this.marca = marca
            this.modelo = modelo
            this.matricula = matricula
        }
        getMarca(){
            return this.marca
        }
        setMarca(marcaCoche){
            this.marca = marcaCoche
        }
    }

    var ford209 = new Coche("Ford","209","2321MPD")

    //crear objeto mediante llamada al objeto Object
    var joseluis = new Object({
        nombre : "jose luis",
        edad : 24,
        altura: 1.65,
        saludo : function(){
            console.log(`hola, soy ${this.nombre}`)
        },
    })

    //ir creando propiedades del objeto sobre la marcha
    var myCar = new Object()  
    myCar.marca = "Ford"
    myCar.modelo = "Focus"

    //Objeto DATE

    var fecha = new Date()
    let anyo = fecha.getFullYear()
    let mes = fecha.getMonth();
    let dia = fecha.getDay();

    //Objeto MATH
    const pi = Math.PI
    console.log(Math.round(4.5))
    console.log(Math.floor(54.2))
    console.log(Math.ceil(4.2))
    console.log(Math.min(4,3,1,2,5,1,2))
    console.log(Math.random())

    //metodo para generar un numero aleatorio con un max
    function genNumero(max){
        return Math.round(Math.random()*max)
    }
    console.log(genNumero(5))

    //ARRAY,MAP,SET
    const arr1 = new Array("rojo","amarillo","verde")
    const arr2 = new Array(4) //longitud
    console.log(arr2.length)

    const arr3 = Array.from("Hola pedro")
    const set = new Set(['foo','var'])
    console.log(Array.from(set))
    const mapper = new Map([[1,2],[2,4]])
    console.log(Array.from(mapper.values())) 
    console.log(Array.from(mapper.keys()))

    let arr4 = Array.from([1,2,3],x => console.log(x*x)) //1*1,2*2,3*3
    let arr5 = Array.from({length:5},(v,i)=> i) //array desde 0,4 | 5 longitud
    console.log(arr5)
    console.log(Array.isArray(arr5)) //true

    
})