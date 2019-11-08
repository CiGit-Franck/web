
const urlHumidity = `https://distorted-louse-3971.dataplicity.io/top-measure/humidity`;
const urlTemperature = `https://distorted-louse-3971.dataplicity.io/top-measure/temperature`;
const urlPressure = `https://distorted-louse-3971.dataplicity.io/top-measure/pressure`;

const requestHumidity = new XMLHttpRequest();
const requestTemperature = new XMLHttpRequest();
const requestPressure = new XMLHttpRequest();

requestHumidity.open('GET', urlHumidity, true);
requestTemperature.open('GET', urlTemperature, true);
requestPressure.open('GET', urlPressure, true);

requestHumidity.onload = function () {
    if (requestHumidity.status >= 200 && requestHumidity.status < 400) {
        const jsonResult = JSON.parse(this.response);
        // on affecte les elements du DOM
        document.getElementById("top-humidity-date").innerHTML = "Top humidité le " + getFormattedDate(new Date(jsonResult.measureDate));
        document.getElementById("top-humidity-temperature").innerHTML = "Température : " + jsonResult.temperature + " °C";
        document.getElementById("top-humidity-humidity").innerHTML = "Humidité : " + jsonResult.humidity + " % humidité";
        document.getElementById("top-humidity-presure").innerHTML = "Pression : " + jsonResult.pressure + " hPa";
    } else {
        console.log('Erreur ...')
    }
}
requestTemperature.onload = function () {
    if (requestTemperature.status >= 200 && requestTemperature.status < 400) {
        const jsonResult = JSON.parse(this.response);
        // on affecte les elements du DOM
        document.getElementById("top-temperature-date").innerHTML = "Top température le " + getFormattedDate(new Date(jsonResult.measureDate));
        document.getElementById("top-temperature-temperature").innerHTML = "Température : " + jsonResult.temperature + " °C";
        document.getElementById("top-temperature-humidity").innerHTML = "Humidité : " + jsonResult.humidity + " % humidité";
        document.getElementById("top-temperature-presure").innerHTML = "Pression : " + jsonResult.pressure + " hPa";
    } else {
        console.log('Erreur ...')
    }
}
requestPressure.onload = function () {
    if (requestPressure.status >= 200 && requestPressure.status < 400) {
        const jsonResult = JSON.parse(this.response);
        // on affecte les elements du DOM
        document.getElementById("top-presure-date").innerHTML = "Top pression le " + getFormattedDate(new Date(jsonResult.measureDate));
        document.getElementById("top-presure-temperature").innerHTML = "Température : " + jsonResult.temperature + " °C";
        document.getElementById("top-presure-humidity").innerHTML = "Humidité : " + jsonResult.humidity + " % humidité";
        document.getElementById("top-presure-presure").innerHTML = "Pression : " + jsonResult.pressure + " hPa";
    } else {
        console.log('Erreur ...')
    }
}

// Send request
requestHumidity.send();
requestTemperature.send();
requestPressure.send();

function getFormattedDate(date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return day + '/' + month + '/' + year;
}
