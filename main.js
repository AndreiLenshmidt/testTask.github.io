import { getCity, addCity } from "../modules/getCity.js";
import { getWeather, addWeather } from "../modules/getWeather.js";
import { time } from "../modules/clock.js";
import { setBackground } from "../modules/setBackground.js";
import { findLocation } from "../modules/navigator.js";
import "../modules/listTasks.js";

const loadWeather = async (longitude, latitude) => {
  await getCity(longitude.toFixed(2), latitude.toFixed(2));
  console.log(localStorage.getItem("city"));
  const weather = await getWeather(longitude.toFixed(2), latitude.toFixed(2));
  addWeather(weather);
  addCity();
  console.log(weather);
};

document.addEventListener("DOMContentLoaded", setBackground);
document.addEventListener("DOMContentLoaded", () => findLocation(loadWeather));
time();
