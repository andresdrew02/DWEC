/*
Lo que entendí del problema, se debe generar un MAP de 6 indices, la clave debe de ser del 1-49 y el valor (repeticion) aleatoria
utilizando un objeto

Metodos: 
ordenarlo por numero de repeticiones
obtener los numeros en un rango

CONTROL DE ERRORES
*/

class Control{
    constructor(){
        this.numeros = new Map()
        this.mapaOrdenado = "Ejecute la función 'ordenarRepeticiones' para poder acceder a este MAP"
    }

    generarNumeros(){
        this.numeros.set(-4,25)
        this.numeros.set(-5,43)
        let nAnterior = -1
        for (let i=0;i<7;i++){
            let nRandom = Math.round(Math.random()*49)
            if (nRandom != -1){
                this.numeros.set(nRandom,Math.round(Math.random()*31))
            }else{
                i--
            }
        }
    }

    consultarMap(){
        for (let[k,v] of this.numeros.entries()){
            console.log(`llave: ${k}, valor: ${v}`)
        }
    }

    incrementarRepeticiones(n){
        for (let[k,v] of this.numeros.entries()){
            if(k==n){
                this.numeros.set(k,v=v+1) //por alguna razón v++ no funciona a no ser que sea en una segunda iteración
            }
        }
    }

    consultarNumero(n){
        for(let[k,v] of this.numeros.entries()){
            if (k==n){
                return v
            }
        }
    }

    calcularDistancia(n1,n2){
        let d1 = 0
        let d2 = 0
        for(let[k,v] of this.numeros.entries()){
            if (k==n1){
                d1 = v
            }
        }
        for(let[k,v] of this.numeros.entries()){
            if (k==n2){
                d2 = v
            }
        }
        return Math.abs(d1-d2)
    }

    ordenarRepeticiones(){
        //let sorted = new Map([...this.numeros].sort((a,b) => b[1] - a[1])) Solución de como ordenar un map por valor buscada en google
        /*
        el [...this.numeros], crea un array bidimensional en el cual hay la i obtiene el valor de la llave del map, y la j obtiene como valor el valor del map
        */
       //por lo cual la linea de arriba sería lo mismo que esto
        let arrayOrdenado = Array.from(this.numeros)
        let mapaOrdenado = new Map(arrayOrdenado.sort((a,b) => b[1] - a[1]))
        this.mapaOrdenado = mapaOrdenado
        /*
        Explicación ya que es un poco lioso:
        se crea un nuevo objeto Map a partir de un array bidimensional del mapa que queremos ordenar, y como los Array's si que tienen el metodo sort
        usamos el metodo sort pero lo usamos junto a una arrow function como parametro, se le pasa como parametro a,b los cuales representan los elementos del array, es decir, "la clave y el valor" (no hay, porque es un array bidimensional)
        la arrow function devuelve unas claves,valor menos otros claves-valor, si el valor que devuelve es positivo, b se ordenará por delante de a, si es 0, no se ordenará y se dejará tal y como está
        y si devuelve un valor negativo, a se ordenará por delante de b
        en este caso, le pasamos b[1] ya que queremos ordenar el contenido por el valor y no por la clave, y le pasamos ese [1] para que elija el valor en el array bidimensional
        ejemplo, tenemos en un array bidimensional lo siguiente = [4][54],[5][12], se realiza un 54-12 = positivo, significa que a debe de ir por delante de b, es decir (se deja como está)
        y ahora [4][54],[5][66] 54-66 = -12 , valor negativo, b debe de ir por delante de a [5][66][4][54]
        */
    }

    //falta devolver inicio, y devolver final
    devolverInicio(rango){
        let contador=0
        if (rango<this.numeros.size){
            let numerosaDevolver = new Map()
            for(let [k,v] of this.numeros.entries()){
                if (contador!=rango){
                    contador++;
                    console.log(`Clave ${k} , valor ${v}`)
                    numerosaDevolver.set(k,v) // el retorno es el Map original, FIX FIX FIX
                }
            }
            return numerosaDevolver
            
        }else{
            console.log("El rango de números que desea devolver debe de ser menor a los números de lotería existentes.")
        }
    }
}

let control = new Control()
control.generarNumeros()
control.incrementarRepeticiones(-4)
control.consultarMap()
console.log("El valor de la clave -4 es: "+control.consultarNumero(-4))
console.log("La distancia de los valores entre -4 y -5 es de : "+control.calcularDistancia(-4,-5))
console.log(control.mapaOrdenado)
control.ordenarRepeticiones()
console.log(control.mapaOrdenado)
control.devolverInicio(5)
