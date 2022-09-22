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

    


})