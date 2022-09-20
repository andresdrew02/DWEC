const FLIGHT = 100
const HOTEL = 60
const TOUR = 20
const TOTAL = FLIGHT+HOTEL+TOUR
const BUDGET = 250

if (BUDGET > TOTAL){
    console.log("Te puedes ir de viaje")   
}else if(BUDGET === TOTAL){
    console.log("Tambien te puedes ir de viaje")
    //no se porque no se ha puesto en el mayor igual xd
}else{
    console.log("No tienes el presupuesto para irte de viaje")
}

const RESULTADO = BUDGET>=TOTAL ? console.log("puedes irte de viaje") : console.log("no puedes irte de viaje")
