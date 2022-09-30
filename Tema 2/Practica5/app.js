function cuentaCorriente(ncuenta,titular,dni,telefono,saldo,ultimosmovimientos){
    this.ncuenta = ncuenta;
    this.titular = titular;
    this.dni = dni;
    this.telefono = telefono;
    this.saldo = saldo;
    this.ultimosmovimientos = ultimosmovimientos;
    this.numMovimientos = ultimosmovimientos.length
    
    this.ingresar = function(n){
        if(isNaN(n)){
            console.log("Transacción Incorrecta")
        }else if(numMovimientos>=10 || n<1){
            console.log("Transacción Incorrecta")
        }else{
            this.saldo+=n
            this.ultimosmovimientos.push(`+${n}`)
            this.numMovimientos++
        }
    }
    this.sacar = function(n){
        if(isNaN(n)){
            console.log("Transacción Incorrecta")
        }else if(numMovimientos>=10 || this.saldo<n){
            console.log("Transacción Incorrecta")
        }else{
            this.saldo-=n
            this.ultimosmovimientos.push(`-${n}`)
            this.numMovimientos++
        }
    }
    this.verMovimientos = function(){
        movimientos = ""
        for(m of this.ultimosmovimientos){
            movimientos+=`[${m}],`
        }
        console.log(movimientos)
    }
    this.verSaldo = function(){
        return this.saldo;
    }
    this.infoCuenta = function(){
        return `La cuenta ${this.titular} con número de cuenta ${this.ncuenta} y dni ${this.dni}\n
        tiene ${this.saldo}€, su teléfono es ${this.telefono}`
    }
}

cuentaCorriente(123,"Pepe Gómez","12345678Z","5234224",995,["-100","+200"])

ingresar(100)
sacar(200)
sacar(200)
sacar(695)
sacar("jeje")
verMovimientos()
console.log(infoCuenta())

console.log("------BIBLIOTECA------")

class Libro{
    constructor(titulo,autor,npaginas,edicion){
        this.titulo = titulo
        this.autor = autor
        this.npaginas = npaginas
        this.edicion = edicion
    }
    setTitulo(t){
        this.titulo = t
    }
    getTitulo(){
        return this.titulo
    }
    setAutor(a){
        this.autor = a
    }
    setPaginas(p){
        this.npaginas = p
    }
    setEdicion(e){
        this.edicion = e
    }
}

let l1 = new Libro("Libro 1","Pepe gomez",531,"enterpris")
let l2 = new Libro("Libro 2","jose gomez",331,"enterpris222")
let l3 = new Libro("Libro 3","pablo gomez",231,"enterprise2")

var biblioteca = {
    numeroVolumenes : 0,
    Volumenes : [] ,
    insertarLibro : function(l){ //se pueden agregar funciones como atributos de un objeto
        this.Volumenes.push(l)
        this.numeroVolumenes++
    },
    verLibros : function(){
        for(v of this.Volumenes){
            console.log(v.getTitulo())
        }
    },
    //falta por hacer
    sacarLibro : function(l){
        estado = false
        for (v of this.Volumenes){
            if (v.getTitulo() == l.getTitulo()){
                estado = true;
                console.log("encontrado")
                //FALTA SACAR LIBRO
            }
        }
    }
}

biblioteca.insertarLibro(l1)
biblioteca.verLibros()
biblioteca.sacarLibro(l1)