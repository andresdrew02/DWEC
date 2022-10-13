let special = document.getElementById("especial")

console.log(special)

special.style.color = "red";

//listaElementos.forEach((e)=> e.style.fontSize = "4rem")

const nodeList = document.body.childNodes;
let text = ""

nodeList.forEach((node)=>{
    text += node.nodeName + "<br>"
})

document.getElementById("display").innerHTML = text

function anyadirCasera(){
    let nuevoNodo = document.createElement("li")
    let nuevoNodo2 = document.createElement("a")
    nuevoNodo2.setAttribute("href","#")
    nuevoNodo.appendChild(nuevoNodo2)
    let textoNodo = document.createTextNode("La Casera")
    nuevoNodo2.appendChild(textoNodo)
    nuevoNodo.style.fontSize = "2rem"
    document.getElementById("lista").appendChild(nuevoNodo)
}

function borrarUltimo(){
    let listaElementos = document.querySelectorAll("li")
    if (listaElementos.length > 0){
        listaElementos[listaElementos.length-1].remove()
    }

}

let listaElementos = document.querySelectorAll("li")
console.log(listaElementos)
for (li of listaElementos){
    li.style.fontSize = "2rem"
}