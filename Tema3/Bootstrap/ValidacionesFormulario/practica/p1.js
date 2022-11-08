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
    //TODO
    function validarPassword(password){
        const regexp = /^([\w|\d|@|\||-|.|,|;|:|?|]{8,10})$/i
        const listaSimbolos = "@|-.,;:?¿¡!$%&/()/|"
        console.log(regexp.test("Password1@"))
    }

    function testfn(){
        validarPassword()
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