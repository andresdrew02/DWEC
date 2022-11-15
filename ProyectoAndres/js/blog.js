const postsActioner = document.getElementById("posts")
const usuariosActioner = document.getElementById("usuarios")
const userUrl = "https://jsonplaceholder.typicode.com/users"
const tableDisplay = document.getElementById("table-body")
const tableEl = document.querySelector("table")

async function getUsers(){
    try{
        const userList = await fetch(userUrl)
            .then(data => data.json())
            .then(userList => {
                return userList
            })
            .catch(err =>{
                throw err
            })

        pintaUsuarios(userList)
    }
    catch(e){
    }
}

function desocultarTabla(){
    tableEl.classList.remove("oculto")
}

function ocultarTabla(){
    tableEl.classList.add("oculto")
}

function pintaUsuarios(listaUsers){
    listaUsers.forEach(e=>{
        let htmlStructure = getStructure(e.id,e.username,e.name,e.email)
        console.log(e)
        tableDisplay.innerHTML += htmlStructure
    })
}

function getStructure(id,user,fullname,email){
    return `
    <tr>
        <th scope="row">${id}</th>
        <td>${user}</td>
        <td>${fullname}</td>
        <td>${email}</td>
        <td><a href="#">Mostrar Posts</td>
    </tr>
    `
}

usuariosActioner.addEventListener("click",()=>{
    desocultarTabla()
    getUsers()
     
})