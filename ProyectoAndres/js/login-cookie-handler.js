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

//TODO fix this shit
async function deleteServerCookie(cookie){
    const cookieObject = await getId(cookie)
    const cookieId = cookieObject[0].id
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

