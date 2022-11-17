const formEl = document.getElementById("login-form")
const userEl = document.getElementById("username")
const pwdEl = document.getElementById("password")
const userDisplayer = document.getElementById("display_userName")
const pwdDisplayer = document.getElementById("display_userPwd")
const url = "https://jsonplaceholder.typicode.com/users?username="

function checkBlank(string){
    if (string.trim()){
        return true
    }
    return false
}

function resetErrores(){
    userEl.classList.remove("error")
    userDisplayer.innerHTML = ""

    pwdEl.classList.remove("error")
    pwdDisplayer.innerHTML = ""
}

function errorUsuario(msg){
    userEl.classList.add("error")
    userDisplayer.innerHTML = `*${msg}*`
}

function errorPassword(msg){
    pwdEl.classList.add("error")
    pwdDisplayer.innerHTML = `*${msg}`
}

function errorGeneral(){
    errorUsuario("El nombre de usuario o la contraseña es inválida.")
    pwdEl.classList.add("error")
}

async function checkLogin(username,pwd){
    resetErrores()
    try{  
        const petUrl = `${url}`+`${username}`
        const user = await (await fetch(petUrl)).json()

        if (user.length === 0){
            throw new Error("npnv") //nombre password no validos
        }
        const userZip = user[0].address.zipcode
        
        if (pwd !== userZip){
            throw new Error("pnv") //password no valida
        }

        //abrir nueva ventana en la misma pestaña
        await createCookie()
        window.open("./sites/blog.html","_self").document.cookie = document.cookie
    }
    catch(e){
        //por si queremos procesar los errores de distina forma, en este caso por simular
        //un caso real de seguridad, no haremos saber al usuario si lo que ha fallado ha sido el user o la pwd
        if (e.message === "npnv"){
            errorGeneral()
        }else if(e.message === "pnv"){
            errorGeneral()
        }
    }
}

formEl.addEventListener("submit",(e)=>{
    resetErrores()
    e.preventDefault()
    e.stopPropagation()

    const userCheck = checkBlank(userEl.value)
    const pwdCheck = checkBlank(pwdEl.value)

    try{
        if (!userCheck){
            throw new Error("user")
        }

        if (!pwdCheck){
            throw new Error("pwd")
        }

        const finUser = userEl.value.trim()
        //const finPwd = pwdEl.value.trim() no se debe de trimear las contraseñas
        checkLogin(finUser,pwdEl.value)
    }
    catch(e){
        //procesar error
        if (e.message === "user"){
            errorUsuario("El nombre de usuario no puede estar vacío.")
        }else if (e.message === "pwd"){
            errorPassword("La contraseña no puede estar vacía.")
        }else{

        }
    }
})