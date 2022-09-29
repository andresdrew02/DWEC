document.addEventListener('DOMContentLoaded', function () {
    const displayEl = document.getElementById("display")
    const apiURL = "https://ipapi.co/"
    const format = "json"
    const btn01 = document.getElementById("acbtn")
    //Expresión regular para comprobar si la IP introducida es una IP válida
    const regexExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

    /*
    Para testing
    const testInfo = '{ "ip": "193.110.128.199", "network": "193.110.128.0/24", "version": "IPv4", "city": "Madrid", "region": "Madrid", "region_code": "MD", "country": "ES", "country_name": "Spain", "country_code": "ES", "country_code_iso3": "ESP", "country_capital": "Madrid", "country_tld": ".es", "continent_code": "EU", "in_eu": true, "postal": "28023", "latitude": 40.4163, "longitude": -3.6934, "timezone": "Europe/Madrid", "utc_offset": "+0200", "country_calling_code": "+34", "currency": "EUR", "currency_name": "Euro", "languages": "es-ES,ca,gl,eu,oc", "country_area": 504782.0, "country_population": 46723749, "asn": "AS9052", "org": "Unidad Editorial S.A." }'
    const testIP = "193.110.128.199"
    const testJSON = JSON.parse(testInfo)
    Object.keys(testJSON).forEach(e => displayEl.innerHTML += `<li>${e.toUpperCase()}: ${testJSON[e]}</li>`)    
    */

    //Solicitud a la API
    function loadDoc(ip) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            //si la respuesta es correcta..
            if (this.readyState == 4 && this.status == 200) {
                responseJSON = JSON.parse(this.responseText)
                displayEl.innerHTML = "";
                Object.keys(responseJSON).forEach(e => displayEl.innerHTML += `<li>${e.toUpperCase()}: ${responseJSON[e]}</li>`)
            }
        };
        xhttp.open("GET", apiURL + ip + "/" + format);
        xhttp.send();
    }

    //Listener del botón
    btn01.addEventListener('click',function(){
        let ipUSU = document.getElementById("usIP").value
        //mostrar mensaje de error o realizar petición
        regexExp.test(ipUSU) ? loadDoc(ipUSU) : displayEl.innerHTML = '<div class="alert alert-danger w-75 ml-5" role="alert"><strong>Error: </strong>La dirección IP introducida es invalida.</div>'
    })
})