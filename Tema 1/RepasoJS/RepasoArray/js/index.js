document.addEventListener('DOMContentLoaded',()=>{
    let array = ["John","Doe",12,false]
    let array2 = new Array(3) 
    let array3 = new Array("John","Diaz",23,false)

    console.log(array[0])

    //cambiar elemento concreto de un array
    array[0] = "SDSP Mark"
    console.log(array[0])

    let printArray = (arr)=>{
        for(let i=0;i<arr.length;i++){
            console.log(`Elemento ${i} : ${arr[i]}`)
        }
    }

    //eliminar ultimo elemento array
    printArray(array)
    array.pop()
    printArray(array)
    array.push(false) //agregamos un elemento en la proxima posición del array
    printArray(array)

    //for in loop & foreach loop & for of loop

    

})