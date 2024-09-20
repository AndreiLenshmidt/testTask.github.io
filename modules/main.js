import { getCity, addCity } from "./getCity.js";
import { getWeather, addWeather } from "./getWeather.js";
import { time } from "./clock.js";
import { setBackground } from "./setBackground.js";
import { findLocation } from "./navigator.js";
import "./listTasks.js";

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
