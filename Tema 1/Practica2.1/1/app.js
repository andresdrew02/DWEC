var n = prompt("Necesito que me digas un numero: ") //se pide el numero al usuario

if (isNaN(n) == false){ //si es un numero
    if (n%2==0){
        console.log("El numero introducido es par")
    }else{
        console.log("El numero introducido es impar")
    }
}else{
    console.log("Introduce un número")
}

