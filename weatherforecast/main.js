"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getData() {
    var temp = document.querySelector("#location");
    var data = temp.value;
    console.log(data);
    var url = "http://api.weatherapi.com/v1/forecast.json?key=63435cf5cea5413888b102152232208&q=" +
        data +
        "&days=5&aqi=no&alerts=no";
    fetch(url)
        .then(function (response) {
        console.log("response", response);
        return response.json();
    })
        .then(function (data) {
        console.log("data:", data.forecast.forecastday);
        // displaying the data
    })
        .catch(function (error) {
        console.log("error", error);
    });
}

window.getData=getData;