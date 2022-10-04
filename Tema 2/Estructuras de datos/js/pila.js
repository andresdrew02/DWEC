class Pila{
    constructor(in_items){
        this.items = in_items || []
    }

    longitud(){
        return this.items.length
    }
    apilar(el){
        this.items.push(el)
    }

    desapilar(){
        return this.longitud()>0 ? this.items.pop() : undefined
    }
}

let arr0 = ["a","b","c","d"]
let arr_pila = new Pila(arr0)

console.log(arr_pila.longitud())