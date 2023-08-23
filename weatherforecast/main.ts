import { WeatherMeta } from "./types";

function getData() {
  const temp = document.querySelector("#location") as HTMLInputElement;
  const data: string = temp.value;
  console.log(data);
  const url =
    "http://api.weatherapi.com/v1/forecast.json?key=63435cf5cea5413888b102152232208&q=" +
    data +
    "&days=5&aqi=no&alerts=no";
  fetch(url)
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then((data: WeatherMeta) => {
      console.log("data:", data.forecast.forecastday);
      // displaying the data
    })
    .catch((error) => {
      console.log("error", error);
    });
}
