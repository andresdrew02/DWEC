let operaciones = []

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

const loadfn = () =>{
    let resultado = operationHandler(askOperation())
    console.log(resultado)
}

const askOperation = () => {
    readline.question('Escribe la operación que quieras resolver: ', operation => {
        readline.close();
        return operation
      });
}

const operationHandler = (operation) =>{
    try{
        return `El resultado de ${operation} es: ${eval(operation)}`
    }
    catch(error){
        return 'Introduzca una operación válida'
    }
}

loadfn()