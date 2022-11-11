//Ejemplo de CallBack Hell
const URL1 = "datos1.json";
const URL2 = "datos2.json";
const URL3 = "datos3.json";
const URL4 = "datos4.json";

function descargar(url, cb) {
  console.log(`Descagando fichero de: ${url}`);
  setTimeout(() => {
    console.log("Descargado...");
    let fichero = "HEELLOOU";
    cb(fichero);
  }, 2000);
}

//cb hell
// descargar(URL1, (archivo) => {
//   console.log(`El contenido del fichero es ${archivo}`);
//   descargar(URL2, (archivo) => {
//     console.log(`El contenido del fichero es ${archivo}`);
//     descargar(URL3, (archivo) => {
//       console.log(`El contenido del fichero es ${archivo}`);
//       descargar(URL4, (archivo) => {
//         console.log(`El contenido del fichero es ${archivo}`);
//       });
//     });
//   });
// });

//El CB HELL lo evitamos con proemsas

let promise = new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            console.log("Descargando...")
            resolve("Descargado con éxito")
        },2000)
    })

promise
    .then(data => console.log(`Los datos descargados son ${data}`))
    .catch(error => console.log(`Ha habido un error \n\n ${error}`))

