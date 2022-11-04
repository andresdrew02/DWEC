document.addEventListener("DOMContentLoaded",function(){
    const usuario = document.querySelector("#uname")
    const password = document.querySelector("#pwd")
    const form = document.querySelector("form")

    form.addEventListener("submit",(e)=>validarFormulario(e))
    
    usuario.addEventListener("keyup",(e)=>{
        e.target.setCustomValidity("")
        if (!e.target.value){
            e.target.setCustomValidity("No puede dejar el campo vacío")
        }
    })
    
    password.addEventListener("keyup",(e)=>{
        e.target.setCustomValidity("")
        if (!e.target.value){
            e.target.setCustomValidity("No puede dejar el campo vacío")
        }

        if (e.target.value.length < 6){
            e.target.setCustomValidity("La contraseña debe de tener mínimo 6 carácteres")
        }
    })

    function validarFormulario(e){
        e.preventDefault()
        e.stopPropagation()
        let valido = true

        // !usuario.value ? valido=false : valido=true
        // !password.value ? valido=false : valido=true
        // password.value.length < 16 ? valido=false : valido=true

         if (!usuario.value){
             usuario.setCustomValidity("Campo vacio")
             valido = false
         }else{
             usuario.setCustomValidity("")
         }
         if (!password.value){
             password.setCustomValidity("Campo vacio")
             valido = false
         }else{
             usuario.setCustomValidity("")
         }
         if (password.value.length < 6){
             password.setCustomValidity("Contraseña menor de 6")
             valido = false
         }else{
             usuario.setCustomValidity("")
         }
         
         if (valido){
            e.submit()
         }
         
    }
})