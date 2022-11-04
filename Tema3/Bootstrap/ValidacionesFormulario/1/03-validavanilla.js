window.addEventListener("load",()=>{
    //capturamos los elementos del formulario
    const formulario = this.document.querySelector("#formulario")
    const usuario = this.document.querySelector("#user")
    const passwd = this.document.querySelector("#passwd")
    const newpasswd = this.document.querySelector("#newpasswd")
    const fechaNac = this.document.querySelector("#fechaNac")
    const condiciones = this.document.querySelector("#condiciones")
    const edad = this.document.querySelector("#edad")
    const btnreset = this.document.querySelector("#btn-reset")
    
    let nuevaVentana
    function abrirVentana(mensaje){
        nuevaVentana = window.open("segundaVentana.html")
        nuevaVentana.document.getElementById("texto").innerHTML = mensaje
    }
    
    //funcion de validacion del formulario asociada al btnsubmit

    formulario.addEventListener("submit",userEl=>{
        //prevenir el comportamiento por defecto
        userEl.preventDefault()
        userEl.stopPropagation()

        resetCasillas()
        //la variable valido sirve para validar el formulario
        let valido = true
        if (!validaUser(usuario)){
            valido = false
        }

        if (!validaPass(passwd,newpasswd)){
            valido = false
        }

        if (!validaFecha(fechaNac)){
            valido = false
        }

        if (!validaCheck(condiciones)){
            valido = false
        }

        if (!validaEdad(edad)){
            valido = false
        }

        //si no hemos encontrado ningún error, forzamos el envio del formulario
        if (valido){
            formulario.submit()
        }
    })

    formulario.addEventListener("reset",e=>{
        e.preventDefault();
        e.stopPropagation();

        let nombreUsu,passwdUsu,passwdVeriUsu,edadUsu,fecha,checked
        nombreUsu = usuario.value
        passwdUsu = passwd.value
        passwdVeriUsu = newpasswd.value
        fecha = fechaNac.value
        edadUsu = edad.value
        checked = condiciones.checked
        
        let mensaje = `Nombre : ${nombreUsu}\nPassword : ${passwdUsu}\nPassword verificada : ${passwdVeriUsu}\nFecha : ${fecha}\nEdad : ${edadUsu}\nChecked : ${checked}`
        abrirVentana(mensaje)
    })


    //---------FUNCIONES DE VALIDACION-----------
    //valida si el elemento no es nulo, si el usuario no está vacio
    function validaUser(userEl){
    if (userEl == null || userEl.value === ""){
            userEl.parentNode.querySelector("p").textContent = "No puedes dejar el usuario vacio"
            userEl.parentNode.classList.add("error")
            return false
        }
        return true
    }

    //varia si los elementos no son nulos, si las contraseñas no están vacias, si la longitud es mayor de 8 caracteres y si son coincidentes
    function validaPass(passwdEl,newpasswdEl){
        if (passwdEl == null || newpasswdEl == null || passwdEl.value === "" || newpasswdEl.value === ""){
            passwdEl.parentNode.querySelector("p").textContent = "No puedes dejar la contraseña vacía"
            newpasswdEl.parentNode.querySelector("p").textContent = "No puedes dejar la verificación de contraseña vacía"
            passwdEl.parentNode.classList.add("error")
            newpasswdEl.parentNode.classList.add("error")
            return false
        }
        let passwd = passwdEl.value
        let newpasswd = newpasswdEl.value
        
        if (passwd.length < 8 || newpasswd.length < 8){
            passwdEl.parentNode.querySelector("p").textContent = "La contraseña debe de tener 8 carácteres o mas"
            newpasswdEl.parentNode.querySelector("p").textContent = "La contraseña debe de tener 8 carácteres o mas"
            passwdEl.parentNode.classList.add("error")
            newpasswdEl.parentNode.classList.add("error")
            return false
        }

        
        if (passwd !== newpasswd){
            passwdEl.parentNode.querySelector(".error-feedback").textContent = "Las contraseñas no coinciden"
            newpasswdEl.parentNode.querySelector(".error-feedback").textContent = "Las contraseñas no coinciden"
            passwdEl.parentNode.classList.add("error")
            newpasswdEl.parentNode.classList.add("error")
            return false
        }
        return true
    }

    //valida si el elemtno no es nulo, si la fecha no está vacia, y si el formato de la fecha es yyyy-mm-dd
    function validaFecha(fechaEl){
        var regEx = /^\d{4}-\d{2}-\d{2}$/;
        if (fechaEl == null || fechaEl === ""){
            fechaEl.parentNode.querySelector(".error-feedback").textContent = "La fecha no puede estar vacía"
            fechaEl.parentNode.classList.add("error")
            return false
        }

        if (fechaEl.value.match(regEx) == null){
            fechaEl.parentNode.querySelector(".error-feedback").textContent = "El formato de fecha no es válido"
            fechaEl.parentNode.classList.add("error")
            return false
        }

        return true
    }

    //valida si la casilla está marcada
    function validaCheck(el){
        if (el.checked){
            el.parentNode.querySelector(".error-feedback").textContent = ""
            return true;
        }
        el.parentNode.querySelector(".error-feedback").textContent = "Tiene que marcar la casilla"
    }

    //remueve todas las clases .error, y elimina el texto de todos las etiquetas "p" y de los elementos con clase .error-feedback
    function resetCasillas(){
        usuario.parentNode.querySelector("p").textContent = ""
        usuario.parentNode.classList.remove("error")

        passwd.parentNode.querySelector("p").textContent = ""
        newpasswd.parentNode.querySelector("p").textContent = ""
        passwd.parentNode.classList.remove("error")
        newpasswd.parentNode.classList.remove("error")        
    
        fechaNac.parentNode.querySelector(".error-feedback").textContent = ""
        fechaNac.parentNode.classList.remove("error")
    
        edad.parentNode.querySelector("p").textContent = ""
        edad.parentNode.classList.remove("error")
        
    }

    //valida que el elemento no sea nulo, que la fecha no esté vacia, que lo introducido sea un numero y que sea mayor que 0 y menor que 120
    function validaEdad(edadEl){
        if (edadEl == null || edadEl.value === ""){
            edadEl.parentNode.querySelector("p").textContent = "La edad no puede estar vacía"
            edadEl.parentNode.classList.add("error")
        }

        let edadV = edadEl.value
        edadV = Number(edadV)
        if (isNaN(edadV)){
            edadEl.parentNode.querySelector("p").textContent = "La edad introducida debe de ser un número"
            edadEl.parentNode.classList.add("error")
            return false
        }
        if (edadV < 0 || edadV > 120){
            edadEl.parentNode.querySelector("p").textContent = "Edad inválida"
            edadEl.parentNode.classList.add("error")
            return false
        }
        return true
        }

    //---------Funciones de utilidad---------
    function marcaError(elemento,mensaje){
        elemento.parentNode.querySelector(".error-feedback").textContent = mensaje
        elemento.parentNode.classList.add("error")
    }

    function marcaValido(elemento){
        elemento.parentNode.querySelector(".error-feedback").textContent = ""
        elemento.parentNode.classList.remove("error")
    }
})