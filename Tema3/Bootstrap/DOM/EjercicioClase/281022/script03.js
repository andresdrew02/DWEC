document.addEventListener("DOMContentLoaded", function () {

    let telefonEl = document.querySelector("#telefon")
    let dniEl = document.querySelector("#dni")

    function filtroGeneral(e) {
        if (e.target.id === "telefon") {
            const filtro = "0123456789"
            let string = telefonEl.value
            let retorno = ""

            for (let i = 0; i < string.length; i++) {
                if (filtro.includes(string[i])) {
                    retorno += string[i]
                }
            }
            e.target.value = retorno
        } else if (e.target.id === "dni") {
            const filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890-';
            let string = dniEl.value
            let retorno = ""

            for (let i = 0; i < string.length; i++) {
                if (filtro.includes(string[i])) {
                    retorno += string[i].toUpperCase()
                }
            }
            e.target.value = retorno
        }
    }

    telefonEl.addEventListener("keyup", filtroGeneral)
    dniEl.addEventListener("keyup", filtroGeneral)
})