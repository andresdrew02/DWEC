const cookieAPI = "https://retoolapi.dev/JpTwp0/proyectoandres"

function mainFun(){
    const cookie = checkCookie()
    if (cookie){
        checkServerCookie(cookie)
    }else{
        if (!document.URL.includes("index.html")) {
            window.open("../index.html","_self")
        }
    }
}

mainFun()

function checkCookie(){
    return document.cookie.replace(/(?:(?:^|.*;\s*)sessId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
}

function deleteCookie() {
    document.cookie = "sessId" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

async function checkServerCookie(cookie){
    const response = await fetch (`${cookieAPI}?sessId=${cookie}`).then(r=>r.json())
    if (response.length != 0){
        if (response[0].sessId === cookie){
            if (!document.URL.includes("blog.html")) {
                window.open("./sites/blog.html","_self").document.cookie = document.cookie
            }
        }else{
            deleteCookie()
        }
    }else{
        deleteCookie()
        window.open("../index.html","_self")
    }
}

function getId(cookie){
    const response = fetch(`${cookieAPI}?sessId=${cookie}`).then(r=>r.json())
    return response
}

async function deleteServerCookie(cookie){
    const cookieObject = await getId(cookie)
    const cookieId = cookieObject[0].id
    console.log(cookieId)
    const response = await fetch(`https://api-generator.retool.com/JpTwp0/proyectoandres/${cookieId}`, {
    method: "DELETE"
    })
    if (response.ok){
         deleteCookie()
         window.open("../index.html","_self").document.cookie = "sessId" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
     }
}

function cerrarSesion(){
    deleteServerCookie(checkCookie())
}

//metodo de internet, hehe
function genCookie(length=25){
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

async function createCookie(){
    const d = new Date()
    d.setHours(d.getHours+3)
    const cookie = genCookie()
    document.cookie = `sessId=${cookie}; expires=${d.toUTCString()}`
    
    const idresponse = await genId()
    let id = idresponse.length+1
    await createServerCookie(id,cookie)
}

function genId(){
    const response = fetch("https://api-generator.retool.com/JpTwp0/proyectoandres").then(r=>r.json())
    return response
}

function createServerCookie(id,cookie){
    const response = fetch("https://api-generator.retool.com/JpTwp0/proyectoandres", {
    body: `{"id":"${id}","sessId":"${cookie}"}`,
    headers: {
        "Content-Type": "application/json"
    },
    method: "POST"
    }).then(r=>r.json())
    return response
}

