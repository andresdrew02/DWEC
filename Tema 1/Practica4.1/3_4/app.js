document.addEventListener('DOMContentLoaded',function(){
    const displayEl = document.getElementById("main")

    //clase coche
    class Coche{
        constructor(marca,modelo,precio,anyo,url){
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.anyoMatriculacion = anyo;
            this.url = url;
        }

        //getter
        getMarca(){
            return this.marca
        }
        getModelo(){
            return this.modelo;
        }
        getPrecio(){
            return this.precio;
        }
        getAnyoMatriculacion(){
            return this.anyoMatriculacion;
        }
        getUrl(){
            return this.url;
        }

        //setter
        setMarca(marca){
            this.marca = marca
        }
        setModelo(modelo){
            this.modelo = modelo
        }
        setPrecio(precio){
            this.precio = precio
        }
        setAnyoMatriculacion(anyo){
            this.anyoMatriculacion = anyo
        }
        setUrl(url){
            this.url = url
        }
        getInfo(){
            return `Marca coche: ${this.marca}\nModelo coche: ${this.modelo}\nPrecio coche: ${this.precio}\nAño matriculacion coche: ${this.anyoMatriculacion}\nFoto coche: ${this.url}`
        }
    }

    const listaCoches = [new Coche("Ford","Kuga",37500,2020,"url")
    ,new Coche("Audi","A1",35875,2018,"url")
    ,new Coche("Kia","Sportage",47557,2019,"url")
    ,new Coche("Kia","Ceed",21200,2021,"url")
    ,new Coche("Peugeot","e208",31760,2022,"url")
    ]

    //recorrer cada atributo de cada objeto
    // listaCoches.forEach((value,index)=>{
    //     Object.keys(listaCoches[index]).forEach(e => console.log(listaCoches[index][e]))
    // })

    //Usando un "toString"
    listaCoches.forEach((value,index)=>{
        console.log("Coche n",index+1,"\n",listaCoches[index].getInfo())
    })

    function pintaCoches(c){
        displayEl.innerHTML += '<div class="card" style="width: 18rem;"><img class="card-img-top" src=','"',c.getUrl(),'" ','alt="Foto del coche"><div class="card-body"><h5 class="card-title">',c.getMarca(), " ",c.getModelo(),'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p> <a href="#" class="btn btn-primary">Go somewhere</a></div></div>'
    }

    pintaCoches(listaCoches[0])
})