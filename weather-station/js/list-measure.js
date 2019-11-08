const urlServer = `https://distorted-louse-3971.dataplicity.io/measure/date?startDate=${todayFormated()}&endDate=${todayFormated()}`;

const request = new XMLHttpRequest();

// appel 
request.open('GET', urlServer, true);

// chargement
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        const jsonResult = JSON.parse(this.response);
        let table = document.getElementById('measure');
        // on affecte les elements du DOM en creant ligne cellule
        for (let measure of jsonResult) {
            let row = document.createElement('tr');
            let cell = document.createElement('td');
            cell.innerHTML = getFormattedDate(new Date(measure.measureDate));
            row.appendChild(cell);
            cell = document.createElement('td');
            cell.innerHTML = measure.temperature;
            row.appendChild(cell);
            cell = document.createElement('td');
            cell.innerHTML = measure.humidity;
            row.appendChild(cell);
            cell = document.createElement('td');
            cell.innerHTML = measure.pressure;
            row.appendChild(cell);
            table.appendChild(row);
        }
        // console.log('je suis passé avec url : '+urlServer);
    } else {
        console.log('Erreur ...')
    }
}

// reponse
request.send();

// Formate la date du jour : YYYY-MM-DD
function todayFormated() {
    var today = new Date();
    var year = today.getFullYear();

    var month = (1 + today.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = today.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return `${year}-${month}-${day}`;
}

// Formate la date JJ/MM/YYYY HH:MM:SS
function getFormattedDate(date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    var hour = date.getHours().toString();
    hour = hour.length > 1 ? hour : '0' + hour;

    var minute = date.getMinutes().toString();
    minute = minute.length > 1 ? minute : '0' + minute;

    var second = date.getSeconds().toString();
    second = second.length > 1 ? second : '0' + second;

    return day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second;
}
