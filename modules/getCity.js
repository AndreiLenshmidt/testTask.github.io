const GEOKODE_API_KEY = "fd5f19aa-3d44-4472-bfb8-f44388eac582";

export async function getCity(longitude, latitude) {
  try {
    const response = await fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=${GEOKODE_API_KEY}&geocode=${longitude},${latitude}&format=json`
    );
    const data = await response.json();
    console.log(data);

    localStorage.setItem(
      "city",
      await data.response.GeoObjectCollection.featureMember[0].GeoObject
        .metaDataProperty.GeocoderMetaData.Address.Components[4]
        .name
    );
    // return data.response.GeoObjectCollection.featureMember[0].GeoObject
    //   .metaDataProperty.GeocoderMetaData.Address.Components[4].name ;
  } catch (error) {
    console.log(error.message);
    localStorage.setItem("city", "Краснодар");
    // return "Краснодар";
  }
}

export function addCity() {
  const city = document.querySelector("#city");
  city.textContent = localStorage.getItem("city");
}
