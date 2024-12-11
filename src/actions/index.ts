"use server";

export const GetCurrentWeather = async (city: string) => {
  const coordinates = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=b276450722b0a660643388906a4e115f`
  )
    .then((response) => response.json())
    .then((res) => res[0])
    .then((res) => [res.lat, res.lon]);

  //console.log(coordinates);

  const url = `http://localhost:8081/weather?lat=${coordinates[0]}&lon=${coordinates[1]}`;

  try {
    return await fetch(url)
      .then((res) => res.json())
      .then((res) => res);
  } catch (e) {
    console.log(e);
  }
};
