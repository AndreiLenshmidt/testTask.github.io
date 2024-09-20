const weatherCodes = new Map();
weatherCodes
  .set(0, {
    name: "Ясное небо",
    icon: '<i class="bi bi-brightness-high"></i>',
  })
  .set(1, {
    name: "Преимущественно ясно",
    icon: '<i class="bi bi-brightness-high"></i>',
  })
  .set(2, {
    name: "Переменная облачность",
    icon: '<i class="bi bi-cloud-sun"></i>',
  })
  .set(3, {
    name: "Пасмурно",
    icon: '<i class="bi bi-cloud"></i>',
  })
  .set(45, {
    name: "Туман и оседающий изморозь",
    icon: '<i class="bi bi-cloud-fog"></i>',
  })
  .set(48, {
    name: "Туман и оседающий изморозь",
    icon: '<i class="bi bi-cloud-fog"></i>',
  })
  .set(51, {
    name: "Мелкий дождь, слабая изморось",
    icon: '<i class="bi bi-cloud-drizzle"></i>',
  })
  .set(53, {
    name: "Мелкий дождь, умеренная изморось",
    icon: '<i class="bi bi-cloud-drizzle"></i>',
  })
  .set(55, {
    name: "Мелкий дождь, интенсивная изморось",
    icon: '<i class="bi bi-cloud-drizzle"></i>',
  })
  .set(56, {
    name: "Замерзающая морось слабой интенсивности",
    icon: '<i class="bi bi-cloud-sleet"></i>',
  })
  .set(57, {
    name: "Замерзающая морось высокой интенсивности",
    icon: '<i class="bi bi-cloud-sleet"></i>',
  })
  .set(61, {
    name: "Слабый дождь",
    icon: '<i class="bi bi-cloud-rain"></i>',
  })
  .set(63, {
    name: "Умеренный дождь",
    icon: '<i class="bi bi-cloud-rain"></i>',
  })
  .set(65, {
    name: "Сильный дождь",
    icon: '<i class="bi bi-cloud-rain"></i>',
  })
  .set(66, {
    name: "Ледяной дождь",
    icon: '<i class="bi bi-cloud-sleet"></i>',
  })
  .set(67, {
    name: "Сильный ледяной дождь",
    icon: '<i class="bi bi-cloud-sleet"></i>',
  })
  .set(71, {
    name: "Снегопад",
    icon: '<i class="bi bi-cloud-snow"></i>',
  })
  .set(73, {
    name: "Умеренный снегопад",
    icon: '<i class="bi bi-cloud-snow"></i>',
  })
  .set(75, {
    name: "Интенсивный снегопад",
    icon: '<i class="bi bi-cloud-snow"></i>',
  })
  .set(77, {
    name: "Снегопад, крупный снежные хлопья",
    icon: '<i class="bi bi-snow"></i>',
  })
  .set(80, {
    name: "Ливневые дожди",
    icon: '<i class="bi bi-cloud-rain-heavy"></i>',
  })
  .set(81, {
    name: "Умеренные ливневые дожди",
    icon: '<i class="bi bi-cloud-rain-heavy"></i>',
  })
  .set(82, {
    name: "Сильные ливневые дожди",
    icon: '<i class="bi bi-cloud-rain-heavy"></i>',
  })
  .set(85, {
    name: "Снежные ливни",
    icon: '<i class="bi bi-cloud-sleet"></i>',
  })
  .set(86, {
    name: "Сильные снежные ливни",
    icon: '<i class="bi bi-cloud-sleet"></i>',
  })
  .set(95, {
    name: "Гроза",
    icon: '<i class="bi bi-cloud-lightning-rain"></i>',
  })
  .set(96, {
    name: "Гроза с небольшим градом",
    icon: '<i class="bi bi-cloud-hail"></i>',
  })
  .set(99, {
    name: "Гроза c сильным градом",
    icon: '<i class="bi bi-cloud-hail"></i>',
  });

export async function getWeather(longitude, latitude) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,cloud_cover,wind_speed_10m&timezone=Europe%2FMoscow`
    );
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export function addWeather(data) {
  const temperature = document.querySelector("#temperature");
  temperature.textContent =
    data.current.temperature_2m + data.current_units.temperature_2m;

  const weather = document.querySelector(".weather-icon");
  const currentWeather = weatherCodes.get(data.current.weather_code);
  weather.innerHTML = `
    <span class='weather-text'>${currentWeather.name}</span>
    ${currentWeather.icon}
  `;
}
