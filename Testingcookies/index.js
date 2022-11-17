function getCookie(length=25){
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateId(){
    return fetch("https://retoolapi.dev/DfG0sg/proyecttesting").then(r=>r.json())
}

function setcookie(id,cookie){
    let response = fetch(`https://api-generator.retool.com/DfG0sg/proyecttesting`, {
    body: `{"id":${id},"sessId":"${cookie}"}`,
    headers: {
        "Content-Type": "application/json"
    },
    method: "POST"
    })

    return response
}

async function generarCookie(){
    const cookie = getCookie()
    const arr_cookies = await generateId()
    const id = arr_cookies.length + 1

    const response = await setcookie(id,cookie)
    if (response.ok == true){
        document.cookie = `sessID=${cookie}`
        window.open("./segunda_pagina.html","_self").document.cookie = `sessID=${cookie}`
    }
}

function borrarCookie(){

}

function siguientePagina(){
    window.open("./segunda_pagina.html","_self").document.cookie 
}

const genCookie = document.getElementById("btn01")
const nextPage = document.getElementById("btn02")

nextPage.addEventListener("click",siguientePagina)
genCookie.addEventListener("click",generarCookie)


