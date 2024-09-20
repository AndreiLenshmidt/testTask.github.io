import { showMessage } from "./modal.js";

export function findLocation(loadWeather) {
  navigator.geolocation.getCurrentPosition(success, error);

  async function success(position) {
    const { longitude, latitude } = position.coords;
    console.log(
      "longitude:",
      longitude.toFixed(2),
      "latitude:",
      latitude.toFixed(2)
    );

    loadWeather(longitude, latitude);
  }

  function error() {
    showMessage("Ваш город Краснодар?", "Не удалось определить геолокацию...");
    loadWeather(39.02, 45.06);
  }
}
