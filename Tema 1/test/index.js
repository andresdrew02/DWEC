document.addEventListener('DOMContentLoaded', function () {
    const displayEl = document.getElementById("display")
    const apiURL = "https://ipapi.co/"
    const format = "json"
    const testIP = "193.110.128.199"
    const testInfo = '{ "ip": "193.110.128.199", "network": "193.110.128.0/24", "version": "IPv4", "city": "Madrid", "region": "Madrid", "region_code": "MD", "country": "ES", "country_name": "Spain", "country_code": "ES", "country_code_iso3": "ESP", "country_capital": "Madrid", "country_tld": ".es", "continent_code": "EU", "in_eu": true, "postal": "28023", "latitude": 40.4163, "longitude": -3.6934, "timezone": "Europe/Madrid", "utc_offset": "+0200", "country_calling_code": "+34", "currency": "EUR", "currency_name": "Euro", "languages": "es-ES,ca,gl,eu,oc", "country_area": 504782.0, "country_population": 46723749, "asn": "AS9052", "org": "Unidad Editorial S.A." }'


    function loadDoc() {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            //si la respuesta es correcta..
            if (this.readyState == 4 && this.status == 200) {
                responseJSON = JSON.parse(this.responseText)
                Object.keys(responseJSON).forEach(e => displayEl.innerHTML += `<li>${responseJSON[e]}`)
            }
        };
        xhttp.open("GET", apiURL + testIP + "/" + format);
        xhttp.send();
    }

    // const testJSON = JSON.parse(testInfo)
    // Object.keys(testJSON).forEach(e => displayEl.innerHTML += `<li>${testJSON[e]}`)


    //loadDoc()


})