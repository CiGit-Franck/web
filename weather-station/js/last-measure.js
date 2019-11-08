
const urlServer = `https://distorted-louse-3971.dataplicity.io/last-measure`;

const request = new XMLHttpRequest();

request.open('GET', urlServer, true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        const jsonResult = JSON.parse(this.response);
        // on affecte les elements du DOM
        document.getElementById("measure-date").innerHTML = "Dernière mesure du " + getFormattedDate(new Date(jsonResult.measureDate));
        document.getElementById("measure-temperature").innerHTML = "Température : " + jsonResult.temperature + " °C";
        document.getElementById("measure-humidity").innerHTML = "Humidité : " + jsonResult.humidity + " % humidité";
        document.getElementById("measure-pressure").innerHTML = "Pression : " + jsonResult.pressure + " hPa";
    } else {
        console.log('Erreur ...')
    }
}

// Send request
request.send();

function getFormattedDate(date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return day + '/' + month + '/' + year;
}
