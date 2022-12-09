const btn = document.getElementById("btn")
const display = document.getElementById("display")
let contador = 0

display.innerHTML = contador

btn.addEventListener("click", () => {
    contador++
    display.innerHTML = contador
})