import React, { useState } from "react";
import { getWeatherForecast } from "../../modules/weatherModule";
import weatherStyles from "../../css/weather.module.css";
import WeatherItem from "../common/weatherItem";

export default function WeatherWrapper() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [cityData, setCityData] = useState([]);

  const handleSearch = async (e) => {
    setCityData([]);
    e.preventDefault();
    setLoading(true);
    try {
      const data = await getWeatherForecast(city);
      setLoading(false);

      setCityData(data);
    } catch (error) {
      setLoading(false);

      console.error(error.message);
    }
  };

  return (
    <div className={weatherStyles.container}>
      <div className={weatherStyles.header}>
        <div>
          <h1 className={weatherStyles.title}>Weather in your city</h1>
        </div>
        <div className={weatherStyles.inputDiv}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            className={weatherStyles.searchInput}
          />
          <button onClick={handleSearch} className={weatherStyles.searchButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#fff"
              className="bi bi-question-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
            </svg>
            &nbsp; Search
          </button>
        </div>

        <div>{loading && <img src="/kOnzy.gif" height={20} width={20} alt="loader" />}</div>
      </div>

      <div className={weatherStyles.weatherWrapper}>
        {cityData.length > 0 &&
          cityData.map((item, index) => (
            <React.Fragment key={item.pop}>
              <WeatherItem item={item} />
            </React.Fragment>
          ))}
      </div>
      {cityData.length > 0 && (
        <div className={weatherStyles.bottomText}>This is the view in the browser</div>
      )}
    </div>
  );
}
