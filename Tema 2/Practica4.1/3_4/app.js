document.addEventListener('DOMContentLoaded',function(){
    //elemento del DOM donde vamos a representar la información
    const displayEl = document.getElementById("display")

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

    //definición del array con los objetos
    const listaCoches = [new Coche("Ford","Kuga",37500,2020,"kuga.webp")
    ,new Coche("Audi","A1",35875,2018,"audi.webp")
    ,new Coche("Kia","Sportage",47557,2019,"kiasport.webp")
    ,new Coche("Kia","Ceed",21200,2021,"kiaceed.webp")
    ,new Coche("Peugeot","e208",31760,2022,"peugeot.jpg")
    ]

    /*recorrer cada atributo de cada objeto
        listaCoches.forEach((value,index)=>{
            Object.keys(listaCoches[index]).forEach(e => console.log(listaCoches[index][e]))
        })
    */  


    function pintaCoches(c){
        displayEl.innerHTML += 
        '<div class="col">'+
            '<div class="card" style="width: 18rem;">'+
                '<img class="card-img-top" src="./img/'+c.getUrl()+'" alt="Foto del coche">'+
                    '<div class="card-body">'+
                        '<h5 class="card-title">'+c.getMarca()+ " "+c.getModelo()+'</h5>'+
                            '<p class="card-text">Precio: '+c.getPrecio()+"€"+'<br/>Año de matriculación: '+c.getAnyoMatriculacion()+'</p> '+
                                '<a target="_blank" href="./img/'+c.getUrl()+'" class="btn btn-primary">Ver foto</a>'+
                    '</div>'+
            '</div>'+
        '</div>'
    }

    listaCoches.forEach((value,index)=>{
        pintaCoches(listaCoches[index])
        console.log("Coche n",index+1,"\n",listaCoches[index].getInfo()) //muestra la info por consola
    })
})