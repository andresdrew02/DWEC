const url = "https://jsonplaceholder.typicode.com/posts/"
const userUrl = "https://jsonplaceholder.typicode.com/users/"

//recuperar un post
const getPost = (id,cb) => {
    fetch(`${url}`+`${id}`)
        .then(data => data.json())
        .then(post => cb(post))
        .catch(e => console.log(e))
}

//recuperar nombre de usuario del post
getPost(7,
    (p)=>{
        fetch(`${userUrl}`+`${p.userId}`)
        .then(data => data.json())
        .then(user => console.log(user.name))
        .catch(e => console.log(e))
    }
)

//con await & async
const getNombreAsync = async (idPost) =>{
    try{
        const resPost = await fetch(`${url}`+`${idPost}`)
        const post = await resPost.json()
        const userId = post.userId

        const user = await (await fetch(`${userUrl}`+`${userId}`)).json()
        console.log(post)
        console.log(user)
    }
    catch(e){
        console.log(e)
    }
}

getNombreAsync(1)
