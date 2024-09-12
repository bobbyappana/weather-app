const API_KEY = "8b7770a0963d1d52a660971c8049e3bf";
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

export const getWeatherForecast = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Error fetching  data");
    }

    const data = await response.json();
    const forecast = [];

    for (let i = 0; i < data.list.length; i += 8) {
      if (forecast.length >= 5) break;
      forecast.push(data.list[i]);
    }

    return forecast;
  } catch (error) {
    console.error("Error fetching  data:", error);
    throw error;
  }
};
