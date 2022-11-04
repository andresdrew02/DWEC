document.addEventListener("DOMContentLoaded",function(){
    let email = document.querySelector("#email")
    let cp = document.querySelector("#cp")
    const form = document.querySelector("form")

    function checkEmail(e){
        let contadorArrobas = 0
        let contadorPuntos = 0
        let emailString = e.value

        if (!emailString || e==null){
            return false
        }
        for (let i=0;i<emailString.length;i++){
            if (emailString[i] == "@"){
                contadorArrobas++
            }
            
            if (emailString [i] == "."){
                contadorPuntos++
            }
        }

        if (contadorArrobas == 1 && contadorPuntos == 1){
            return true
        }
        return false

    }

    function checkCP(e){
        const filtro = "0123456789"
        cpString = e.value
        for (let i=0;i<cpString.length;i++){
            if (!filtro.includes(cpString[i])){
                e.value = cpString.substring(0,i)
                return false
            }
        }
        return true
    }


    cp.addEventListener("keyup",(e)=>checkCP(e.target))
    
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        e.stopPropagation()

        if (!checkCP(cp)){
            cp.setCustomValidity("El CP especificado no es valido")
        }else{
            if (cp.value.length != 5){
                cp.setCustomValidity("El CP debe de estar compuesto por 5 números")
            }else{
                if (!checkEmail(email)){
                    email.setCustomValidity("El email introducido no es válido")
                }else{
                    e.submit()
                }
            }
        }
    })

})