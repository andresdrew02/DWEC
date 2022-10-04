class Cola{
    constructor(in_items){
        this.items = in_items || []
    }

    longitud(){
        return this.items.length
    }

    encolar(el){
        this.items.push(el)
    }

    desencolar(){
        return this.longitud()>0 ? this.items.shift() : undefined
    }

}

let arr1 = ["a","b","c"]

let arr_cola = new Cola(arr1)
console.log(arr_cola.desencolar())
console.log(arr_cola.desencolar())
console.log(arr_cola.longitud())
console.log(arr_cola.desencolar())
console.log(arr_cola.longitud())