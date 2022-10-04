//lista y nodos

class ListaNodo{
    constructor(data){
        this.data = data;
        this.siguienteNodo = null;
    }
}

class EnlaceLista{
    constructor(head=null){
        this.head = head
    }
    getLast(){
        let lastNode = this.head
        if (lastNode){
            while(lastNode.siguienteNodo){
                lastNode = lastNode.siguienteNodo
            }
        }
        return lastNode
    }
    size(){
        let count = 0
        let node = this.head
        while(node){
            count++
            node = node.siguienteNodo
        }
        return count
    }
}

let nodo1 = new ListaNodo(2)
let nodo2 = new ListaNodo(3)
let nodo3 = new ListaNodo(7)
let nodo4 = new ListaNodo(23)
let nodo5 = new ListaNodo(53)
nodo1.siguienteNodo = nodo2
nodo2.sigueinteNodo = nodo3
nodo3.siguienteNodo = nodo4
nodo4.siguienteNodo = nodo5

let enlaceNodos = new EnlaceLista(nodo1)
console.log(enlaceNodos.getLast())
console.log(enlaceNodos.size())