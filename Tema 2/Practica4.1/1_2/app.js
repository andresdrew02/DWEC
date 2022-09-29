document.addEventListener('DOMContentLoaded', function () {
    const displayEl = document.getElementById("displayer")

    let generarNumero = (max) => {
        return (Math.round(Math.random() * max))
    }

    let arrayPremios = []

    for (let i = 0; i <= 10; i++) {
        arrayPremios.push(generarNumero(4000000))
    }

    arrayPremios.forEach((value,index) => {
        displayEl.innerHTML += `<div class="alert alert-primary" role="alert">Loteria n${index+1} , premio: ${value}€</div>`
    })

})
