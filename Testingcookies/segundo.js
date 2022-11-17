function checkifCookieExist(cookie){
    const url = `https://retoolapi.dev/DfG0sg/proyecttesting?sessId=${cookie}`
    let response = fetch(url).then(r=>r.json())
    return response
}

function checkCookie(){
    return document.cookie.replace(/(?:(?:^|.*;\s*)sessID\s*\=\s*([^;]*).*$)|^.*$/, "$1");
}

async function checkIfAccess(){
    const cookie = checkCookie()
    if (cookie){
        const response = await checkifCookieExist(cookie)
        if (response.length === 1){
            console.log("puede cargar")
        }else{
            document.getElementsByTagName("body")[0].innerHTML = "<h1>Tienes que generar una cookie para poder estar aqui</h1>"
        }
    }else{
        document.getElementsByTagName("body")[0].innerHTML = "<h1>Tienes que generar una cookie para poder estar aqui</h1>"
    }
}

checkIfAccess()

function anteriorPagina(){
    window.open("./index.html","_self")
}

function deleteCookie() {
    document.cookie = "sessID" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

try{
    const delCookie = document.getElementById("btn03")
    const prevPage = document.getElementById("btn04")
    const checker = document.getElementById("btn05")

    prevPage.addEventListener("click",anteriorPagina)
    delCookie.addEventListener("click",deleteCookie)
    checker.addEventListener("click",()=>{
        console.log(checkCookie())
    })
}
catch(e){
    
}

async function getIdFromCookie(cookie){
    const petition = await fetch(`https://api-generator.retool.com/DfG0sg/proyecttesting?sessId=${cookie}`).then(r=>r.json())
    if (petition.length !== 0){
        const id = petition[0].id
        return id
    }
    return null
}

async function deleteServerCookie(cookie){
    const id = await getIdFromCookie(cookie)
    fetch(`https://api-generator.retool.com/DfG0sg/proyecttesting/${id}`, {
    method: "DELETE"
    }).then(r=>{
        if (r.ok){
            console.log("borrado")
        }
    })
}

window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = "\o/";
    
    if (checkCookie()){
        deleteServerCookie(checkCookie())
        deleteCookie()
    }

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage;                            //Webkit, Safari, Chrome
  });