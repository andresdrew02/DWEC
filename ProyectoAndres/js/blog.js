const postsActioner = document.getElementById("posts")
const usuariosActioner = document.getElementById("usuarios")
const userUrl = "https://jsonplaceholder.typicode.com/users"
const postUrl = "https://jsonplaceholder.typicode.com/posts?userId="
const useridUrl = "https://jsonplaceholder.typicode.com/users?id="
const postsUrl = "https://jsonplaceholder.typicode.com/posts/"
const tableDisplay = document.getElementById("table-body")
const tableEl = document.querySelector("table")
const postsEl = document.querySelector(".posts")
const userEl = document.querySelector(".user")

let usersMostrado = false

async function getUsers() {
    try {
        const userList = await fetch(userUrl)
            .then(data => data.json())
            .then(userList => {
                return userList
            })
            .catch(err => {
                throw err
            })

        pintaUsuarios(userList)
        usersMostrado = true
    }
    catch (e) {
    }
}

function desocultarTabla() {
    tableEl.classList.remove("oculto")
}

function ocultarTabla() {
    tableEl.classList.add("oculto")
}

function pintaUsuarios(listaUsers) {
    listaUsers.forEach(e => {
        let htmlStructure = getUsersStructure(e.id, e.username, e.name, e.email)
        tableDisplay.innerHTML += htmlStructure
    })
}

function getUsersStructure(id, user, fullname, email) {
    return `
    <tr dataset-id=${id}>
        <th scope="row">${id}</th>
        <td class="nombre_usuario" onclick="obtenerUsuario(${id})">${user}</td>
        <td>${fullname}</td>
        <td>${email}</td>
        <td onclick="obtenerPosts(${id})"><a href="#">Mostrar Posts</td>
    </tr>
    `
}

usuariosActioner.addEventListener("click", () => {
    if (!usersMostrado) {
        desocultarTabla()
        getUsers()
    }
})

//-------------------------------------

async function obtenerPosts(id, start = 0, end = 5) {
    borrarPosts()
    borrarUsuario()

    try {
        const postLists = await (await fetch(`${postUrl}${id}&_start=${start}&_end=${end}`)).json()
        const user = await buscarUsuario(id)
        postsEl.style.display = "flex"
        postLists.forEach(e => {
            pintaPost(getPostStructure(e,user))
        })
        anyadirEncabezado(user.id,5)
        


    }
    catch (e) {
        console.log(e)
    }
}


function pintaPost(post){
    postsEl.innerHTML += post
}



function borrarPosts() {
    postsEl.innerHTML = ""
}

function anyadirEncabezado(userId, end) {
    postsEl.innerHTML += `
            <ul class="pagination">
            <li class="page-item"><a class="page-link" onclick="obtenerPosts(${userId})">Anterior</a></li>
            <li class="page-item"><a class="page-link" onclick="obtenerPosts(${userId})">1</a></li>
            <li class="page-item"><a class="page-link" onclick="obtenerPosts(${userId},${end},${Number(end + 5)})">2</a></li>
            <li class="page-item"><a class="page-link" onclick="obtenerPosts(${userId},${end},${Number(end + 5)})">Siguiente</a></li>
            </ul>
            `
}


function getPostStructure(post, user) {
    return `
        <div class="post">
        <div class="post_header">
        <h1>Post ID: ${post.id}</h1>
        </div>
        <div class="post_body">
        <div class="post_title">
            <label>Titulo: </label> ${post.title}
        </div>
        <div class="post_content">
            <label>Post: </label> ${post.body}
        </div>
        <div class="post_content">
            <label>Nombre de usuario: </label> <i title="Dame click para ver el perfíl de este usuario" onclick="obtenerUsuario(${user.id})">${user.username}</i>
        </div>
        </div>
        </div>
        `
}

// --------------------------------------------------

function borrarUsuario() {
    userEl.innerHTML = ""
}

async function obtenerUsuario(id) {
    let user = await buscarUsuario(id, pintaUsuario)
    pintaUsuario(user)
    
}

async function buscarUsuario(id) {
    try {
        return await fetch(useridUrl + id)
            .then(userData => userData.json())
            .then(user => {
                return user[0]
            })
            .catch(err => {
                throw err
            })
    } catch (e) {

    }

}

function pintaUsuario(user) {
    borrarUsuario()
    borrarPosts()
    const userStructure = getUserStructure(user)
    userEl.innerHTML = userStructure

}

function getUserStructure(user) {
    return `
    <h1>Información del usuario con ID: ${user.id}</h1>
    <div class="row gutters-sm">
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle"
                width="150">
              <div class="mt-3">
                <h4>${user.name}</h4>
                <p class="text-white-50 font-size-sm">${user.address.city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card mb-3">
          <div class="card-body">

            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Nombre de usuario</h6>
              </div>
              <div class="col-sm-9 text-white-50">
                ${user.username}
              </div>
            </div>
            <hr>

            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Nombre completo</h6>
              </div>
              <div class="col-sm-9 text-white-50">
                ${user.name}
              </div>
            </div>
            <hr>

            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Email</h6>
              </div>
              <div class="col-sm-9 text-white-50">
                ${user.email}
              </div>
            </div>
            <hr>

            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Dirección</h6>
              </div>
              <div class="col-sm-9 text-white-50">
                ${user.address.street} , ${user.address.suite}
              </div>
            </div>
            <hr>

            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Ciudad</h6>
              </div>
              <div class="col-sm-9 text-white-50">
                ${user.address.city}
              </div>
            </div>
            <hr>

            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Phone</h6>
              </div>
              <div class="col-sm-9 text-white-50">
                ${user.phone}
              </div>
            </div>
            <hr>

            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Página web</h6>
              </div>
              <div class="col-sm-9 text-white-50">
                ${user.website}
              </div>
            </div>
            <hr>

            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Empresa</h6>
              </div>
              <div class="col-sm-9 text-white-50">
                ${user.company.name}
              </div>
            </div>
            <hr>

            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Eslógan de su empresa</h6>
              </div>
              <div class="col-sm-9 text-white-50">
                ${user.company.catchPhrase}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    `
}

//-----------------------------

async function getAllPosts(){
  borrarUsuario()
  borrarPosts()

  let posts = await (await fetch(postsUrl)).json()
  postsEl.style.display = "flex"
  posts.forEach(e => {
    procesarUsuario(e.userId,(u)=>{
      pintaPost(getPostStructure(e,u))
    })
  })
}

async function procesarUsuario(id,cb){
  let user = buscarUsuario(id).then(u => cb(u))
}

postsActioner.addEventListener("click",()=>{
  getAllPosts()
})