document.addEventListener("DOMContentLoaded",function(){
    const nombreCompleto = document.getElementById("nombreCompleto")
    const nombreUsuario = document.getElementById("uname")
    const password = document.getElementById("password")
    const email = document.getElementById("email")
    const dni = document.getElementById("dni")
    const codigoPostal = document.getElementById("cp")
    const cuentaTarjeta = document.getElementById("cuentaTarjeta")
    const form = document.querySelector("form")

    function validarNombreCompleto(nombre){
        const regexp = /\D*/i
        return regexp.exec(nombre)[0].length == nombre.length        
    }

    function validarNombreUsuario(username){
        const regexp = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
        return regexp.test(username)
    }

    function validarPassword(password){
        //min 8 longitud,1caracter mayuscula o minuscula y un alfanumérico
        const regexp = /^(((?=.*[a-z|A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]))(?=.*[0-9]))(?=.{8,10})/
        return regexp.test(password)
    }

    //TODO
    function validarEmail(email){

    }
    

    function testfn(){

    }

    testfn()
    form.addEventListener("submit",validarFormulario())

    function validarFormulario(){
        if (!validarNombreCompleto(nombreCompleto.value)){

        }
        
        if (!validarNombreUsuario(nombreUsuario.value)){
            
        }


    }
})