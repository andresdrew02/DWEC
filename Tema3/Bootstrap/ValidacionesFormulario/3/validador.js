document.addEventListener("DOMContentLoaded",function(){
    const email = document.querySelector("#email")
    const cp = document.querySelector("#cp")
    const form = document.querySelector("form")
    
    //Regexp
    const emailRegexp =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //const emailRegexp = /^[A-Z]{1,}+[@]{1}[\w+]+[.][\w+]$/
    console.log (emailRegexp.test("sadsd@gmail.com"))
    const cpRegexp = /^\d{5}$/ // nnnnn

    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        e.stopPropagation()

        email.setCustomValidity("")
        cp.setCustomValidity("")

        let valido = true
        if (!emailRegexp.test(email.value.trim())){
            valido = false
            email.setCustomValidity("Email no válido")
        }

        if (!cpRegexp.test(cp.value.trim())){
            valido = false
            cp.setCustomValidity("Código Postal no válido")
        }

        if (valido){
            e.target.submit()
        }
    })
})