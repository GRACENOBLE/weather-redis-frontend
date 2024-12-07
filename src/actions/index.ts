"use server";

export const GetCurrentWeather = async () => {
  const url =
    "http://localhost:8081/weather?lat=0.3976677749854413&lon=32.6378629998115";

  const response = await fetch(url).then((res) => res.json());

  return response
};
